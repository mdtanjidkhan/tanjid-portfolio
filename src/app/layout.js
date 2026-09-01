import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Md. Tanjid Khan | Full-Stack Web Developer",
  description:
    "Md. Tanjid Khan is a Full-Stack Web Developer specializing in React, Next.js, Node.js, Express.js, and MongoDB.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
         <ThemeProvider attribute="data-theme">
          <Navbar></Navbar>
          <Toaster position="top-center" reverseOrder={false} />
           {children}
           <Footer></Footer>
         </ThemeProvider>
        </body>
    </html>
  );
}
