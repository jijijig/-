import React from 'react';
import styled from 'styled-components';

export default function member() {
  const members = [
    {
      id: 1,
      name: "이현우",
      description: "팀장 & 프론트엔드 개발자",
      imageUrl: "path/member/member1.jpeg",
    },
    {
      id: 2,
      name: "최민우",
      description: "백엔드 개발자",
      imageUrl: "path/member/member2.jpeg",
    },
  ];
  return (
  
    <PageContainer>
    <h2>팀 멤버 소개</h2>
    <p>최악의 상황에서도 동작하는 사이트를 만들자는 목표를 가지고 제작합니다.</p>
    <MemberList>
      {members.map(member => (
        <MemberCard key={member.id}>
          <MemberImage src={member.imageUrl} alt={member.name} />
          <MemberName>{member.name}</MemberName>
          <MemberDescription>{member.description}</MemberDescription>
        </MemberCard>
      ))}
    </MemberList>
  </PageContainer>
    )
}
const PageContainer = styled.div`
  text-align: center;
  h2 {  
font-family: Inter;
font-size: 40px;
font-weight: 700;
line-height: 48px;
text-align: center;
  }
  p {

font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
text-align: center;

  }
`;

const MemberList = styled.div`
  display: flex;
  text-align: center;
  gap: 20px;
  align-items: center;
  justify-content: center;
`;

const MemberCard = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  width: 300px;
  background-color: #f9f9f9;
`;

const MemberImage = styled.img`
  width: 270px;
  height: 320px;
  border-radius: 8px;
`;

const MemberName = styled.h3`
  margin: 10px 0;
`;

const MemberDescription = styled.p`
  color: #666;
`;

