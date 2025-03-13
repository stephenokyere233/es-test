"use client";
import { SLIDES } from "@/lib/constants";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import WidthConstraint from "../ui/width-constraint";

// Define the slide data

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  // Auto-advance SLIDES every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % SLIDES.length;
      setDirection(1); // Move from right
      setCurrentIndex(nextIndex);
    }, 5000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Handle manual navigation
  const goToSlide = useCallback(
    (index: number) => {
      if (index === currentIndex) return;

      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  // Variants for slide animations
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-gray-50 py-20 space-y-5 overflow-hidden ">
      <WidthConstraint className="max-w-[1400px]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="w-full space-y-10"
          >
            {/* Phone */}
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[550px] rounded-[40px] border-[8px] border-green-400 bg-indigo-900 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[32px]"></div>
              </div>
            </div>
            {/* Title */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <h1 className="text-4xl md:text-6xl font-bold text-indigo-900 mb-6">
                {SLIDES[currentIndex].title}
              </h1>
              <div className="w-full flex justify-end items-end">
                <p className="text-gray-700 w-full text-lg">
                  {SLIDES[currentIndex].description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </WidthConstraint>
      {/* Slide indicators */}
      <div className="">
        <div className="grid grid-cols-5 gap-10 xl:gap-20 relative">
          <div className="w-full h-[1px] bg-[#6E80A3] absolute top-1/2 -translate-y-1/2"></div>
          {SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-full h-[2px] z-10 transition-colors ${
                index <= currentIndex ? "bg-[#2668EC]" : ""
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <WidthConstraint className="max-w-[1400px]">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* News & Release section */}
          <div className="flex flex-col md:flex-row">
            <div className="text-sm text-gray-500 mr-6 mb-2 md:mb-0">
              News & Release update
            </div>
            <div className="flex flex-col">
              {SLIDES[currentIndex].news.map((item, idx) => (
                <div key={idx} className="mb-2 md:mb-0 md:mr-8">
                  <span className="text-gray-500 mr-2">{item.date} —</span>
                  <Link href={item.link} className="text-blue-600 hover:underline">
                    {item.text}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            {/* Scroll Down button */}
            <div className="flex items-center text-indigo-900">
              <span className="font-medium mr-2">Scroll Down</span>
              <svg
                className="w-5 h-5 text-green-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </WidthConstraint>
    </section>
  );
};

export default Hero;
