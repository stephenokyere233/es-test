import { ArrowRight } from "lucide-react";
import Link from "next/link";
import WidthConstraint from "../ui/width-constraint";

const Hero = () => {
  return (
    <section className="py-20 bg-[url('/images/press/bg.png')] bg-cover bg-center">
      <WidthConstraint>
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-6">
            Latest news and media
            <br />
            from around the world
          </h1>
          <p className="text-gray-600 mb-8 text-lg max-w-xl">
            Please write to us at{" "}
            <a href="mailto:media@bomba.co" className="text-indigo-600 hover:underline">
              media@bomba.co
            </a>{" "}
            if you have a media enquiry. We&apos;ll do our best to get back to you as soon
            as possible.
          </p>
          <Link
            href="/press-kit"
            className="inline-flex items-center text-indigo-600 font-medium border-b-2 border-indigo-600 pb-1 hover:opacity-80 transition-opacity"
          >
            Get press kit
            <ArrowRight />
          </Link>
        </div>
      </WidthConstraint>
    </section>
  );
};

export default Hero;
