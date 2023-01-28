import styled from "styled-components";
import { Typography } from "@components/Styled/Typography";

const ColorsGroupButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;

  width: fit-content;
  height: fit-content;
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 4px;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const ColorSquare = styled.div`
  width: 52px;
  height: 52px;
  background-color: ${(props) => props.color};

  @media only screen and (max-width: 768px) {
    height: 64px;
    width: 100%;
  }
`;

const ColorNameContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;

  bottom: 0;
  left: 0;
  height: 50%;
  width: 100%;
  background-color: ${({ theme }) => theme.contentBg + "80"};
`;

const StyledBody = styled(Typography.Caption)`
  margin-left: 3%;
`;

export const ColorGroup = ({ theme, onClick }: any) => {
  return (
    <ColorsGroupButton theme={theme} onClick={() => onClick(theme)}>
      <ColorSquare color={theme.bodyBg} />
      <ColorSquare color={theme.primary} />
      <ColorSquare color={theme.text} />
      <ColorSquare color={theme.contentBg} />
      <ColorSquare color={theme.secondary} />

      <ColorNameContainer theme={theme}>
        <StyledBody theme={theme}>
          {theme.name}
        </StyledBody>
      </ColorNameContainer>
    </ColorsGroupButton>
  )
};