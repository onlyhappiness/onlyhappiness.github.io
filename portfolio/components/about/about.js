import React from 'react';
import styles from './about.module.css';

import Title from 'antd/lib/typography/Title';
import { Card, Col, Divider, Row } from 'antd';
import { Content, Footer, Header } from 'antd/lib/layout/layout';
import Meta from 'antd/lib/card/Meta';

import { UserOutlined } from '@ant-design/icons';

function About() {
  return (
    <>
      {/* <Content className={styles.container}> */}
      <div>
        <Title
          level={1}
          style={{ textAlign: 'center' }}
          className={styles.title}
        >
          About Me
        </Title>
        <Divider />
      </div>
      이름, 생년월일, 주소지, 연락처, 이메일, 학력
      <br />
      <br />
      <br />
      <br />
      <div className={styles.cardContainer}>
        <Row gutter={16}>
          <Col span={8} className={styles.colBox}>
            <Card>
              <Meta
                avatar={<UserOutlined />}
                title='이름'
                description='이름을 입력'
              />
            </Card>
          </Col>
          <Col span={8} className={styles.colBox}>
            <Card>
              <Meta
                avatar={<UserOutlined />}
                title='이름'
                description='이름을 입력'
              />
            </Card>
          </Col>
          <Col span={8} className={styles.colBox}>
            <Card>
              <Meta
                avatar={<UserOutlined />}
                title='이름'
                description='이름을 입력'
              />
            </Card>
          </Col>
          <Col span={8} className={styles.colBox}>
            <Card>
              <Meta
                avatar={<UserOutlined />}
                title='이름'
                description='이름을 입력'
              />
            </Card>
          </Col>
          <Col span={8} className={styles.colBox}>
            <Card>
              <Meta
                avatar={<UserOutlined />}
                title='이름'
                description='이름을 입력'
              />
            </Card>
          </Col>
          <Col span={8} className={styles.colBox}>
            <Card>
              <Meta
                avatar={<UserOutlined />}
                title='이름'
                description='이름을 입력'
              />
            </Card>
          </Col>
        </Row>
      </div>
      {/* </Content> */}
    </>
  );
}

export default About;
