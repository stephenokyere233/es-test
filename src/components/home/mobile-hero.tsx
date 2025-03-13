import { ArrowDown, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import WidthConstraint from "../ui/width-constraint";

const MobileHero = () => {
  return (
    <WidthConstraint className="flex lg:hidden flex-col items-center space-y-10">
      {/* Phone Image */}
      <div className="relative w-full max-w-[280px] h-[450px] mr-10">
        <Image
          src="/images/mobile-hero.svg"
          alt="Bomba mobile app showing multi-currency accounts"
          fill
          className="object-contain scale-[1.1]"
          priority
        />
      </div>

      <div className="w-full">
        {/* Text Content */}
        <div className="max-w-md">
          <h1 className="text-3xl font-bold text-indigo-900 mb-4">
            Multi-currency accounts for Africans
          </h1>
          <p className="text-gray-600 mb-8">
            Transact at home and abroad - create, send, hold, receive money in African
            currencies and foreign currencies while also sending money to and from Africa
            seamlessly
          </p>
        </div>

        {/* CTA Button */}
        <div className="space-y-5">
          <div className="flex gap-2 items-center">
            <Link
              href="/how-it-works"
              className="flex items-center justify-center bg-indigo-900 text-white rounded-full w-12 h-12 mb-3"
            >
              <Play size={20} fill="white" className="ml-1" />
            </Link>
            <span className="text-indigo-900 font-medium">See how it works</span>
          </div>

          {/* Scroll indicator */}
          <ArrowDown size={24} className="text-green-500" />
        </div>
      </div>
    </WidthConstraint>
  );
};

export default MobileHero;
