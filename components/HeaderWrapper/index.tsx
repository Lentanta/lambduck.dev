import styled from "styled-components";
import { Typography } from "@components/Styled/Typography";

const HeaderContainer = styled.div<{ imageUrl: string }>`
    position: relative;

    padding: 50px;
    margin: auto;
    min-height: 524px;
    max-width: 1024px;

    background-image: url(${props => props.imageUrl});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media only screen and (max-width: 768px) {
      padding: 15px;
      min-height: 520px;
    }
  `;

const HeaderContentContainer = styled.div<{ color: string }>`
    max-width: 632px;

    background-color: ${props => props.color};
    background-color: rgba(40,40,40, 0.7);
    backdrop-filter: blur(100px);

    border-radius: 12px;
    padding: 35px 40px;

    @media only screen and (max-width: 1024px) {
      margin-top: 10%;
      margin-left: auto;
      margin-right: auto;
    } 
 `;



export const HeaderWrapper = (props: any) => {
  const { imageUrl, children } = props;

  return (
    <HeaderContainer imageUrl={imageUrl}>
      <HeaderContentContainer color="#282828">
        {children}
      </HeaderContentContainer>
    </HeaderContainer>
  )
}