import React, { useEffect, useState } from 'react';
import styles from '../styles/Page1.module.css';

const Page1 = ({ isActive }) => {
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateSubtitle, setAnimateSubtitle] = useState(false);

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setAnimateTitle(true);
      }, 500);

      setTimeout(() => {
        setAnimateSubtitle(true);
      }, 1000); 
    } else {
      setAnimateTitle(false);
      setAnimateSubtitle(false);
    }
  }, [isActive]);

  return (
    <div className={styles.page1Container}>
      <div className={styles.page1TextContainer}>
        <h1 className={`${styles.page1Title} ${animateTitle ? styles.animateSlideIn : ''}`}>
          SEOUL CLASSIC with
        </h1>
        <h1 className={`${styles.page1Beanpole} ${animateTitle ? styles.animateSlideIn : ''}`}>
          BEANPOLE
        </h1>
        {animateSubtitle && (
          <p className={`${styles.page1Subtitle} ${styles.animateSlideIn}`}>
            빈폴과 함께하는 서울 클래식 여정
          </p>
        )}
      </div>
    </div>
  );
};

export default Page1;
