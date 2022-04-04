import React from 'react';
import styles from './about.module.css';

import Title from 'antd/lib/typography/Title';
import { Card, Col, Divider, Row } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Meta from 'antd/lib/card/Meta';

import { UserOutlined } from '@ant-design/icons';

import Data from './about-data.json';

function About() {
  return (
    <>
      <Content className={styles.container}>
        <div>
          <Title
            level={1}
            style={{ textAlign: 'center', marginTop: '80px' }}
            className={styles.title}
          >
            About Me
          </Title>
          <Divider />
          소개
        </div>
        <div className={styles.cardContainer}>
          <Row gutter={16}>
            {Data?.map((data) => {
              return (
                <Col
                  key={data.id}
                  xs={{ span: 12 }}
                  lg={{ span: 8 }}
                  className={styles.colBox}
                >
                  <Card className={styles.card}>
                    <Meta
                      avatar={<UserOutlined />}
                      title={<Title level={4}>{data?.title}</Title>}
                      description={<Title level={5}>{data?.description}</Title>}
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </Content>
    </>
  );
}

export default About;
