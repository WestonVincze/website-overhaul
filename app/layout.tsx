import "../styles/globals.css";
import { Metadata } from "next";
import { Layout } from "@/components/Layout";
import { Amatic_SC } from "next/font/google";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: {
    template: "Weston Vincze | %s",
    absolute: "Weston Vincze",
  },
  description: "Portfolio Website made by Weston Vincze using NextJS.",
  openGraph: {
    title: "Weston Vincze Portfolio",
    siteName: "Weston Vincze Portfolio",
    url: "https://westonvincze.com",
    images: ["/images/og-image.png", "/images/og-image-alt.png"],
    locale: "en_CA",
    type: "website",
  },
};

const typeWriter = localFont({
  src: "../public/fonts/OldTypewriter/fzm-Old.Typewriter.ttf",
  display: "swap",
});

export const amatic = Amatic_SC({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--amatic",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={`${amatic.variable} ${typeWriter.className}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
