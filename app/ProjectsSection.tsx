import clsx from 'clsx';
import { DesktopApp } from '@components/DesktopApp.tsx';
import { Head2, Paragraph } from '@components/Common/Typography';
import { LinkWrapper } from '@components/Common/LinkWrapper';

const projects = [
  {
    name: "Defender Beta",
    description: "A tower defend game made with JavaScript Canvas",
    link: " https://lentanta.github.io/defender-beta"
  },
  {
    name: "Minimal multi-purpose server template",
    description: "A minimal Typescript server template",
    link: " https://github.com/Lentanta/multi-purpose-server"
  },
  {
    name: "Animation color dots",
    description: "A small animated background using P5JS",
    link: " https://animation-dots.vercel.app/?width=700&height=700"
  },
]

const ProjectInformation = ({ name, description, link }: any) => {
  return (
    <div>
      <Head2>
        {name}
      </Head2>
      <Paragraph>
        {description}
      </Paragraph>
      <LinkWrapper href={link} target="_blank">
        <Paragraph>
          {link}
        </Paragraph>
      </LinkWrapper>
    </div>
  )
}

export const ProjectsSection = () => {
  return (
    <DesktopApp windowName="Projects" className="mt-3">
      <div className="[&>*:not(:first-child)]:mt-7">
        {projects.map((item) => <ProjectInformation {...item} />)}
      </div>
    </DesktopApp>
  )
}