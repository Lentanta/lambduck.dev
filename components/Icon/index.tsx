import styled from 'styled-components';
import 'remixicon/fonts/remixicon.css'


type IconContainerProps = {
  size: string | number;
  color: string;
};

const StyledIcon = styled.i<IconContainerProps>`
  font-size: ${props => props.size}px;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  color: ${props => props.color};
`;

type IconProps = {
  size: number;
  color: string;
  iconName: string;
};

export const Icon = (props: IconProps) => {
  const { size, iconName, color } = props;

  return (
    <StyledIcon
      className={iconName + " ri-fw"}
      size={size}
      color={color}
    />
  )
};