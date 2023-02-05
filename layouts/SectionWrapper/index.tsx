import { ReactChildren, ReactElement } from "react";

import styled from "styled-components";
import { Typography } from "@components/Styled/Typography";
import { useThemeStore } from "@store/themeStore";

const Section = styled.section`
  margin-top: 50px;
  margin-bottom: 30px;
  padding: 0px 20px;

  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    padding: 0px 10px;
  }
`;

type SectionContentContainerProps = {
  gridColumnSize: string[];
  gridGap: number;
};

const SectionContentContainer = styled.div<SectionContentContainerProps>`
  margin-top: 10px;
`;

type SectionWrapperProps = {
  children: ReactElement | ReactElement[];
  title?: string;
  gridColumnSize: string[];
  gridGap: number;
}

export const SectionWrapper = (props: SectionWrapperProps) => {
  const {
    children,
    title,
    gridColumnSize,
    gridGap,
  } = props;

  const theme = useThemeStore(
    (state) => state.theme)

  return (
    <Section>
      {title && (
        <Typography.H2 theme={theme}>
          {title}
        </Typography.H2>
      )}

      <SectionContentContainer gridColumnSize={gridColumnSize} gridGap={gridGap}>
        {children}
      </SectionContentContainer>
    </Section>
  )
}
