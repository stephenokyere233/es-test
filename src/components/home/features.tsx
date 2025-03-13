import { FEATURE_CARDS } from "@/lib/constants";
import { FeatureCardProps } from "@/lib/interfaces";
import { cn, hexToRgba } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import WidthConstraint from "../ui/width-constraint";

const FeatureCard = ({
  category,
  title,
  description,
  imageSrc,
  imageAlt,
  actionText,
  actionLink,
  bgColor,
  isComingSoon = false,
  index,
}: FeatureCardProps & { index: number }) => {
  const isTaller = index === 1 || index === 2;
  const bgColorRgba = hexToRgba(bgColor);

  return (
    <div className={cn("flex", index === 3 ? "justify-end items-end" : "")}>
      <Card
        style={{
          backgroundColor: bgColorRgba,
        }}
        className={cn(
          "border-0 overflow-clip relative hover:bg-opacity-40 transition-all duration-300 ease-in-out",
          isTaller ? "md:h-[650px]" : "md:h-[600px]"
        )}
      >
        <CardContent
          className={cn("relative flex flex-col h-full p-6", index === 3 ? "pt-0" : "")}
        >
          <div className="space-y-4 z-10">
            {isComingSoon && (
              <div className="">
                <Image
                  src="/images/coming-soon.svg"
                  alt="Coming Soon"
                  width={70}
                  height={70}
                />
              </div>
            )}
            <div className="text-gray-500 text-sm mb-1">{category}</div>
            <h2 className="text-xl text-indigo-900 font-bold mb-3">{title}</h2>
            <p className="text-gray-60 pb-10">{description}</p>
            <Link
              href={actionLink}
              className={`flex items-center underline underline-offset-5 text-indigo-900 font-medium text-sm ${
                isComingSoon ? "opacity-50 pointer-events-none" : ""
              }`}
            >
              {actionText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="w-full absolute bottom-0 right-0 flex-1 flex justify-end">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={400}
              height={400}
              className="object-contain"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <WidthConstraint className="max-w-[1100px]">
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

        {/* Custom grid layout to match the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-0 gap-x-10 px-4">
          {FEATURE_CARDS.map((card, index) => (
            <FeatureCard key={index} {...card} index={index} />
          ))}
        </div>
      </WidthConstraint>
    </section>
  );
};

export default Features;
