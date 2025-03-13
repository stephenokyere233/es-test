import Footer from "@/components/footer";
import Header from "@/components/header";
import { pushPenny } from "@/lib/fonts";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Stephen Okyere | ES TEST",
  description: "Technical Assignment For ES",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pushPenny.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
