"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FEATURE_CARDS, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import WidthConstraint from "./ui/width-constraint";

// Function to scroll to a feature section
const scrollToFeature = (
  featureId: string,
  pathname: string,
  router: ReturnType<typeof useRouter>,
  setCheck?: React.Dispatch<React.SetStateAction<boolean>>
) => {
  // If we're not on the home page, navigate to home page first
  if (pathname !== "/") {
    router.push("/?scrollTo=" + featureId);
    return;
  }

  // Close mobile menu if it's open
  if (setCheck) {
    setCheck(false);
  }

  // If we're already on the home page, scroll to the feature
  setTimeout(() => {
    const element = document.getElementById(featureId);
    if (element) {
      // Get the header height to offset the scroll position
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;

      // Calculate the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;

      // Calculate the absolute position to scroll to
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20;

      // Scroll to the element with the offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }, 100);
};

// Component to display feature links
const FeaturesContent = ({
  className,
  pathname,
  router,
  setCheck,
}: {
  className?: string;
  pathname: string;
  router: ReturnType<typeof useRouter>;
  setCheck?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={className}>
      {FEATURE_CARDS.map((feature) => (
        <button
          key={feature.category}
          onClick={() =>
            scrollToFeature(
              feature.category.toLowerCase().replace(/\s+/g, "-"),
              pathname,
              router,
              setCheck
            )
          }
          className="flex w-full items-center gap-2 p-2 text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
        >
          {feature.title}
        </button>
      ))}
    </div>
  );
};

const MobileMenu = ({
  check,
  setCheck,
}: {
  check: boolean;
  setCheck: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const pathname = usePathname();
  const router = useRouter();

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
                {ROUTES.map((route) => {
                  if (route.hasPopover) {
                    return (
                      <Accordion
                        key={route.label}
                        type="single"
                        collapsible
                        className="w-full"
                      >
                        <AccordionItem
                          value="features"
                          className="border-b border-border"
                        >
                          <AccordionTrigger className="py-2 hover:no-underline">
                            <span className="text-sm font-medium">{route.label}</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <FeaturesContent
                              className="flex flex-col py-2"
                              pathname={pathname}
                              router={router}
                              setCheck={setCheck}
                            />
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    );
                  }
                  return (
                    <li key={route.label} className="w-full last:border-none">
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
  const router = useRouter();

  return (
    <nav className="hidden lg:flex">
      <ul className="flex gap-10 uppercase items-center justify-center font-medium text-foreground">
        {ROUTES.map((route) => {
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
                <PopoverContent className="w-64 p-2">
                  <FeaturesContent pathname={pathname} router={router} />
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
  const router = useRouter();

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

    // Check if we need to scroll to a feature after navigation
    if (pathname === "/" && typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const scrollTo = urlParams.get("scrollTo");

      if (scrollTo) {
        // Wait for the page to load before scrolling
        setTimeout(() => {
          scrollToFeature(scrollTo, pathname, router);
          // Clean up the URL
          window.history.replaceState({}, document.title, "/");
        }, 800);
      }
    }
  }, [pathname, router]);

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
      <MobileMenu check={check} setCheck={setCheck} />
    </header>
  );
};

export default Header;
