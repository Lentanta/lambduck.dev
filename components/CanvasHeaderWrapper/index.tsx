import dynamic from 'next/dynamic'

// import { P5JSCanvas } from "@components/P5JSCanvas";
import { Typography } from "@components/Styled/Typography";
import styled from "styled-components";

import { useWindowSize } from "@utils/useWindowSize";

const P5JSCanvas = dynamic(
  () => import('@components/P5JSCanvas')
    .then((mod) => mod.P5JSCanvas),
  { ssr: false }
)


const StyledContainer = styled.div`
  position: relative;
  min-height: 512px;
  max-width: 1024px;
`;

const StyledContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  
  padding: 50px;
  margin: auto;
  min-height: 524px;
  max-width: 1024px;

  @media only screen and (max-width: 768px) {
    min-height: 520px;
  }
`

const HeaderContentContainer = styled.div<{ color: string }>`
  max-width: 632px;
  backdrop-filter: blur(12px);

  border-radius: 12px;
  padding: 35px 40px;

  @media only screen and (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }
 `;

export const CanvasHeaderWrapper = (props: any) => {
  const { children } = props;
  const { width } = useWindowSize()

  return (
    <StyledContainer>
      <P5JSCanvas width={width} />

      <StyledContent>
        <HeaderContentContainer color="#282828">
          {children}
        </HeaderContentContainer>
      </StyledContent>

    </StyledContainer>
  )
}