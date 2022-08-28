import React, { LegacyRef } from 'react';
import iconMap from './svg/icon-map';

interface Props {
  ref?: LegacyRef<SVGSVGElement>;
  name: string;
  size?: string | number;
  style?: any;
  color?: string;
  height?: string;
  width?: string;
  hoverColor?: string;
}

const Icon = ({ ref, name, size, style, color, height, width, hoverColor, ...rest }: Props) => {
  const Icon = iconMap[name];
  const h = height ? height : size;
  const w = width ? width : size;

  return (
    <Icon
      ref={ref}
      color={color}
      fill={color}
      style={{ width: w, height: h, ...style }}
      {...rest}
    />
  );
};

Icon.defaultProps = {
  size: '5em',
  color: 'black',
};

export default Icon;
