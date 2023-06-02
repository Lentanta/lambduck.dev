import { Nunito } from "@next/font/google"
import clsx from 'clsx';

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export const HomePageHeader = () => {
  return (
    <div className="w-full h-[720px] flex justify-center items-center">
      <div className="m-auto w-fit h-fit">
        <h1 className={clsx(
          nunito.className,
          "text-5xl text-center font-bold",
          "text-[#7E6F73]",
        )}>Hi, I'm Letanta</h1>

        <p className={clsx(
          nunito.className,
          "text-2xl text-center text-[#7E6F73]",
          "mt-2"
        )}>Welcome to my website 🌱</p>
      </div>
    </div>
  )
}

 