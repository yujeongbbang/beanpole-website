import { useEffect, useState } from 'react';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import styles from '../styles/Home.module.css';

const Scroll = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [<Page1 key="page1" />, <Page2 key="page2" />, <Page3 key="page3" />];
  let scrollTimeout;

  const handleScroll = (e) => {
    e.preventDefault();
    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
      const delta = e.deltaY;
      if (delta > 0 && currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1);
      } else if (delta < 0 && currentSection > 0) {
        setCurrentSection(currentSection - 1);
      }
    }, 100);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll, { passive: false });
    };
  }, [currentSection]);

  return (
    <div className={styles.container}>
      {sections.map((section, index) => (
        <div key={index} className={styles.section} style={{ opacity: currentSection === index ? 1 : 0 }}>
          {section}
        </div>
      ))}
    </div>
  );
};

export default Scroll;
