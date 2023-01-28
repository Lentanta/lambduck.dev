import { FlexBox } from "@components/Styled/FlexBox";
import { Typography } from "@components/Styled/Typography";
import { Button } from "@components/Styled/Button";
import { animationTypeNames } from "@utils/constant";
import { Theme } from "@styles/themes";

type AnimationConfigProps = {
  theme: Theme,
  onSelectAnimation: (name: string) => void;
}

export const AnimationConfig = (props: AnimationConfigProps) => {
  const { theme, onSelectAnimation } = props;

  return (
    <FlexBox flexDirection="column" gap={10}>
      <Typography.H2 theme={theme}>
        Background animation
      </Typography.H2>
      <FlexBox flexDirection="column" gap={10}>
        {Object.values(animationTypeNames).map((name: string) => (
          <Button key={name} theme={theme} onClick={() => onSelectAnimation(name)}>
            <Typography.Body theme={theme}>
              {name}
            </Typography.Body>
          </Button>
        ))}
      </FlexBox>
    </FlexBox>
  )
}