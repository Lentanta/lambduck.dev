import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css'
import { colors } from '@styles/style-constant';

const IconContainer = styled.div<{ size: string | number }>`
  font-size: ${props => props.size}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  color: ${colors.text};
`;

export const Icon = (props: any) => {
  const { size, iconName } = props;

  return (
    <IconContainer size={size}>
      <i className={iconName}></i>
    </IconContainer>
  )
}