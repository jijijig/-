import React from 'react';
import styled from 'styled-components';

export default function member() {
  const members = [
    {
      id: 1,
      name: "멤버 1",
      description: "멤버 1 설명",
      imageUrl: "멤버1 이미지",
    },
    {
      id: 2,
      name: "멤버 2",
      description: "멤버 2 설명",
      imageUrl: "멤버2 이미지",
    },
  ];
  return (
  
    <PageContainer>
    <h2>팀 멤버 소개</h2>
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
`;

const MemberImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const MemberName = styled.h3`
  margin: 10px 0;
`;

const MemberDescription = styled.p`
  color: #666;
`;

