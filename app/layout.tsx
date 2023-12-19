import "../src/styles/globals.css";
import { Metadata } from "next";
import { Layout } from "@components/Layout";
import { Poppins, Montserrat } from "next/font/google";
import Head from "next/head";
import Link from "next/link";

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

export const poppins = Poppins({
  weight: ["800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--poppins",
});

const montserrat = Montserrat({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--montserrat",
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <Head>
        <Link rel="preload" href="/images/black-paper.png" />
        <Link rel="preload" href="/images/light-paper.png" />
        <Link rel="preload" href="/images/soft-wallpaper.png" />
      </Head>
      <body className={`${poppins.variable} ${montserrat.variable}`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
