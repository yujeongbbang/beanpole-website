import React, { useEffect, useState } from 'react';
import styles from '../styles/Page1.module.css';

const Page1 = ({ isActive }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isActive) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isActive]);

  return (
    <div className={styles.page1Container}>
      <div
        className={`${styles.page1TextContainer} ${animate ? styles.animateSlideIn : ''}`}
      >
        <h1 className={styles.page1Title}>SEOUL CLASSIC with</h1>
        <h1 className={styles.page1Beanpole}>BEANPOLE</h1>
        <p className={styles.page1Subtitle}>빈폴과 함께하는 서울 클래식 여정</p>
      </div>
    </div>
  );
};

export default Page1;
