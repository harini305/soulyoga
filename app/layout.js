import { Forum, Jost } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import { site } from "@/data/site";
import { getImage } from "@/lib/images";
import "./globals.css";

const forum = Forum({ weight: "400", subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-forum", display: "swap" });
// Substitute for the Wix-licensed Helvetica W01 Light / Futura LT W01 Book (audit 04 §1.1)
const jost = Jost({ weight: ["300", "400", "500"], subsets: ["latin", "latin-ext", "cyrillic"], variable: "--font-jost", display: "swap" });

const ogImage = getImage("home-hero").variants.find((v) => v.w === 1600);

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Soul Yoga Bali | Daily Yoga Class & Yoga Teacher Training in Ubud",
    template: "%s | Soul Yoga Bali",
  },
  description:
    "Soul Yoga Bali offer Daily Yoga Class and 200 Hours Yoga Teacher Training Program. Our beautiful yoga studio is located in the middle of rice-field in Ubud Bali. We focus on Alignment Hatha, Alignment Yoga, Vinyasa, Yoga Prop, Recovering Yoga and Inside Flow",
  openGraph: {
    type: "website",
    siteName: "Soul Yoga Bali",
    locale: "en_US",
    images: [{ url: ogImage.src, width: ogImage.w, height: ogImage.h, alt: getImage("home-hero").alt }],
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#fffcf5",
};

// Pre-hide first-screen items only when motion will run; removed by MotionProvider
// (or after 2.5 s as a safety net if scripts fail).
const motionScript = `(function(){try{var d=document.documentElement;if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('motion-pending');setTimeout(function(){d.classList.remove('motion-pending')},2500)}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${forum.variable} ${jost.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MotionProvider />
      </body>
    </html>
  );
}
