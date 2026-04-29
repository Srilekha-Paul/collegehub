import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CollegeHub",
  description: "Search, compare, and save top colleges across India.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
