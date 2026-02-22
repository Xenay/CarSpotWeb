import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CarSnap — Spot. Collect. Dominate.",
  description:
    "The AR car spotting game where real cars become collectible battle cards. Capture cars with your camera, build your deck, and dominate in strategic turn-based battles.",
  keywords: ["car game", "AR game", "trading card game", "car spotting", "mobile game", "CarSnap"],
  openGraph: {
    title: "CarSnap — Spot. Collect. Dominate.",
    description:
      "The AR car spotting game where real cars become collectible battle cards. Capture cars with your camera, build your deck, and dominate.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cs-bg text-cs-text`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
