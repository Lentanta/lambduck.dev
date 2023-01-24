import styled from "styled-components";
import { Typography } from "@components/Styled/Typography";
import { useThemeStore } from "@store/themeStore";

const Section = styled.section`
  margin-top: 52px;
  margin-left: 10px;
  margin-right: 10px;
`;

const SectionContent = styled.div`
  padding: 10px;
`;

export const SectionWrapper = (props: any) => {
  const { children, title = "TITLE" } = props;
  const theme = useThemeStore(
    (state: any) => state.theme)
  
  return (
    <Section>
      <Typography.H2 theme={theme}>
        {title}
      </Typography.H2>

      <SectionContent>
        {children}
      </SectionContent>
    </Section>
  )
}
