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
       <meta name="ahrefs-site-verification" content="13b3363a4ccedd10fe5ff9fe99d7e5ca0d82894db62e56fbd183fc065503f28c"/>
    <meta name="google-site-verification" content="CP-bBZfPoKzhXDdIAAeb5AvIDbZoMMJToPGRiBTbb00" />
       <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-7E6FNQ81D9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-7E6FNQ81D9');
</script>
    </head>
      <body className={roboto.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
