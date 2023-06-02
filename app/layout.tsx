import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

import { Nunito } from "next/font/google"
import "@styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode
};

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={`${nunito.variable}`}>
      <body>
        <Header />

        <main className="bg-gradient-to-b from-[#EDF4F5] 0% to-[#FFF4EE] 100% pb-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;