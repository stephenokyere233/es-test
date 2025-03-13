import { BLOG_POSTS } from "@/lib/constants";
import { BlogPost, CategoryButtonProps } from "@/lib/interfaces";
import Image from "next/image";
import WidthConstraint from "../ui/width-constraint";

const CategoryButton = ({ children, className = "" }: CategoryButtonProps) => {
  return (
    <div className="relative w-max">
      <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-md bg-indigo-900 bg-[linear-gradient(45deg,#1e3a8a_25%,transparent_25%,transparent_50%,#1e3a8a_50%,#1e3a8a_75%,transparent_75%,transparent)] bg-[length:10px_10px]"></div>
      <div
        className={`relative block px-4 py-2 text-white text-xs font-medium bg-[#4CD964] rounded-md hover:bg-[#3bc954] transition-colors z-10 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

const BlogList = () => {
  return (
    <section className="py-16">
      <WidthConstraint>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </WidthConstraint>
    </section>
  );
};

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className="flex flex-col bg-[#F8F9FE] rounded-lg h-full overflow-clip group">
      <div className="p-4 space-y-4">
        <CategoryButton>{post.category}</CategoryButton>
        <h3 className="text-xl font-bold text-indigo-900 mb-2 group-hover:text-indigo-700 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm mb-4">{post.date}</p>
      </div>
      <div className="relative min-h-50 flex-1 h-max w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  );
};

export default BlogList;
