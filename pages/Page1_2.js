import React,  { useEffect, useState } from 'react';
import styles from '../styles/Page1_2.module.css';

const Page1_2 = ({ isActive }) => {
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateSubtitle, setAnimateSubtitle] = useState(false);
  
  useEffect(() => {
    if (isActive) {
      setAnimateTitle(false);
      setAnimateSubtitle(false);
      setTimeout(() => {
        setAnimateTitle(true);
      }, 0);
      setTimeout(() => {
        setAnimateSubtitle(true);
      }, 500);
    } else {
      setAnimateTitle(false);
      setAnimateSubtitle(false);
    }
  }, [isActive]);

  return (
    <div className={styles.page2Container}>
    <div className={styles.page2TextContainer}>
    <h1 className={`${styles.page2Title} ${animateTitle ? styles.animateSlideIn : ''}`}>
          THE HISTORY OF LINEN
        </h1>
        <p className={`${styles.page2Subtitle} ${animateSubtitle ? styles.animateSlideIn : ''}`}>
          가장 오래된 천연 섬유, 인류의 역사를 함께하다
        </p>
    </div>
  </div>
  );
};

export default Page1_2;
