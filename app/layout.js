import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Examgain - Question Answers",
  description: "Find answers to your exam questions on Examgain.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8804622562841633"
     crossorigin="anonymous"></script>
    <meta name="google-site-verification" content="CP-bBZfPoKzhXDdIAAeb5AvIDbZoMMJToPGRiBTbb00" />
    </head>
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
