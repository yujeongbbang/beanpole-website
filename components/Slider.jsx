import React, { useEffect, useState } from 'react';
import styles from '../styles/Slider.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // FiChevronLeft와 FiChevronRight 아이콘 import

const Slider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(0);

  const goToSection = (index) => {
    if (index >= 0 && index < children.length) {
      setCurrentSection(index);
    }
  };

  const handlePrev = () => {
    goToSection(currentSection - 1);
  };

  const handleNext = () => {
    goToSection(currentSection + 1);
  };

  return (
    <div className={styles.sliderContainer}>
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className={`${styles.sliderSection} ${currentSection === index ? styles.activeSection : ''}`}
          style={{
            transform: `translateX(${(index - currentSection) * 100}%)`,
            opacity: currentSection === index ? 1 : 0,
            transition: 'transform 1s ease-in-out, opacity 1s ease-in-out'
          }}
        >
          {React.cloneElement(child, { isActive: currentSection === index })}
        </div>
      ))}
      <div className={styles.sliderControls}>
        <button onClick={handlePrev} disabled={currentSection === 0}><FiChevronLeft /></button>
        <button onClick={handleNext} disabled={currentSection === children.length - 1}><FiChevronRight /></button>
      </div>
    </div>
  );
};

export default Slider;
