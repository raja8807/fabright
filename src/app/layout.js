import Footer from "@/components/layout/Footer/Footer";
import "../styles/globals.scss";
// import Header from "@/components/layout/Header/Header";
// import Footer from "@/components/layout/Footer/Footer";
import FONTS from "@/styles/fonts";
import AOSProvider from "@/components/layout/AOSProvider/AOSProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AOSProvider>
          {/* <Header /> */}
          <main style={{ flex: 1 }} className={FONTS.font1}>
            {children}
            <Footer />
          </main>
        </AOSProvider>
      </body>
    </html>
  );
}
