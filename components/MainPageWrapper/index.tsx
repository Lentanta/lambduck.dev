import styled from "styled-components";

const StyledMain = styled.main`
  width: 1024px;
  margin: auto;
`;

type propsType = {
  children: JSX.Element
}

export const MainPageWrapper = ({ children }: propsType) => {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  )
}