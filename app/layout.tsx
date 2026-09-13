import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Roecc — Product Frontend Portfolio",
    template: "%s | Roecc Portfolio",
  },
  description: "Interactive product frontend portfolio featuring an AI SaaS, premium ecommerce storefront, and analytics dashboard.",
  openGraph: {
    title: "Roecc — Product Frontend Portfolio",
    description: "Three interactive spec projects built to demonstrate commercial product UI and frontend engineering.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
