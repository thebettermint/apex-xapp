import React, { ReactNode, useState, useRef, useEffect } from 'react';
import styles from './index.module.scss';
import { AngleSmallRight, ArrowRight } from '../Icons';
import InLineLoader from 'src/components/Animations/inline/InLineLoader';

interface IBorder {
  line?: string;
  width?: number;
  color?: string;
  radius?: number;
}

interface Props {
  type: string;
  theme?: string;
  width?: number | string;
  height?: number | string;
  margin?: number | string;
  color?: string;
  accent?: string;
  border?: IBorder;
  loader?: boolean;
  children?: JSX.Element | JSX.Element[] | ReactNode;
  className?: string;
  style?: any;
  onClick: () => void | Promise<void>;
}

const Index = ({
  type,
  theme,
  width,
  height,
  margin,
  border,
  loader,
  children,
  className,
  style,
  onClick,
}: Props) => {
  const [isClicked, setIsClicked] = useState<Boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  let buttonType = 'primary';
  if (type) buttonType = type;

  let themeStyle = 'default';
  if (theme) themeStyle = theme;

  let loaderTrigger = true;
  if (loader == false) loaderTrigger = loader;

  const handleClick = async () => {
    if (isClicked) return;
    setIsClicked((isClicked) => !isClicked);

    let cursor = document.querySelector('.cursor');
    cursor?.classList.remove('active');
    await onClick();
    setIsClicked((isClicked) => !isClicked);
  };

  const handleMouseEnter = () => {
    let cursor = document.querySelector('.cursor');
    cursor?.classList.add('active');
  };

  const handleMouseLeave = () => {
    let cursor = document.querySelector('.cursor');
    cursor?.classList.remove('active');
  };

  useEffect(() => {
    if (!buttonRef.current) return;
    buttonRef.current.addEventListener('mouseenter', handleMouseEnter);
    buttonRef.current.addEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <div className={className}>
      <div
        ref={buttonRef}
        className={`${styles[buttonType]} ${styles[themeStyle]}`}
        style={{
          width: width,
          height: height,
          margin: margin,
          borderRadius: border?.radius,
          borderColor: border?.color,
          ...style,
        }}
        onClick={handleClick}>
        {buttonType === 'dropdown' ? (
          <div className={styles.drop}>
            <AngleSmallRight fill={'white'} size={12} />
          </div>
        ) : null}
        {isClicked ? <InLineLoader type={'secondary'} theme={'light'} /> : children}
      </div>
    </div>
  );
};

export default Index;
