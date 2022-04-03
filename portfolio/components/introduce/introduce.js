import React from 'react';
import styles from './introduce.module.css';

import Title from 'antd/lib/typography/Title';
import { Divider } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

function Introduce() {
  return (
    <>
      <Content className={styles.container}>
        {/* <Title level={2}>박범진</Title> */}

        <Title level={1}>포트 폴리오</Title>
        <Divider />
        <Title level={5}>기록</Title>
      </Content>
    </>
  );
}

export default Introduce;
