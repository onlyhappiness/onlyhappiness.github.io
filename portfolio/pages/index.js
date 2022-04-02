import React from 'react';
import Head from 'next/head';

import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css';

import { Layout } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
// const { Header, Content, Footer, Sider } = Layout;

function index() {
  // const [toggle, setToggle] = useState(false);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Layout className={styles.container}>
        <Header className={styles.header}>Bread Portfolio</Header>

        <Content className={[styles.content, styles.content1]}>
          <Title level={2}>박범진</Title>
          <Title level={3}>포트 폴리오</Title>

          <Title level={5}>기록</Title>
        </Content>

        <Content className={styles.content}>
          <Content>
            <Title level={2}>About Me</Title>
            이름, 생년월일, 주소지, 연락처, 이메일, 학력
          </Content>
        </Content>

        <Content className={styles.content}>
          <Content>
            <Title level={2}>Skills</Title>
            기술스택
          </Content>
        </Content>

        <Content className={styles.content}>
          <Content>
            <Title level={2}>Projects</Title>
            프로젝트들
          </Content>
        </Content>

        <Content className={styles.content}>
          <Content>
            <Title level={2}>Career</Title>내 경력
          </Content>
        </Content>

        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default index;
