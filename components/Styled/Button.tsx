import styled from "styled-components";
import { colors } from "@styles/style-constant";

export const Button = styled.button`
  padding: 5px;
  
  border: 1px solid ${colors.text};
  border-radius: 4px;

  cursor: pointer;

  &:hover{
    border-color: ${colors.lightBlue};
  }
`;
