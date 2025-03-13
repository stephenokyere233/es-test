import {
  APP_STORE_LINKS,
  FOOTER_LINKS,
  FOOTER_SECTIONS,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { FooterLink } from "@/lib/interfaces";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import WidthConstraint from "./ui/width-constraint";

const FooterLinkSection = ({ title, links }: { title: string; links: FooterLink[] }) => (
  <div>
    <h3 className="font-semibold mb-3 text-sm text-gray-600">{title}</h3>
    <ul className="space-y-2">
      {links.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className="hover:underline flex items-center text-indigo-900"
          >
            {link.label}
            {link.hasArrow && <span className="ml-1">↗</span>}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Copyright = ({ className }: { className?: string }) => {
  return (
    <div className={cn(`text-xs text-gray-600`, className)}>
      <p>© 2022 Bomba Limited. All rights reserved.</p>
      <div className={cn("space-x-2 mt-1", "hidden lg:flex")}>
        {FOOTER_LINKS.legal.map((link, index) => (
          <span key={link.href} className="flex items-center">
            <Link href={link.href} className="hover:underline">
              {link.label}
            </Link>
            {index < FOOTER_LINKS.legal.length - 1 && <span className="mx-2">|</span>}
          </span>
        ))}
      </div>
    </div>
  );
};

const NewsletterSubscription = ({ className }: { className?: string }) => (
  <div className={cn("space-y-4", className)}>
    <p className="font-semibold text-sm text-indigo-900">
      Stay updated on our newsletters
    </p>
    <div className="flex flex-col lg:flex-row gap-2 items-start lg:items-center">
      <div className="flex-1 px-4 py-3 w-full md:w-max bg-indigo-900 rounded-l-xl">
        <input
          type="email"
          placeholder="Enter your email address"
          className="text-white w-full"
        />
      </div>
      <Button variant="link" className="w-max">
        Subscribe <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  </div>
);

const AppStoreLinks = ({ className }: { className?: string }) => (
  <div className={cn("flex flex-col gap-4", className)}>
    {APP_STORE_LINKS.map((item) => (
      <Link
        key={item.href}
        href={item.href}
        className="border border-[#6E80A3] rounded px-3 py-2 flex items-center justify-between md:justify-start"
      >
        <div className="flex items-center gap-2">
          <Image src={item.icon} alt={item.text} width={24} height={24} />
          <div>
            <div className="text-xs text-gray-600">{item.tagLine}</div>
            <div className="font-semibold text-indigo-900">{item.text}</div>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

const SocialLinks = ({
  className,
  columns = 4,
}: {
  className?: string;
  columns?: number;
}) => (
  <div className={cn(`grid grid-cols-${columns} gap-x-4 text-sm`, className)}>
    {SOCIAL_LINKS.map((social) => (
      <Link key={social.href} href={social.href} className="text-indigo-900">
        {social.label}
      </Link>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-white py-20 text-navy-blue px-4 bg-[url('/images/footer.svg')] bg-cover bg-center">
      <WidthConstraint className="space-y-10">
        <h2 className="text-4xl font-medium text-indigo-900 lg:text-5xl leading-[1.25em]">
          Sign up for free <br /> Join thousands of users
        </h2>
        <Separator color="#6E80A3" />

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
          <div className="grid grid-cols-2 w-max gap-10">
            {FOOTER_SECTIONS.map((section) => (
              <FooterLinkSection
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
          <div className="flex items-center justify-start lg:justify-end">
            <div className="w-max">
              <p className="font-semibold text-sm mb-2 text-indigo-900">
                The neo bank for Africans globally
              </p>
              <p className="text-gray-600 max-w-[380px]">
                Bomba Ltd is a UK-incorporated Company with Registration Number (RC:
                13501277)
              </p>
            </div>
          </div>
        </div>

        {/* Desktop footer bottom section */}
        <div className="hidden lg:flex flex-col lg:flex-row lg:justify-between lg:items-end">
          <div className="space-y-5">
            <AppStoreLinks className="hidden md:flex md:flex-row" />
            <Copyright className="hidden md:block" />
          </div>

          <div className="w-1/3 space-y-4">
            <NewsletterSubscription />
            <SocialLinks className="hidden lg:grid" />
          </div>
        </div>

        {/* Mobile footer bottom section */}
        <section className="space-y-10 pt-20 block lg:hidden">
          <NewsletterSubscription />
          <div className="grid grid-cols-2 gap-y-2">
            <SocialLinks columns={1} className="flex flex-col justify-between gap-y-2" />
            <AppStoreLinks />
          </div>
          <Copyright />
        </section>
      </WidthConstraint>
    </footer>
  );
};

export default Footer;
