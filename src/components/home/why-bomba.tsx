import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import WidthConstraint from "../ui/width-constraint";

const WhyBomba = () => {
  return (
    <section className="py-16 bg-white">
      <WidthConstraint>
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-900 mb-4">
            The Bomba app help our users send & receive money, swap currencies across
            borders and pay bills, safely, conveniently, cheaply and on time.
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            We are customer-centric and focused on offering value to you that enable you
            achieve your financial needs.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
          {/* Card 1 - Swap */}
          <Card className="bg-lavender-50 border-0">
            <CardHeader>
              <div className="text-gray-500 text-sm">Swap</div>
              <CardTitle className="text-xl text-indigo-900 font-bold">
                Peer to peer marketplace
              </CardTitle>
              <CardDescription className="text-gray-600">
                Do you worry about unfavorable exchange rates when sending money? Create
                or accept offers at your preferred rate on Bomba&apos;s Peer to peer
                marketplace.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative min-h-[180px]">
              <div className="absolute bottom-0 right-0">
                <Image
                  src="/images/swap-illustration.png"
                  alt="Peer to peer marketplace illustration"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Link
                href="/swap"
                className="flex items-center text-indigo-900 font-medium text-sm"
              >
                Swap now
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </CardFooter>
          </Card>

          {/* Card 2 - Express */}
          <Card className="bg-mint-50 border-0">
            <CardHeader>
              <div className="text-gray-500 text-sm">Express</div>
              <CardTitle className="text-xl text-indigo-900 font-bold">
                Take the express lane
              </CardTitle>
              <CardDescription className="text-gray-600">
                Transact with light speed using Bomba Express. You can send funds at
                Bomba&apos;s exchange rates to family and friends from the UK & US to 20
                African countries.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative min-h-[180px]">
              <div className="absolute bottom-0 right-0">
                <Image
                  src="/images/express-illustration.png"
                  alt="Express money transfer illustration"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Link
                href="/express"
                className="flex items-center text-indigo-900 font-medium text-sm"
              >
                Send now
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </CardFooter>
          </Card>

          {/* Card 3 - Refer & Earn */}
          <Card className="bg-lavender-50 border-0">
            <CardHeader>
              <div className="text-gray-500 text-sm">Refer & Earn</div>
              <CardTitle className="text-xl text-indigo-900 font-bold">
                Make money while you refer
              </CardTitle>
              <CardDescription className="text-gray-600">
                Bomba offers a referral bonus passively through its platform. Refer your
                friends and family to use Bomba and earn up to £40.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative min-h-[180px]">
              <div className="absolute bottom-0 right-0">
                <Image
                  src="/images/refer-illustration.png"
                  alt="Refer and earn illustration"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Link
                href="/refer"
                className="flex items-center text-indigo-900 font-medium text-sm"
              >
                Share now
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </CardFooter>
          </Card>

          {/* Card 4 - Bomba Connect */}
          <Card className="bg-peach-50 border-0">
            <CardHeader>
              <div className="text-gray-500 text-sm">Bomba Connect</div>
              <CardTitle className="text-xl text-indigo-900 font-bold">
                Deals from top brands
              </CardTitle>
              <CardDescription className="text-gray-600">
                With Bomba Connect, you can buy for and access goods and services from
                some of the best and trusted brands - at the best rates and with minimal
                wait time - all within the Bomba App.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative min-h-[180px]">
              <div className="absolute bottom-0 right-0">
                <Image
                  src="/images/connect-illustration.png"
                  alt="Bomba Connect illustration"
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Link
                href="/connect"
                className="flex items-center text-indigo-900 font-medium text-sm"
              >
                Explore now
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </WidthConstraint>
    </section>
  );
};

export default WhyBomba;
