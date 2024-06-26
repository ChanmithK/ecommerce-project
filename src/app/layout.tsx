import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";

import "slick-carousel/slick/slick.css";
import Footer from "./components/footer";
import Layout from "./components/layout";
import { Toaster } from "react-hot-toast";
import MobNavbar from "./components/common/mob-navbar";
import "react-loading-skeleton/dist/skeleton.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <Toaster />
          <Header />
          <MobNavbar />
          {children}
          <Footer />
        </Layout>
      </body>
    </html>
  );
}
