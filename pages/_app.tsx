import type { AppProps } from 'next/app'
import { Fragment } from 'react'
// import GlobalStyle from '@styles/globalStyles'
import "@styles/globals.css";
import "@styles/styles.css";

import { useThemeStore } from "@store/themeStore"

function MyApp({ Component, pageProps }: AppProps) {
  const theme = useThemeStore(
    (state: any) => state.theme)

  return (
    <Fragment>
      {/* <GlobalStyle theme={theme}/> */}
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp
