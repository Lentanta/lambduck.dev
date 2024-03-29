import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

import { Nunito } from "next/font/google"

import 'remixicon/fonts/remixicon.css'
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
      <body className="bg-color-light h-full">
        <Header />

        <main className="h-full">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
