import { ColorGroup } from "@components/ColorGroup";
import { FlexBox } from "@components/Styled/FlexBox";
import { Typography } from "@components/Styled/Typography";

import { themes, Theme } from "@styles/themes";
type ThemeSelectionProps = {
  theme: Theme;
  onSelectTheme: (theme: Theme) => void;
}

export const ThemeSelection = (props: ThemeSelectionProps) => {
  const { theme, onSelectTheme } = props;

  return (
    <FlexBox flexDirection="column" gap={10}>
      <Typography.H2 theme={theme}>
        Theme [ <b>{theme.name}</b> ]
      </Typography.H2>

      <FlexBox flexDirection="row" flexWrap="wrap" gap={10}>
        {themes.map((theme) => (
          <ColorGroup
            key={theme.name}
            theme={theme}
            onClick={onSelectTheme} />
        ))}
      </FlexBox>
    </FlexBox>


  )
}