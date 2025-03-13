import CurrencyConverter from "@/components/home/currency-converter";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import Partners from "@/components/home/partners";

export default function Home() {
  return (
    <main className="mt-[80px]">
      <Hero />
      <CurrencyConverter />
      <Features />
      <Partners />
    </main>
  );
}
