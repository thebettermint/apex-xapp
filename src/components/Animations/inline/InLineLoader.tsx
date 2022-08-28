import React from 'react';
import style from './inline.module.scss';
import Dot from './dots.svg';

interface Props {
  type?: string;
  theme?: string;
}

const InLineLoader = ({ type, theme }: Props) => {
  let buttonType = 'primary';
  if (type) buttonType = type;

  let themeStyle = 'default';
  if (theme) themeStyle = theme;

  return (
    <div className={style.inlineLoader}>
      <Dot width={'100%'} height={'100%'} className={`${style[buttonType]} ${style[themeStyle]}`} />
      <Dot width={'100%'} height={'100%'} className={`${style[buttonType]} ${style[themeStyle]}`} />
      <Dot width={'100%'} height={'100%'} className={`${style[buttonType]} ${style[themeStyle]}`} />
    </div>
  );
};

export default InLineLoader;
