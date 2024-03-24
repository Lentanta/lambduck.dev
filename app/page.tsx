import { Metadata } from 'next';
import { Fragment } from 'react';
import { Contact } from '@sections/Contact';
import { AboutMe } from "@sections/AboutMe";

export const metadata: Metadata = {
  title: 'Lentanta website',
  icons: "/images/lambda-logo.jpg",
};

export default function Page() {
  return (
    <Fragment>
      <AboutMe />
      <Contact />
    </Fragment>
  );
}
