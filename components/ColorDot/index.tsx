import styled from "styled-components";
import { Typography } from "@components/Styled/Typography";
import { color, foreground } from "@styles/style-constant"

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 5px 0;
`;

const Dot = styled.div<{ hexColor: string }>`
  height: 32px;
  width: 32px;
  background-color: ${props => props.hexColor};
`;

const BorderContainer = styled.div< { borderColor: string } >`
  border: 1px solid ${props => props.borderColor};
  padding: 3px;
`;

export const ColorDot = ({ hexColor, borderColor }: any) => {
  return (
    <Container>
      <BorderContainer borderColor={foreground.fg4}>
        <Dot hexColor={hexColor} />
      </BorderContainer>


      <Typography.Body>
        {hexColor}
      </Typography.Body>
    </Container>
  )
}