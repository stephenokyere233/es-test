import { ReactNode } from "react";

export interface FeatureCardProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  actionText: string;
  actionLink: string;
  bgColor: string;
  isComingSoon?: boolean;
}

export type FooterLink = {
  label: string;
  href: string;
  hasArrow?: boolean;
};

export interface CategoryButtonProps {
  children: ReactNode;
  className?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}
