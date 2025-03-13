import {
  APP_STORE_LINKS,
  FOOTER_LINKS,
  FOOTER_SECTIONS,
  SOCIAL_LINKS,
} from "@/lib/constants";
import { FooterLink } from "@/lib/interfaces";
import { ArrowRight } from "lucide-react";
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

const Footer = () => {
  return (
    <footer className="bg-white py-20 text-navy-blue px-4 bg-[url('/images/footer.svg')] bg-cover bg-center">
      <WidthConstraint className="space-y-10">
        <h2 className="text-2xl font-medium text-indigo-900 lg:text-5xl leading-[1.25em]">
          Sign up for free <br /> Join thousands of users
        </h2>
        <Separator color="#6E80A3" />
        <div className="grid grid-cols-2">
          <div className="grid grid-cols-2 w-max gap-10">
            {FOOTER_SECTIONS.map((section) => (
              <FooterLinkSection
                key={section.title}
                title={section.title}
                links={section.links}
              />
            ))}
          </div>
          <div className="flex items-center justify-end">
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

        <div className="md:flex md:justify-between items-end">
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row gap-4">
              {APP_STORE_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-gray-300 rounded px-3 py-2 flex items-center justify-between md:justify-start"
                >
                  <div className="md:flex md:items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center md:ml-2">
                      <span>{item.icon}</span>
                    </div>
                    <div className="">
                      <div className="text-xs text-gray-600">{item.tagLine}</div>
                      <div className="font-semibold text-indigo-900">{item.text}</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-xs text-gray-600">
              <p>© 2022 Bomba Limited. All rights reserved.</p>
              <div className="flex flex-wrap space-x-2 mt-1">
                {FOOTER_LINKS.legal.map((link, index) => (
                  <div key={link.href} className="flex items-center">
                    <Link href={link.href} className="hover:underline">
                      {link.label}
                    </Link>
                    {index < FOOTER_LINKS.legal.length - 1 && (
                      <span className="mx-2">|</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="md:w-1/3">
            <div className="mb-6 space-y-4">
              <p className="font-semibold text-sm text-indigo-900">
                Stay updated on our newsletters
              </p>
              <div className="flex gap-2 items-center">
                <div className="mb-2 flex-1 px-4 py-3 bg-indigo-900 rounded-l-xl">
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

            <div className="grid grid-cols-2 gap-y-2 md:flex md:space-x-4 mb-6 text-sm">
              {SOCIAL_LINKS.map((social) => (
                <Link key={social.href} href={social.href} className="text-indigo-900">
                  {social.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </WidthConstraint>
    </footer>
  );
};

export default Footer;
