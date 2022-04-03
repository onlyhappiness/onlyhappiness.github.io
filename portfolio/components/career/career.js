import React from 'react';
import styles from './career.module.css';

import Title from 'antd/lib/typography/Title';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

function Career() {
  return (
    <>
      <Content className={styles.container}>
        <Title level={1}>Career</Title>내 경력
      </Content>
    </>
  );
}

export default Career;
