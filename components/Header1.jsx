import React, { useState } from 'react';
import styles from '../styles/Header1.module.css';
import HeritageSubMenu from '../components/Submenu/HeritageSubMenu';
import BrandsSubMenu from '../components/Submenu/BrandsSubMenu';
import JournalSubMenu from '../components/Submenu/JournalSubMenu';
import GoodActivitySubMenu from '../components/Submenu/GoodActivitySubMenu';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>BEANPOLE</span>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li
            onMouseEnter={() => handleMenuEnter('heritage')}
            onMouseLeave={handleMenuLeave}
          >
            <a href="#">HERITAGE</a>
            {activeMenu === 'heritage' && (
              <div className={styles.submenu}>
                <HeritageSubMenu />
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleMenuEnter('brands')}
            onMouseLeave={handleMenuLeave}
          >
            <a href="#">BRANDS</a>
            {activeMenu === 'brands' && (
              <div className={styles.submenu}>
                <BrandsSubMenu />
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleMenuEnter('journal')}
            onMouseLeave={handleMenuLeave}
          >
            <a href="#">JOURNAL</a>
            {activeMenu === 'journal' && (
              <div className={styles.submenu}>
                <JournalSubMenu />
              </div>
            )}
          </li>
          <li
            onMouseEnter={() => handleMenuEnter('good-activity')}
            onMouseLeave={handleMenuLeave}
          >
            <a href="#">GOOD ACTIVITY</a>
            {activeMenu === 'good-activity' && (
              <div className={styles.submenu}>
                <GoodActivitySubMenu />
              </div>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;