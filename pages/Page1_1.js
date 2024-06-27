import React, { useEffect, useState } from 'react';
import styles from '../styles/Page1_1.module.css';

const Page1_1 = ({ isActive }) => {
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
    <div className={styles.page1Container}>
      <div className={styles.page1TextContainer}>
        <h1 className={`${styles.page1Title} ${animateTitle ? styles.animateSlideIn : ''}`}>
          SEOUL CLASSIC with
        </h1>
        <h1 className={`${styles.page1Beanpole} ${animateTitle ? styles.animateSlideIn : ''}`}>
          BEANPOLE
        </h1>
        <p className={`${styles.page1Subtitle} ${animateSubtitle ? styles.animateSlideIn : ''}`}>
          빈폴과 함께하는 서울 클래식 여정
        </p>
      </div>
    </div>
  );
};

export default Page1_1;
