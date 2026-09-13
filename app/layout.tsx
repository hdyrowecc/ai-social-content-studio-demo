import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Signal Studio — AI Social Content Workspace",
  description: "Interactive spec project for an AI-powered social content SaaS.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
