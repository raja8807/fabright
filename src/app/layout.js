import Footer from "@/components/layout/Footer/Footer";
import "../styles/globals.scss";
// import Header from "@/components/layout/Header/Header";
// import Footer from "@/components/layout/Footer/Footer";
import FONTS from "@/styles/fonts";
import AOSProvider from "@/components/layout/AOSProvider/AOSProvider";
import Header from "@/components/layout/Header/Header";

export const metadata = {
  metadataBase: new URL("https://www.fabright.in"),

  title: {
    default: "Fabright | Solar & Sustainable Energy Solutions",
    template: "%s | Fabright",
  },

  description:
    "Fabright delivers innovative solar energy and prefabrication solutions, including solar rooftops, streetlights, water pumps, and sustainable infrastructure.",

  keywords: [
    "Fabright",
    "solar energy solutions",
    "solar rooftop",
    "solar street lights",
    "solar water pumps",
    "prefabricated structures",
    "sustainable energy",
    "solar solutions India",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName: "Fabright",
    title: "Fabright | Solar & Sustainable Energy Solutions",
    description:
      "Discover innovative solar energy and prefabrication solutions for a sustainable future.",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Fabright Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fabright | Solar & Sustainable Energy Solutions",
    description:
      "Innovative solar energy and prefabrication solutions for a sustainable future.",
    images: ["/logo/logo-s.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AOSProvider>
          <Header />
          <main style={{ flex: 1 }} className={FONTS.font1}>
            {children}
            <Footer />
          </main>
        </AOSProvider>
      </body>
    </html>
  );
}
