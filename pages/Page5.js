import styles from '../styles/Page5.module.css';

const Page5 = () => {
  return (
    <div className={styles.page5Container}>
      <div className={styles.page5TextContainer}>
        <h1 className={styles.page5Title}>GOOD ACTIVITY</h1>
        <p className={styles.page5Subtitle}>
         좋은 옷을 더 오래 입는 방법
        </p>
        <div className={styles.page5Category}>
          <span className={styles.page5CateList}>GOOD CARE</span>
          <span className={styles.page5CateList}>GOOD CYCLE</span>
          </div>
      </div>
    </div>
  );
};
export default Page5;
