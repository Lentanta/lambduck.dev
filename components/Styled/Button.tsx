import styled from "styled-components";
import { colors } from "@styles/style-constant";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 5px;
  
  border: 1px solid ${colors.text};
  border-radius: 4px;

  cursor: pointer;

  &:hover{
    opacity: 0.7;
  }
`;
