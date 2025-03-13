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
