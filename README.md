# ES TEST - Technical Assessment

![Bomba Logo](public/images/logo.svg)

## 🌟 Features

- **Multi-Currency Accounts**: Create and manage accounts in various currencies
- **Peer-to-Peer Marketplace (Swap)**: Exchange currencies at preferred rates
- **Express Transfers**: Send money instantly to 20+ African countries
- **Referral Program**: Earn bonuses by referring friends and family
- **Bomba Connect**: Access deals from top brands (Coming Soon)

## 🚀 Technologies

This project is built with:

- **Next.js 14**: React framework with App Router for server-side rendering and routing
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For responsive and utility-first styling
- **Framer Motion**: For smooth animations and transitions
- **Radix UI**: For accessible UI components
- **Lucide Icons**: For beautiful and consistent iconography

## 📋 Project Structure

```
src/
├── app/                  # Next.js App Router pages
├── components/           # Reusable UI components
│   ├── home/             # Home page specific components
│   ├── press/            # Press page components
│   └── ui/               # Shared UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and constants
│   ├── constants.ts      # Application constants
│   ├── interfaces.ts     # TypeScript interfaces
│   └── utils.ts          # Helper functions
└── styles/               # Global styles
```

## 🔧 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/bomba.git
   cd es-test
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:

   ```bash
   pnpm dev

   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📱 Key Components

### Currency Converter

The Currency Converter allows users to:

- Convert between multiple currencies with real-time rates
- Choose between Standard and Express fee options
- See transparent fee calculations and delivery times

### Feature Cards

Dynamic feature cards showcase Bomba's key offerings:

- Swap: Peer-to-peer marketplace
- Express: Fast money transfers
- Refer & Earn: Referral program
- Bomba Connect: Brand partnerships (Coming Soon)

### Responsive Design

The application is fully responsive with:

- Desktop-optimized layouts for larger screens
- Mobile-friendly interfaces for on-the-go access
- Smooth transitions between viewport sizes

## 🧩 Custom Components

- **FloatingInput**: Enhanced input fields with currency selection
- **FeatureSlider**: Interactive slider for showcasing features
- **FeatureCards**: Dynamic cards with customizable properties
- **MobileHero/DesktopHero**: Responsive hero sections

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📬 Contact

For any inquiries, please reach out to hello@bomba.co.

---

Built by Stephen Okyere.
