import { Metadata } from 'next';
import { Fragment } from 'react';
import { LinkButton } from './components/LinkButton';
import { WelcomeBanner } from "./sections/WelcomeBanner"
import { WebsiteInformations } from './sections/WebsiteInformations';
import { ColorPalette } from './sections/ColorPalette';
import { ActionBar } from './sections/ActionBar';

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
        className="bg-dark-bg3"
        target="_blank"
        href="https://www.github.com/Lentanta"
        icon={<i className="ri-github-fill text-dark-fg0 text-7xl" />}
      />

      <LinkButton
        className="bg-dark-red2"
        target="_blank"
        href="mailto: thanhtam180298@gmail.com"
        icon={<i className="ri-mail-fill text-dark-fg0 text-7xl" />}
      />

      <LinkButton
        className="bg-dark-blue1"
        target="_blank"
        href="https://www.linkedin.com/in/thanh-t%C3%A2m-l%C3%AA-b95878193/"
        icon={<i className="ri-linkedin-fill text-dark-fg0 text-7xl" />}
      />

      <ColorPalette />
    </Fragment>
  );
}
