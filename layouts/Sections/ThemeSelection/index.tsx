import { ColorGroup } from "./ColorGroup";
import { FlexBox } from "@components/Styled/FlexBox";
import { Typography } from "@components/Styled/Typography";

import { themes, Theme } from "@styles/themes";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3 , 1fr);
  gap: 1rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2 , 1fr);
  };

  @media only screen and (max-width: 425px) {
    grid-template-columns: repeat(2 , 1fr);
  };
`

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

      <Grid>
        {themes.map((theme) => (
          <ColorGroup
            key={theme.name}
            theme={theme}
            onClick={onSelectTheme} />
        ))}
      </Grid>
    </FlexBox>


  )
}