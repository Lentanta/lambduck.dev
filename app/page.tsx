import { Metadata } from 'next';
import { Fragment } from 'react';
import { ContactSection } from './ContactSection';
import { IntroduceSection } from "./IntroduceSection";
import { ProjectsSection } from './ProjectsSection';

export const metadata: Metadata = {
  title: 'Lentanta website',
  icons: "/images/lambda-logo.jpg",
};

export default function Page() {
  return (
    <Fragment>
      <IntroduceSection />
      <ProjectsSection />
      <ContactSection />
    </Fragment >
  );
}