import { FlexBox } from "@components/Styled/FlexBox";
import { Typography } from "@components/Styled/Typography";
import { Button } from "@components/Styled/Button";
import { backgroundAnimations } from "@utils/constant";
import { Theme } from "@styles/themes";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3 , 1fr);
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2 , 1fr);
  };
`

type AnimationConfigProps = {
  theme: Theme,
  onSelectAnimation: (type: number) => void;
}

export const AnimationConfig = (props: AnimationConfigProps) => {
  const { theme, onSelectAnimation } = props;

  return (
    <FlexBox flexDirection="column" gap={10}>
      <Typography.H2 theme={theme}>
        Background
      </Typography.H2>
      <Grid>
        {backgroundAnimations.map((name: string, index: number) => (
          <Button key={name} theme={theme} onClick={() => onSelectAnimation(index)}>
            <Typography.Body theme={theme}>
              {name}
            </Typography.Body>
          </Button>
        ))}
      </Grid>
    </FlexBox>
  )
}