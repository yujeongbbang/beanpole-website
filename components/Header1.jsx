import React, { useState } from 'react';
import styles from '../styles/Header1.module.css';


const Header = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      {/* 로고 및 텍스트 로고 'BEANPOLE' */}
      <div className={styles.logo}>
        <h1>BEANPOLE</h1>
      </div>

      {/* 메뉴 항목들 */}
      <nav className={styles.nav}>
        <ul>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={isSubMenuOpen ? styles.active : ''}
          >
            <a href="#heritage">HERITAGE</a>
            {isSubMenuOpen && (
              <ul className={styles.submenu}>
                <li><a href="#">HISTORY</a></li>
                <li><a href="#">PHILOSOPHY</a></li>
                <li><a href="#">THE ESSENTIAL</a></li>
                <li><a href="#">Bicycle Story</a></li>
                <li><a href="#">Signature Cheak</a></li>
                <li><a href="#">Essential Items</a></li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={isSubMenuOpen ? styles.active : ''}
          >
            <a href="#brands">BRANDS</a>
            {isSubMenuOpen && (
              <ul className={styles.submenu}>
                <li><a href="#">MEN</a></li>
                <li><a href="#">LADIES</a></li>
                <li><a href="#">KIDS</a></li>
                <li><a href="#">ACCESSORY</a></li>
                <li><a href="#">GOLF</a></li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={isSubMenuOpen ? styles.active : ''}
          >
            <a href="#journal">JOURNAL</a>
            {isSubMenuOpen && (
              <ul className={styles.submenu}>
                <li><a href="#">BRAND CAMPAIGN</a></li>
                <li><a href="#">COLLABORATION</a></li>
                <li><a href="#">STYLE SNAPS</a></li>
                <li><a href="#">CLASSIC MASTERY</a></li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={isSubMenuOpen ? styles.active : ''}
          >
            <a href="#good-activity">GOOD ACTIVITY</a>
            {isSubMenuOpen && (
              <ul className={styles.submenu}>
                <li><a href="#">GOOD CARE</a></li>
                <li><a href="#">GOOD CYCLE</a></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;