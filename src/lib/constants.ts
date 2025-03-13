import { BlogPost, FeatureCardProps } from "./interfaces";

export const SLIDES = [
  {
    id: 1,
    title: "Multi-currency accounts for Africans",
    description: `Transact at home and abroad - <span style="color: #4CD964;">create</span>, <span style="color: #4CD964;">send</span>, <span style="color: #4CD964;">hold</span> and <span style="color: #4CD964;">receive</span> money in African and foreign currencies. Send money to and from Africa, seamlessly.`,
    image: "/images/features/multi-currency.png",
    news: [
      {
        date: "June 20, 2022",
        text: `Bomba now has a dollar wallet, activate your account`,
        link: "#",
      },
      {
        date: "June 01, 2022",
        text: "Top 10 Summer Vacation Places in 2022",
        link: "#",
      },
    ],
  },
  {
    id: 2,
    title: "Choose from several payment methods",
    description: `With Bomba, you get to choose how you <span style="color: #4CD964;">send</span> and <span style="color: #4CD964;">receive</span> money; send at your own rate with <span style="color: #4CD964;">'Swap'</span>, send and receive instantly with <span style="color: #4CD964;">'Express'</span>, or make free local transfers with <span style="color: #4CD964;">'Withdraw Money'</span>`,
    image: "/images/features/payment-methods.png",
    news: [
      {
        date: "June 20, 2022",
        text: `Bomba now has a stable wallet, activate your account`,
        link: "#",
      },
      {
        date: "June 01, 2022",
        text: "Top 10 Summer Vacation Places in 2022",
        link: "#",
      },
    ],
  },
  {
    id: 3,
    title: "Accept and create offers with Swap",
    description: `With Bomba, you get to choose how you <span style="color: #4CD964;">send</span> and <span style="color: #4CD964;">receive</span> money; update your card info with <span style="color: #4CD964;">'Swap'</span> and send money instantly with <span style="color: #4CD964;">'Express'</span>.`,
    image: "/images/features/payment-methods.png",
    news: [
      {
        date: "June 20, 2022",
        text: `Bomba now has a stable wallet, activate your account`,
        link: "#",
      },
      {
        date: "June 01, 2022",
        text: "Top 10 Summer Vacation Places in 2022",
        link: "#",
      },
    ],
  },
  {
    id: 4,
    title: "Make instant transfers with Express",
    description: `You can <span style="color: #4CD964;">send money internationally</span> at your preferred rate on our <span style="color: #4CD964;">Peer-to-peer Marketplace</span> by choosing or accepting an offer. Created offers get accepted within an average time of 30 minutes`,
    image: "/images/features/payment-methods.png",
    news: [
      {
        date: "June 20, 2022",
        text: `Bomba now has a stable wallet, activate your account`,
        link: "#",
      },
      {
        date: "June 01, 2022",
        text: "Top 10 Summer Vacation Places in 2022",
        link: "#",
      },
    ],
  },
  {
    id: 5,
    title: "Review and confirm your transaction",
    description: `<span style="color: #4CD964;">Review</span> your transaction, ensure that the provided details are correct, then click the send button!.`,
    image: "/images/features/payment-methods.png",
    news: [
      {
        date: "June 20, 2022",
        text: `Bomba now has a stable wallet, activate your account`,
        link: "#",
      },
      {
        date: "June 01, 2022",
        text: "Top 10 Summer Vacation Places in 2022",
        link: "#",
      },
    ],
  },
  {
    id: 6,
    title: "Completed! Fast, easy and secure",
    description: `<span style="color: #4CD964;">Money on its way!</span> Send money today to your friends, family or make payment to a business. <span style="color: #4CD964;">Get started</span> → `,
    image: "/images/features/payment-methods.png",
    news: [
      {
        date: "June 20, 2022",
        text: `Bomba now has a stable wallet, activate your account`,
        link: "#",
      },
      {
        date: "June 01, 2022",
        text: "Top 10 Summer Vacation Places in 2022",
        link: "#",
      },
    ],
  },
];

export const FEATURE_CARDS: FeatureCardProps[] = [
  {
    category: "Swap",
    title: "Peer to peer marketplace",
    description:
      "Do you worry about unfavorable exchange rates when sending money? Create or accept offers at your preferred rate on Bomba's Peer to peer marketplace.",
    imageSrc: "/images/1.svg",
    imageAlt: "Peer to peer marketplace illustration",
    actionText: "Swap now",
    actionLink: "/swap",
    bgColor: "#6D48FF",
  },
  {
    category: "Express",
    title: "Take the express lane",
    description:
      "Transact with light speed using Bomba Express. You can send funds at Bomba's exchange rates to family and friends from the UK & US to 20 African countries.",
    imageSrc: "/images/2.svg",
    imageAlt: "Express money transfer illustration",
    actionText: "Send now",
    actionLink: "/express",
    bgColor: "#04CE9D",
  },
  {
    category: "Refer & Earn",
    title: "Make money while you refer",
    description:
      "Bomba offers a referral bonus passively through its platform. Refer your friends and family to use Bomba and earn up to £40.",
    imageSrc: "/images/3.svg",
    imageAlt: "Refer and earn illustration",
    actionText: "Share now",
    actionLink: "/refer",
    bgColor: "#6E80A3",
  },
  {
    category: "Bomba Connect",
    title: "Deals from top brands",
    description:
      "With Bomba Connect, you can buy for and access goods and services from some of the best and trusted brands - at the best rates and with minimal wait time - all within the Bomba App.",
    imageSrc: "/images/4.svg",
    imageAlt: "Bomba Connect illustration",
    actionText: "Explore now",
    actionLink: "/connect",
    bgColor: "#EF845C",
    isComingSoon: true,
  },
];

export const PARTNER_LOGOS = [
  { src: "/images/partners/10.svg", alt: "Partner Logo 10" },
  { src: "/images/partners/9.svg", alt: "Partner Logo 9" },
  { src: "/images/partners/8.svg", alt: "Partner Logo 8" },
  { src: "/images/partners/7.svg", alt: "Partner Logo 7" },
  { src: "/images/partners/6.svg", alt: "Partner Logo 6" },
  { src: "/images/partners/5.svg", alt: "Partner Logo 5" },
  { src: "/images/partners/4.svg", alt: "Partner Logo 4" },
  { src: "/images/partners/3.svg", alt: "Partner Logo 3" },
  { src: "/images/partners/11.svg", alt: "Partner Logo 11" },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Features", href: "/features" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Legal", href: "/legal" },
  ],
  support: [
    { label: "hello@bomba.co", href: "mailto:hello@bomba.co" },
    { label: "WhatsApp", href: "https://wa.me/yourwhatsappnumber", hasArrow: true },
    { label: "Help Center", href: "/help" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookie" },
  ],
};

export const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "Facebook", href: "https://facebook.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Twitter", href: "https://twitter.com" },
];

export const APP_STORE_LINKS = [
  {
    href: "https://play.google.com",
    text: "Google Play",
    tagLine: "Get it on",
    icon: "/images/google.svg",
  },
  {
    href: "https://apps.apple.com",
    text: "App Store",
    tagLine: "Download on the",
    icon: "/images/apple.svg",
  },
];

export const FOOTER_SECTIONS = [
  { title: "Company", links: FOOTER_LINKS.company },
  { title: "Support", links: FOOTER_LINKS.support },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Combining AI, fintech to solve African problems – Ericsson",
    category: "Core exciting Africa",
    date: "December 05, 2021",
    image: "/images/press/3.png",
    slug: "combining-ai-fintech-to-solve-african-problems",
  },
  {
    id: "2",
    title: "Ghana to Host the 14th Africa Fintech Summit on October 8th",
    category: "Tech Latest",
    date: "May 24, 2022",
    image: "/images/press/2.png",
    slug: "ghana-to-host-14th-africa-fintech-summit",
  },
  {
    id: "3",
    title: "Midterm Report: Techstars Toronto's Second 2021 Class",
    category: "Techstars",
    date: "Dec 05, 2021",
    image: "/images/press/4.png",
    slug: "midterm-report-techstars-toronto-second-2021-class",
  },
  {
    id: "4",
    title: "Wise granted approval to join Zengin, Japan's domestic payment system",
    category: "Fintech",
    date: "December 05, 2021",
    image: "/images/press/1.png",
    slug: "wise-granted-approval-to-join-zengin",
  },
  {
    id: "5",
    title: "African startups to participate at Techstars Toronto October 2021 cohort",
    category: "Fintech Africa",
    date: "October 23, 2021",
    image: "/images/press/5.png",
    slug: "african-startups-to-participate-at-techstars-toronto",
  },
  {
    id: "6",
    title: "More African startups get into Techstars Toronto",
    category: "Tech Canada",
    date: "October 19, 2021",
    image: "/images/press/5.png",
    slug: "more-african-startups-get-into-techstars-toronto",
  },
];

export const ROUTES = [
  {
    label: "Features",
    href: "/features",
    hasPopover: true,
  },
  {
    label: "Press",
    href: "/press",
  },
  {
    label: "Company",
    href: "/",
  },
];
