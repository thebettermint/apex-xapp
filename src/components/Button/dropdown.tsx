import React, { ReactNode, useState, useRef, useEffect } from 'react';
import styles from './index.module.scss';
import { AngleSmallRight } from '../Icons';
import { items } from './items';
import map from 'src/components/Modal/map';
import Portal from 'src/components/Portal';
import Modal from '../Modal';

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

const DropDownButton = ({
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
  const [isDropdown, setIsDropdown] = useState<Boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const [modal, setModal] = useState<any>(undefined);
  const [title, setTitle] = useState<any>(undefined);

  let buttonType = 'primary';
  if (type) buttonType = type;

  let themeStyle = 'default';
  if (theme) themeStyle = theme;

  let loaderTrigger = true;
  if (loader == false) loaderTrigger = loader;

  const handleDropdown = () => {
    console.log('clicked');
    setIsDropdown(!isDropdown);
  };

  const handleClick = async () => {
    if (isClicked) return;
    setIsClicked((isClicked) => !isClicked);
    if (isDropdown) setIsDropdown((isDropdown) => !isDropdown);

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

  const openModal = (items: any) => {
    setIsDropdown(!isDropdown);
    setTitle(items.category);
    setModal(items.modal);
  };

  useEffect(() => {
    if (!buttonRef.current) return;
    buttonRef.current.addEventListener('mouseenter', handleMouseEnter);
    buttonRef.current.addEventListener('mouseleave', handleMouseLeave);
  }, []);

  return (
    <>
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
          }}>
          {isDropdown ? (
            <div className={styles.list}>
              {items.map((items: any, i: number) => (
                <div key={i} className={styles.item} onClick={() => openModal(items)}>
                  {items.category.toUpperCase()}
                </div>
              ))}
            </div>
          ) : null}
          <div className={styles.children}>
            <div className={styles.content} onClick={handleClick}>
              {children}
            </div>
            {buttonType === 'dropdown' ? (
              <div
                className={`${styles.drop} ${isDropdown ? styles.active : null}`}
                onClick={handleDropdown}>
                <AngleSmallRight fill={'white'} size={12} />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      {modal ? <Modal title={title} name={modal} close={setModal} /> : null}
    </>
  );
};

export default DropDownButton;
