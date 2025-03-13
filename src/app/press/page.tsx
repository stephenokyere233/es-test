import BlogList from "@/components/press/blog-list";
import Hero from "@/components/press/hero";

export const metadata = {
  title: "Stephen Okyere | Press & Media",
  description: "Latest news and media from Bomba around the world.",
};

export default function PressPage() {
  return (
    <main className="mt-[80px]">
      <Hero />
      <BlogList />
    </main>
  );
}
