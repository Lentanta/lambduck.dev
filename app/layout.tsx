import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

import { clsx } from "clsx";
import { Noto_Sans, Nunito } from "next/font/google"
import { ThemeProvider } from "@material-tailwind/react";

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

const notoSans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notoSans',
  weight: "400"
});


const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className={`${nunito.variable} ${notoSans.variable}`}>
      <body className="bg-color-dark-bg h-full">
        {/* <AnimationBackground /> */}
        {/* <Header /> */}

        <main className={clsx(
          "h-full py-[50px] w-[1300px]",
          "grid grid-cols-6 gap-4"
        )}>
          {children}
        </main>

        {/* <Footer /> */}
      </body>
    </html>
  );
}

export default RootLayout;
