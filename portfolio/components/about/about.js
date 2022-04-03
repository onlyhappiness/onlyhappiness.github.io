import React from 'react';

import Title from 'antd/lib/typography/Title';
import { Content, Footer, Header } from 'antd/lib/layout/layout';

function About() {
  return (
    <>
      <Content>
        <Title level={2}>About Me</Title>
        이름, 생년월일, 주소지, 연락처, 이메일, 학력
      </Content>
    </>
  );
}

export default About;
