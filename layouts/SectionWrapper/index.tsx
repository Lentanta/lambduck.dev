import styled from "styled-components";
import { Typography } from "@components/Styled/Typography";
import { useThemeStore } from "@store/themeStore";

const Section = styled.section`
  margin-top: 50px;
  margin-left: 20px;
  margin-right: 20px;

  @media only screen and (max-width: 768px) {
    margin-left: auto;
    margin-right: auto;
  }
`;

const SectionContent = styled.div`
  padding: 10px 20px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    gap: 20px;
  }
`;

export const SectionWrapper = (props: any) => {
  const { children, title } = props;
  const theme = useThemeStore(
    (state: any) => state.theme)

  return (
    <Section>
      {title && (
        <Typography.H2 theme={theme}>
          {title}
        </Typography.H2>
      )}

      <SectionContent>
        {children}
      </SectionContent>
    </Section>
  )
}
