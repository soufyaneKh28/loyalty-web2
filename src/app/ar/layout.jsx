import { FooterAr } from "@/components";
import MenubarAr from "@/components/MenubarAr";
import { cairoClass } from "../font";
import ContactBtn from "@/components/ui/ContactBtn";

export default function arLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body className={`rtl  ${cairoClass} `}>
        <MenubarAr />
        <ContactBtn />
        {children}
        <FooterAr />
      </body>
    </html>
  );
}
