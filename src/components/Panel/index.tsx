import React from 'react';

import ThemeToggle from '../Theme/themeToggle';

import style from './index.module.scss';

interface Props {
  close: () => void;
  pages: {
    [key: string]: any;
    home?: any;
    services?: any;
    about?: any;
    contact?: any;
    join?: any;
  };
}

const Panel = ({ close, pages }: Props) => {
  const handleNavClick = (page: string) => {
    pages[page].current.scrollIntoView();
    close();
  };

  return (
    <>
      <div className={`${style.panel}`}>
        <div className={style.close} onClick={() => close()}>
          close
        </div>
        <div className={style.items}>
          <div className={style.nav} onClick={() => handleNavClick('home')}>
            home
          </div>
          <div className={style.nav} onClick={() => handleNavClick('about')}>
            about
          </div>
          <div className={style.nav} onClick={() => handleNavClick('services')}>
            services
          </div>
          <div className={style.nav} onClick={() => handleNavClick('join')}>
            join
          </div>
          <div className={style.nav} onClick={() => handleNavClick('contact')}>
            contact
          </div>
          <ThemeToggle />
        </div>
      </div>
    </>
  );
};

export default Panel;
