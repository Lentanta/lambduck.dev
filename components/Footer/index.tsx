import { Typography } from "@components/Styled/Typography";
import styled from "styled-components";
import packageInfo from "../../package.json";

import { useThemeStore } from "@store/themeStore";
import NextLink from 'next/link';
import { Nunito } from "@next/font/google"
import clsx from 'clsx';

import 'remixicon/fonts/remixicon.css'

const nunito = Nunito({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nunito',
});

export const Footer = () => {
  const theme = useThemeStore(
    (state: any) => state.theme)

  return (
    <div className="py-7 bg-[#FFF4EE]">
      <div>
        <p className={clsx(nunito.className, "text-center text-lg text-[#7E6F73]")}>
          Made by me (Lentanta)
        </p>
        <p className={clsx(nunito.className, "text-center text-base text-[#7E6F73]")}>
          Version: {packageInfo.version}
        </p>
      </div>
    </div>
  )
}