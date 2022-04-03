import React from 'react';
import styles from './header.module.css';

import Title from 'antd/lib/typography/Title';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

import { GithubOutlined } from '@ant-design/icons';

function HeaderContent() {
  return (
    <>
      <div className={styles.container}>
        <Title style={{ color: 'white' }} level={4}>
          HeaderContent
        </Title>

        <GithubOutlined style={{ color: 'black', fontSize: '24px' }} />
      </div>
    </>
  );
}

export default HeaderContent;
