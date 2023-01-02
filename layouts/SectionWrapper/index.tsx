import styled from "styled-components";
import { Typography } from "@components/Styled/Typography";

export const SectionWrapper = (props: any) => {
  const { children, title = "TITLE" } = props;

  const StyledSection = styled.section`
    margin-top: 52px;
    margin-left: 10px;
    margin-right: 10px;
  `;

  const StyledContent = styled.div`
    padding: 10px;
  `;

  return (
    <StyledSection>
      <Typography.H2>{title}</Typography.H2>
      <StyledContent>
        {children}
      </StyledContent>
    </StyledSection>
  )
}
