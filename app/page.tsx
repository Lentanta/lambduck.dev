import { Metadata } from 'next';
import { Fragment } from 'react';
import { LinkButton } from './components/LinkButton';

export const metadata: Metadata = {
  title: 'Lentanta website',
  icons: "/images/lambda-logo.jpg",
};

export default function Page() {
  return (
    <Fragment>
      <div className="flex flex-col items-center h-[500px] w-full bg-dark-bg col-span-full rounded-lg">
        <div className="p-5 bg-dark-bg h-full rounded-lg flex flex-col justify-center items-center">
          <p className="text-subTitle ml-1 font-bold text-dark-fg0">Welcome to my website</p>
          <div className='rounded-lg mt-1 border-2 py-5 px-9 border-dark-blue2'>
            <h1 className="text-8xl font-bold text-dark-blue2">Lambduck_</h1>
          </div>
          <p className="text-xl mt-2 ml-1 font-semibold text-dark-fg0">Lambda + Duck</p>
        </div>
      </div>

      <div className="bg-dark-bg col-span-3 rounded-lg p-4">
        <p className="text-xl text-dark-fg1">Information about this website:</p>
        <p className="text-lg text-dark-fg1">I have experience as a software engineer and am passionate about game development and computer science. I enjoy creating fun, quirky software projects in my spare time and also like to draw pixel art.</p>
      </div>

      <LinkButton
        target="_blank"
        href="https://www.github.com/Lentanta"
        className="bg-dark-bg3"
        icon={<i className="ri-github-fill text-dark-fg0 text-7xl" />}
      />

      <LinkButton
        target="_blank"
        href="mailto: thanhtam180298@gmail.com"
        className="bg-dark-red2"
        icon={<i className="ri-mail-fill text-dark-fg0 text-7xl" />}
      />

      <LinkButton
        target="_blank"
        href="https://www.linkedin.com/in/thanh-t%C3%A2m-l%C3%AA-b95878193/"
        className="bg-dark-blue1"
        icon={<i className="ri-linkedin-fill text-dark-fg0 text-7xl" />}
      />
    </Fragment>
  );
}
