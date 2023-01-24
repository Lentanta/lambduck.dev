import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 5px;
  
  border: 1px solid ${({ theme }) => theme.text};
  border-radius: 4px;

  cursor: pointer;

  &:hover{
    opacity: 0.7;
  }
`;
