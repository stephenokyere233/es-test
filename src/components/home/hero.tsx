import DesktopHero from "./desktop-her";
import MobileHero from "./mobile-hero";

const Hero = () => {
  return (
    <section className="bg-gray-50 pb-5 lg:pb--20 py-20  space-y-5 overflow-hidden ">
      <MobileHero />
      <DesktopHero />
    </section>
  );
};

export default Hero;
