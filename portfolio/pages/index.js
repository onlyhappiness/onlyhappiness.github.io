import React from 'react';
import Head from 'next/head';

import 'antd/dist/antd.css';
import styles from '../styles/Home.module.css';

import { Layout, Divider } from 'antd';
import Title from 'antd/lib/typography/Title';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

import About from '../components/about/about';
import Projects from '../components/projects/projects';
import Career from '../components/career/career';
import HeaderContent from '../components/header/header';
import Skills from '../components/skills/skills';
import Introduce from '../components/introduce/introduce';
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

        <Content
          className={styles.content}
          // className={[styles.content, styles.content1]}
        >
          <Introduce />
        </Content>

        <Content className={styles.content}>
          <About />
        </Content>

        <Content className={styles.content}>
          <Skills />
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
