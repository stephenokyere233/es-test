import Link from "next/link";
import WidthConstraint from "./ui/width-constraint";

const Footer = () => {
  return (
    <footer className="bg-white py-8 text-navy-blue px-4">
      <WidthConstraint className="">
        {/* Sign up section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-indigo-900 mb-1">Sign up for free</h2>
          <p className="text-xl text-indigo-900 mb-6">Join thousands of users</p>

          {/* Horizontal line - visible only on desktop */}
          <div className="hidden md:block border-t border-gray-200 mb-6"></div>
        </div>

        <div className="md:flex md:justify-between">
          <div className="md:flex md:space-x-16 mb-8">
            {/* Links section - Two columns */}
            <div className="grid grid-cols-2 gap-x-4 md:flex md:space-x-16 mb-8 md:mb-0">
              {/* Company links */}
              <div>
                <h3 className="font-semibold mb-3 text-sm text-gray-600">Company</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/about" className="hover:underline text-indigo-900">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/features" className="hover:underline text-indigo-900">
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:underline text-indigo-900">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/careers" className="hover:underline text-indigo-900">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal" className="hover:underline text-indigo-900">
                      Legal
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Support links */}
              <div>
                <h3 className="font-semibold mb-3 text-sm text-gray-600">Support</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="mailto:hello@bomba.co"
                      className="hover:underline text-indigo-900"
                    >
                      hello@bomba.co
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/yourwhatsappnumber"
                      className="hover:underline flex items-center text-indigo-900"
                    >
                      WhatsApp <span className="ml-1">↗</span>
                    </a>
                  </li>
                  <li>
                    <Link href="/help" className="hover:underline text-indigo-900">
                      Help Center
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Company info - positioned differently on desktop vs mobile */}
            <div className="mb-12 md:mb-0">
              <p className="font-semibold text-sm mb-2 text-indigo-900">
                The neo bank for Africans globally
              </p>
              <p className="text-xs text-gray-600">
                Bomba Ltd is a UK-incorporated Company with Registration Number (RC:
                13501277)
              </p>
            </div>
          </div>

          {/* Right side content for desktop */}
          <div className="md:w-1/3">
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-xs mb-2 text-gray-600">
                Stay updated by subscribing to our newsletters
              </p>
              <div className="mb-2">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="border border-gray-300 rounded p-2 w-full mb-2 text-sm"
                />
              </div>
              <div className="flex items-center mb-4">
                <span className="text-sm text-indigo-900 font-medium">Subscribe</span>
                <span className="ml-1 text-indigo-900">→</span>
              </div>
              <div className="border-t border-gray-200 w-12 mb-4"></div>
            </div>

            {/* Social media - grid on mobile, horizontal on desktop */}
            <div className="grid grid-cols-2 gap-y-2 md:flex md:space-x-4 mb-6 text-sm">
              <Link href="https://instagram.com" className="text-indigo-900">
                Instagram
              </Link>
              <Link href="https://facebook.com" className="text-indigo-900">
                Facebook
              </Link>
              <Link href="https://linkedin.com" className="text-indigo-900">
                LinkedIn
              </Link>
              <Link href="https://twitter.com" className="text-indigo-900">
                Twitter
              </Link>
            </div>
          </div>
        </div>

        {/* App store links and copyright - different layout on desktop */}
        <div className="md:flex md:justify-between md:items-center">
          {/* App store links */}
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 mb-8 md:mb-0">
            <Link
              href="https://play.google.com"
              className="border border-gray-300 rounded px-3 py-2 flex items-center justify-between md:justify-start"
            >
              <div className="md:flex md:items-center">
                <div className="md:mr-2">
                  <div className="text-xs text-gray-600">Get it on</div>
                  <div className="font-semibold text-indigo-900">Google Play</div>
                </div>
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center md:ml-2">
                  <span>▶</span>
                </div>
              </div>
            </Link>
            <Link
              href="https://apps.apple.com"
              className="border border-gray-300 rounded px-3 py-2 flex items-center justify-between md:justify-start"
            >
              <div className="md:flex md:items-center">
                <div className="md:mr-2">
                  <div className="text-xs text-gray-600">Download on the</div>
                  <div className="font-semibold text-indigo-900">App Store</div>
                </div>
                <div className="w-6 h-6 md:ml-2">
                  <span>🍎</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-xs text-gray-600">
            <p>© 2022 Bomba Limited. All rights reserved.</p>
            <div className="flex flex-wrap space-x-2 mt-1">
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
              <span>|</span>
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link href="/cookie" className="hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </WidthConstraint>
    </footer>
  );
};

export default Footer;
