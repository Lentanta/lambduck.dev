import { Typography } from "@components/Styled/Typography";
import { themes } from "@styles/themes";
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ColorsGroupButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;

  width: fit-content;
  border: 2px solid ${({ theme }) => theme.text};
  border-radius: 4px;
  padding: 3px;
`;

const ColorSquare = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${(props) => props.color};
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

const StyledBody = styled(Typography.Body)`
  margin-left: 5%;
`;

const ColorGroup = ({ theme, onClickTheme }: any) => {
  return (
    <ColorsGroupButton theme={theme} onClick={() => onClickTheme(theme)}>

      <ColorSquare color={theme.bodyBg} />
      <ColorSquare color={theme.success} />
      <ColorSquare color={theme.text} />
      <ColorSquare color={theme.contentBg} />
      <ColorSquare color={theme.error} />

      <ColorNameContainer theme={theme}>
        <StyledBody theme={theme}>
          {theme.name}
        </StyledBody>
      </ColorNameContainer>
    </ColorsGroupButton>
  )
};

export const ThemeSelector = (props: any) => {
  const { onClickTheme } = props;

  return (
    <Container>
      {themes.map((theme, index) => (
        <ColorGroup key={index} theme={theme} onClickTheme={onClickTheme} />
      ))}
    </Container>
  )
}