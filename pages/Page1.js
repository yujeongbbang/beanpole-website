import React from 'react';
import Slider from '../components/Slider';

import Page1_1 from './Page1_1';
import Page1_2 from './Page1_2';
import Page1_3 from './Page1_3';
import Page1_4 from './Page1_4';
import Page1_5 from './Page1_5';

import styles from '../styles/Page1.module.css';

const Page1 = () => {
  return (
    <div className={styles.page1Container}>
      <Slider>
        <Page1_1 />
        <Page1_5 />
        <Page1_2 />
        <Page1_4 />
        <Page1_3 />
      </Slider>
    </div>
  );
};

export default Page1;
