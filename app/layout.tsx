import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const oswald = Oswald({ subsets: ["latin"],
weight :['200','300','400','500','600','700'],
variable: '--font-oswald',
});


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
    <html lang="en" className="bg-gray-200">
      <body className={`${oswald.variable}  w-full max-w-[1920px] 
      mx-auto bg-white
      `}>
        <Header />
        {children}
        <Footer/>
        </body>
    </html>
  );
}
