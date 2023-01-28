import { ReactChildren, ReactElement } from "react";

import styled from "styled-components";
import { Typography } from "@components/Styled/Typography";
import { useThemeStore } from "@store/themeStore";

const Section = styled.section`
  margin-top: 50px;
  margin-bottom: 30px;
  margin-left: 20px;
  margin-right: 20px;

  @media only screen and (max-width: 768px) {
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
  }
`;

type SectionContentContainerProps = {
  gridColumnSize: string[];
  gridGap: number;
};

const SectionContentContainer = styled.div<SectionContentContainerProps>`
  display: grid;
  grid-template-columns: ${({ gridColumnSize }) => gridColumnSize.join(' ')};
  
  gap: ${({ gridGap }) => gridGap}px;
  padding: 10px 20px;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto;

    padding: 5px 15px;
  }
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
