import { ChangeEvent, ReactNode } from "react";

export interface Currency {
  code: string;
  flag: string;
  name: string;
}

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

export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  type?: string;
  required?: boolean;
  className?: string;
  currency?: Currency;
  currencies?: Currency[];
  onCurrencyChange?: (currency: Currency) => void;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}
