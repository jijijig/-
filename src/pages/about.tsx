import React from 'react';
import styled from 'styled-components';


export default function TeamInfo() {
  return (
    <Container>
      <Title>지지직(JiJiJik)에 오신 것을 환영합니다!</Title>
      <IntroImage src="https://github.com/jijijig/.github/assets/97311614/3545b533-3cd5-4fb3-95dd-478dc6e7e295" alt="JiJiJik Team" width="300" height="300" />

      <Section>
        <SectionTitle>저희를 소개합니다.</SectionTitle>
        <Text>
          지지직(JiJiJik)은 최신 기술을 활용하여 모든 환경에서 원활하게 작동하는 블록형 사전예약 페이지를 개발하는 혁신적인 소프트웨어 개발 창업 팀입니다.
          저희의 목표는 사용자들이 어떤 기기에서든 최적의 경험을 할 수 있도록 하는 것입니다.
        </Text>
      </Section>

      <Section>
        <SectionTitle>저희의 기술 스택</SectionTitle>
        <TechList>
          <TechItem><Highlight>Spring Framework</Highlight>: 강력하고 다양한 기능을 제공하는 서버 사이드 애플리케이션 개발을 위해 스프링 프레임워크를 사용합니다.</TechItem>
          <TechItem><Highlight>Next.js</Highlight>: 서버 사이드 렌더링(SSR)과 정적 사이트 생성(SSG)을 지원하는 리액트 프레임워크로, 빠르고 SEO 친화적인 웹 애플리케이션을 구축합니다.</TechItem>
          <TechItem><Highlight>TypeScript</Highlight>: 개발의 안정성과 유지보수성을 높이기 위해 자바스크립트의 상위 집합인 타입스크립트를 사용합니다.</TechItem>
        </TechList>
      </Section>

      <Section>
        <SectionTitle>저희의 프로젝트</SectionTitle>
        <Text>
          <Highlight>블록형 사전예약 페이지</Highlight>: 사용자 친화적인 인터페이스와 빠른 로딩 시간을 자랑하는 사전예약 시스템을 개발하여, 고객들이 새로운 서비스나 제품 출시에 앞서 쉽게 등록할 수 있도록 합니다.
        </Text>
      </Section>

      <Section>
        <SectionTitle>저희의 약속</SectionTitle>
        <Text>
          지지직은 기술의 발전을 끊임없이 추구하며, 모든 사용자가 어떠한 환경에서도 문제없이 접근할 수 있는 웹 사이트를 제공하기 위해 최선을 다하겠습니다. 저희는 기술의 한계를 넘어 사용자 경험을 최우선으로 생각하겠습니다.
        </Text>
      </Section>

      <Text>
        저희 서비스를 보시고 싶다면, <Link href="#">여기</Link>를 클릭하여 더 많은 정보를 얻으세요!
      </Text>
    </Container>
  );
}

const Container = styled.div`
  max-width: 800px;
  margin: auto;
  padding: 20px;
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const IntroImage = styled.img`
  display: block;
  margin: 20px auto;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Section = styled.section`
  margin-top: 20px;
`;

const SectionTitle = styled.h2`
  color: #666;
  margin-bottom: 10px;
`;

const Text = styled.p`
  line-height: 1.6;
`;

const TechList = styled.ul`
  list-style: inside;
`;

const TechItem = styled.li`
  margin-bottom: 5px;
`;

const Highlight = styled.strong`
  color: #0056b3;
`;

const Link = styled.a`
  color: #007bff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
