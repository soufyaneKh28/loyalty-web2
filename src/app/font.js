import { Poppins, Roboto, Cairo } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

const cairo = Cairo({
  subsets: ["arabic"],

  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});
export const poppinsClass = poppins.className;
export const robotoClass = roboto.className;
export const cairoClass = cairo.className;
