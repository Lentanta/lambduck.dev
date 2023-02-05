import { useEffect, useState } from "react";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<any>({
    width: 1024,
    height: undefined
  });

  useEffect(() => {
    let preWidth = window.innerWidth;
    window.addEventListener("resize", () => {
      console.log(preWidth !== window.innerWidth)
      if (preWidth !== window.innerWidth) {
        preWidth = window.innerWidth;
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }
    });

    return () => {
      window.removeEventListener("resize", () => { });
    };
  }, [])

  return windowSize;
};