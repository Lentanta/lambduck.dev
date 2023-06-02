import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import "@styles/globals.css";

import { useThemeStore } from "@store/themeStore"

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useThemeStore(
    (state: any) => state.theme)

  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp
