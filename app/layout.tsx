import "./globals.css";

export const metadata = {
  title: "CollegeHub",
  description: "College Discovery Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}