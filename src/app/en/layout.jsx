import { Footer } from "@/components";
import Menubar from "@/components/Menubar";

import { Poppins, Roboto } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
export default function enLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Menubar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
