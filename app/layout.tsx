import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Roecc — Web Product Portfolio",
    template: "%s | Roecc",
  },
  description: "Conversion-focused websites, ecommerce experiences, and product interfaces — interactive spec projects built for real freelance use cases.",
  openGraph: {
    title: "Roecc — Web Product Portfolio",
    description: "Selected interactive work across lead-generation websites, ecommerce, and SaaS product UI.",
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
