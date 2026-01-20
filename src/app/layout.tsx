import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EmotionCreator",
  description: "Create beautiful emotional experiences",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
