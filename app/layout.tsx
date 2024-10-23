import { clsx } from "clsx";
import { Noto_Sans, Nunito } from "next/font/google"

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
        <main className={clsx(
          "h-full py-[30px] max-w-[1200px]",
          "grid grid-cols-3 gap-4 md:grid-cols-6 px-5",
          "items-center"
        )}>
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
