import styled from "styled-components";
import { Typography } from "@components/Styled/Typography";

export const SectionWrapper = (props: any) => {
  const { children, title = "TITLE" } = props;

  const Section = styled.section`
    margin-top: 52px;
    margin-left: 10px;
    margin-right: 10px;
  `;

  const SectionContent = styled.div`
    padding: 10px;
  `;

  return (
    <Section>
      <Typography.H2>
        {title}
      </Typography.H2>

      <SectionContent>
        {children}
      </SectionContent>
    </Section>
  )
}
