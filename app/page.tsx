import { Metadata } from 'next';
import { Fragment } from 'react';
import { LinkButton } from './components/LinkButton';
import { WelcomeBanner } from "./sections/WelcomeBanner"
import { WebsiteInformations } from './sections/WebsiteInformations';
import { ColorPalette } from './sections/ColorPalette';

export const metadata: Metadata = {
  title: 'Lentanta website',
  icons: "/images/lambda-logo.jpg",
};

export default function Page() {
  return (
    <Fragment>
      <WelcomeBanner />
      <WebsiteInformations />

      <LinkButton
        className="bg-dark-bg3 col-span-1 md:col-span-1 md:aspect-square"
        target="_blank"
        href="https://www.github.com/Lentanta"
        icon={<i className="ri-github-fill text-dark-fg0 text-5xl md:text-7xl" />}
      />

      <LinkButton
        className="bg-dark-red2 col-span-1 md:col-span-1 md:aspect-square"
        target="_blank"
        href="mailto: thanhtam180298@gmail.com"
        icon={<i className="ri-mail-fill text-dark-fg0 text-5xl md:text-7xl" />}
      />

      <LinkButton
        className="bg-dark-blue1 col-span-1 md:col-span-1 md:aspect-square"
        target="_blank"
        href="https://www.linkedin.com/in/thanh-t%C3%A2m-l%C3%AA-b95878193/"
        icon={<i className="ri-linkedin-fill text-dark-fg0 text-5xl md:text-7xl" />}
      />

      <ColorPalette />
      <div className="bg-dark-bg col-span-3 rounded-lg p-4 h-full flex flex-col">
        <div className="flex items-center gap-1">
          <i className="ri-article-fill text-neutral_aqua text-xl" />
          <h2 className="text-xl text-neutral_aqua">Posts</h2>
        </div>

        <div className="mt-3 h-full flex items-center justify-center min-h-[100px]">
          <p className="text-2xl text-dark-fg1">Coming soon!</p>
        </div>
      </div>

    </Fragment>
  );
}
