import { FooterAr } from "@/components";
import MenubarAr from "@/components/MenubarAr";
import { cairoClass } from "../font";

export default function arLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`rtl  ${cairoClass} `}>
        <MenubarAr />
        {children}
        <FooterAr />
      </body>
    </html>
  );
}
