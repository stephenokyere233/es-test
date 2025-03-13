"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import WidthConstraint from "./ui/width-constraint";

const routes = [
  {
    label: "Features",
    href: "/features",
    hasPopover: true,
  },
  {
    label: "Press",
    href: "/press",
  },
  {
    label: "Company",
    href: "/company",
    hasPopover: true,
  },
];

const MobileMenu = ({ check }: { check: boolean; isScrolled: boolean }) => {
  return (
    <div className="rounded-b-3xl bg-gray-50 ">
      <WidthConstraint className={cn(`${check ? "pb-5" : ""} w-full`)}>
        <AnimatePresence>
          {check && (
            <motion.nav
              key="nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden"
            >
              <ul className="flex flex-col gap-4 py-4">
                {routes.map((route) => {
                  if (route.hasPopover) {
                    return (
                      <Accordion
                        key={route.label}
                        type="single"
                        collapsible
                        className="w-full"
                      >
                        <AccordionItem value="socials" className="border-b border-border">
                          <AccordionTrigger className="py-2 hover:no-underline">
                            <span className="text-sm font-medium">{route.label}</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <SocialsContent className="flex flex-col py-2" />
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    );
                  }

                  return (
                    <li
                      key={route.label}
                      className="border-b border-border w-full first:pt-4 last:border-none pb-4"
                    >
                      <Button
                        asChild
                        variant="link"
                        className="text-foreground text-start border-none p-0 flex items-start justify-start"
                      >
                        <Link href={route.href} className="font-[600] w-full">
                          {route.label}
                        </Link>
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          )}
        </AnimatePresence>
      </WidthConstraint>
    </div>
  );
};

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-10 uppercase items-center justify-center font-medium text-foreground">
        {routes.map((route) => {
          if (route.hasPopover) {
            return (
              <Popover key={route.label}>
                <PopoverTrigger asChild className="h-max">
                  <Button
                    variant="ghost"
                    className="flex p-0 uppercase hover:bg-transparent items-center gap-1"
                  >
                    {route.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-48 p-2">
                  <SocialsContent />
                </PopoverContent>
              </Popover>
            );
          }
          return (
            <li key={route.href}>
              <Link
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href ? "text-muted-foreground " : "text-foreground"
                )}
              >
                {route.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [check, setCheck] = useState(false);
  const navRef = useRef<HTMLHeadingElement | null>(null);
  const pathname = usePathname();

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      setCheck(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      if (window.scrollY !== 0) {
        setCheck(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setCheck(false);
  }, [pathname]);

  return (
    <header
      ref={navRef}
      className={cn(
        "fixed top-0 z-[20] w-screen py-1 overflow-clip bg-gray-50 lg:bg-white",
        isScrolled || check ? "" : " h-[80px]",
        "lg:border-b border-border"
      )}
    >
      <WidthConstraint className="flex gap-10 lg:justify-center justify-end items-end lg:items-center h-full py-4">
        <NavBar />
        <div className="flex items-center justify-center gap-4">
          <Menu size={30} onClick={() => setCheck(!check)} className={`flex lg:hidden`} />
        </div>
      </WidthConstraint>
      <MobileMenu check={check} isScrolled={isScrolled} />
    </header>
  );
};

export default Header;

export const socialLinks = [
  {
    name: "Telegram",
    href: "#",
  },
  {
    name: "X (Twitter)",
    href: "#",
  },
  {
    name: "Discord",
    href: "",
  },
  {
    name: "Spotify",
    href: "#",
  },
];

interface SocialsContentProps {
  className?: string;
}

export function SocialsContent({ className }: SocialsContentProps) {
  return (
    <div className={className}>
      {socialLinks.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          className="flex items-center gap-2 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          {social.name}
        </Link>
      ))}
    </div>
  );
}
