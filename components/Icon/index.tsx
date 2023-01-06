import styled from 'styled-components';
import { colors } from '@styles/style-constant';

import 'remixicon/fonts/remixicon.css'


type IconContainerProps = {
  size: string | number;
};

const StyledIcon = styled.i<IconContainerProps>`
  font-size: ${props => props.size}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  color: ${colors.text};
`;

type IconProps = {
  size: number;
  iconName: string;
};

export const Icon = (props: IconProps) => {
  const { size, iconName } = props;

  return <StyledIcon className={iconName + " ri-fw"} size={size}></StyledIcon>
};