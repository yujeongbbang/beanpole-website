import { useEffect, useState } from 'react';
import Page1 from '../pages/Page1';
import Page2 from '../pages/Page2';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';
import styles from '../styles/Home.module.css';

const Scroll = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    <Page1 key="page1" isActive={currentSection === 0} />,
    <Page2 key="page2" isActive={currentSection === 1} />,
    <Page3 key="page3" isActive={currentSection === 2} />,
    <Page4 key="page4" isActive={currentSection === 3} />,
    <Page5 key="page4" isActive={currentSection === 4} />
  ];
  let scrollTimeout;

  const handleScroll = (e) => {
    e.preventDefault();
    const delta = e.deltaY;

    if (delta > 0 && currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
    } else if (delta < 0 && currentSection > 0) {
      setCurrentSection(currentSection - 1);
    }
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
        <div
          key={index}
          className={`${styles.section} ${currentSection === index ? styles.activeSection : ''}`}
          style={{
            transform: `translateY(${(index - currentSection) * 100}vh)`,
            opacity: currentSection === index ? 1 : 0,
            transition: 'transform 1s ease-in-out, opacity 1s ease-in-out'
          }}
        >
          {section}
        </div>
      ))}
    </div>
  );
};

export default Scroll;
