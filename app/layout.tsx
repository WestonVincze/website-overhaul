import "../styles/globals.css";
import { Metadata } from "next";
import { Layout } from "@/components/Layout";

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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
};

export default RootLayout;
