import React from 'react';
import styles from './introduce.module.css';

import Title from 'antd/lib/typography/Title';
import { Divider } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

function Introduce() {
  return (
    <>
      <div className={styles.container}>
        {/* <Title level={2}>박범진</Title> */}
        <div>
          <Title level={1} className={styles.title}>
            PORTFOLIO
          </Title>
          <Divider />
        </div>

        <Title level={5}>FRONT-END DEVELOPER</Title>
        <Title level={5}>PARK BUMJIN</Title>
      </div>
    </>
  );
}

export default Introduce;
