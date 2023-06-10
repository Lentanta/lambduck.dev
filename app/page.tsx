import { Metadata } from 'next';

import { IntroduceSection } from "./IntroduceSection";
import { AboutMeSection } from "./AboutMeSection";

export const metadata: Metadata = {
  title: 'Lentanta website',
};

export default function Page() {
  return (
    <div>
      <IntroduceSection />
      <AboutMeSection />
    </div>
  );
}