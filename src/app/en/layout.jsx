import { Footer } from "@/components";
import Menubar from "@/components/Menubar";

import { Poppins, Roboto } from "next/font/google";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

// export const metadata = {
//   icons: {
//     icon: "/favicon.ico",
//   },
// };

export default function enLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body>
        <Menubar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
