import { Plus_Jakarta_Sans, Inter, Cairo } from "next/font/google";
import "./globals.css";
import { LangProvider } from "./i18n";

const display = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-d" });
const body = Inter({ subsets: ["latin"], variable: "--font-b" });
const arabic = Cairo({ subsets: ["arabic", "latin"], weight: ["400", "600", "700", "800"], variable: "--font-ar" });

export const metadata = {
  title: "Nourhane Bendjeddou – Backend, data & WordPress developer",
  description:
    "Backend developer, data engineer and WordPress developer based in Annaba, Algeria. Websites, mobile apps and data pipelines for agencies and brands in France and beyond.",
};

// Thème et langue appliqués avant le premier rendu (pas de flash)
const init = `try{var d=document.documentElement,t=localStorage.getItem("theme")||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");d.dataset.theme=t;var l=localStorage.getItem("lang");if(l){d.lang=l;d.dir=l==="ar"?"rtl":"ltr"}}catch(e){document.documentElement.dataset.theme="dark"}`;
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${arabic.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: init }} /></head>
      <body><LangProvider>{children}</LangProvider></body>
    </html>
  );
}
