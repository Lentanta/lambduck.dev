import { Metadata } from 'next';
import { Fragment } from 'react';
import { Contact } from './Contact';
import { AboutMe } from "./AboutMe";

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