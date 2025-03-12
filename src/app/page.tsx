import CurrencyConverter from "@/components/home/currency-converter";
import Hero from "@/components/home/hero";
import WhyBomba from "@/components/home/why-bomba";

export default function Home() {
  return (
    <main className="mt-[80px]">
      <Hero />
      <WhyBomba />
      <CurrencyConverter />
    </main>
  );
}
