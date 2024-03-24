import clsx from 'clsx';
import NextLink from "next/link";
import "@styles/globals.css";

const TitleBox = ({ text }: { text: string }) => {
  return (
    <div className={clsx(
      "border-2 border-color-dark",
      "rounded-md shadow-lg",
      "w-fit h-full",
      "px-6 py-3"
    )}>
      <h2 className="font-bold text-center">
        {text}<span>_</span>
      </h2>
    </div>
  )
};

export const Header = () => {
  return (
    <header className="mt-7">
      <nav className={clsx("w-ful")}>
        <div className={clsx("flex justify-center align-middle")}>
          <TitleBox text="Lambduck" />
        </div>

        <div className='mx-auto flex justify-center mt-5'>
          <div className={clsx(
            "flex justify-evenly",
            "p-4",
            "gap-4 md:gap-8")}>

            <NextLink href="/">
              <p>Home</p>
            </NextLink>

            <NextLink href="/articles">
              <p>Articles</p>
            </NextLink>

            {/* <LinkWrapper href="/blog">
              <p className={clsx("text-lg")}>
                Blog
              </p>
            </LinkWrapper> */}
          </div>

        </div>

      </nav>
    </header >
  )
}
