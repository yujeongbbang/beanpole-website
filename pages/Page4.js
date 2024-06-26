import styles from '../styles/Page4.module.css';

const Page4 = () =>  {
  return (
    <div className={styles.page4Container}>
      <div className={styles.page4TextContainer}>
        <h1 className={styles.page4Title}>JOURNAL</h1>
        <p className={styles.page4Subtitle}>
        우리가 빈폴을 입는 이유
        </p>
        <div className={styles.page4Category}>
          <span className={styles.page4CateList}>BRAND CAMPAIGN</span>
          <span className={styles.page4CateList}>COLLABORATION</span>
      </div>
        <div className={styles.page4Category}>
          <span className={styles.page4CateList}>STYLE SNAPS</span>
          <span className={styles.page4CateList}>CLASSIC MASTERY</span>
        </div>
      </div>
    </div>
  );
};

export default Page4;
