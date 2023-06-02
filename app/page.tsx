import { Metadata } from 'next';

import { IntroduceSection } from "./IntroduceSection";
import { AboutMeSection } from "./AboutMeSection";

export const metadata: Metadata = {
  title: 'My Page Title',
};

export default function Page() {
  return (
    <div>
      <IntroduceSection />
      <AboutMeSection />
    </div>
  );
}