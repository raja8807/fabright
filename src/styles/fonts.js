import { Noto_Sans as Font1 } from "next/font/google";
import { Montserrat as Font2 } from "next/font/google";
// import localFont from "next/font/local";

const font1 = Font1({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-primary",
});
const font2 = Font2({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-primary",
});

// If local font requires

// const localFont1 = localFont({
//   src: [
//     {
//       path: "../../public/fonts/fontName.woff",
//       weight: "500",
//       style: "normal",
//     },
//   ],
//   variable: "--font-local1",
// });

export const FONTS = {
  font1: font1.className,
  font2: font2.className,
  // font2: localFont1.className,
};

// export const FONT_VARIABLES = `${font1.variable} ${localFont1.variable}`;

export default FONTS;
