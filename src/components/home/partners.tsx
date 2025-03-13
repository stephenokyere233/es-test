import { PARTNER_LOGOS } from "@/lib/constants";
import Image from "next/image";
import WidthConstraint from "../ui/width-constraint";

const Partners = () => {
  return (
    <section className="py-20">
      <WidthConstraint>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left side - Heading and text */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-medium text-indigo-900">
              Trusted partners worldwide
            </h2>
            <p className="text-gray-600 max-w-[400px]">
              We&apos;re partners with countless major organisations around the globe
            </p>
          </div>

          {/* Right side - Partner logos grid */}
          <div className="">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 items-center">
              {PARTNER_LOGOS.map((logo, index) => (
                <div key={index} className="flex items-center justify-center h-12 group">
                  <div className="relative transition-all duration-300 ease-in-out">
                    {/* Grayscale version (visible by default) */}
                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={40}
                        className="object-contain max-h-full filter grayscale"
                      />
                    </div>

                    {/* Color version (visible on hover) */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Image
                        src={logo.src}
                        alt={`${logo.alt} - Color`}
                        width={120}
                        height={40}
                        className="object-contain max-h-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
};

export default Partners;
