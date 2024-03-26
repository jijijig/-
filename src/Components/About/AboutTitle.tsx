import React from 'react'
import styled from 'styled-components'


export default function AboutTitle() {
    const pageInfo = {
title: `어떤 기기를 사용하더라도
최상의 경험을 제공하는
환경을 구축합니다.`,
        description1: `지지직(JiJiJik)은 최신 기술을 활용하여 모든 환경에서 원활하게 작동하는 블록형 사전예약 페이지를 개발하는 혁신적인 소프트웨어 개발 창업 팀입니다.`,
        description2: `지지직(JiJiJik)은 기술의 지속적인 발전을 추구하며, 모든 사용자가 어떤 환경에서든 웹 사이트에 문제 없이 접근할 수 있도록 최선을 다하고 있습니다. 우리는 기술의 한계를 넘어 사용자 경험을 최우선으로 고려합니다.`,
        description3: `우리 회사에 대해 더 알고 싶다면 아래 버튼을 클릭해주세요.`,


      };
  return (
    <Container>
      <Title><pre>{pageInfo.title}</pre></Title>
      <Description>{pageInfo.description1}</Description>
      <Description>{pageInfo.description2}</Description>
      <Description>{pageInfo.description3}</Description>
    </Container>

  )
}
const Container = styled.div`
margin-top: 100px;
`;
const Title = styled.div`
width: 500px;
height: 144px;
pre{
font-family: Inter;
font-size: 40px;
font-weight: 700;
line-height: 48px;
text-align: left;
}
`;  
const Description = styled.div`
margin-top: 20px;   
width: 500px;
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: left;
color: #637381;

`;


