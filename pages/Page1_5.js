import React,  { useEffect, useState } from 'react';
import styles from '../styles/Page1_5.module.css';

const Page1_5 = ({isActive}) => {
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
    <div className={styles.page5Container}>
    <div className={styles.page5TextContainer}>
    <h1 className={`${styles.page5Title} ${animateTitle ? styles.animateSlideIn : ''}`}>
         READY, GET SET, SUMMER!!
        </h1>
        <p className={`${styles.page5Subtitle} ${animateSubtitle ? styles.animateSlideIn : ''}`}>
          지금 여기 여름 시작, 빈폴멘 새로운 룩 바로보기
        </p>
    </div>
  </div>
  );
};

export default Page1_5;
