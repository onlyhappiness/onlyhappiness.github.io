import React from 'react';
import Head from 'next/head';

import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css';

import { Layout } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

import About from '../components/about/about';
import Projects from '../components/projects/project';
import Career from '../components/career/career';
import HeaderContent from '../components/header/header';
// const { Header, Content, Footer, Sider } = Layout;

function index() {
  // const [toggle, setToggle] = useState(false);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Layout className={styles.container}>
        <Header className={styles.header}>
          <HeaderContent />
        </Header>

        <Content className={[styles.content, styles.content1]}>
          <Title level={2}>박범진</Title>
          <Title level={3}>포트 폴리오</Title>

          <Title level={5}>기록</Title>
        </Content>

        <Content className={styles.content}>
          <About />
        </Content>

        <Content className={styles.content}>
          <Content>
            <Title level={2}>Skills</Title>
            기술스택
          </Content>
        </Content>

        <Content className={styles.content}>
          <Projects />
        </Content>

        <Content className={styles.content}>
          <Career />
        </Content>

        <Footer>Footer</Footer>
      </Layout>
    </>
  );
}

export default index;
