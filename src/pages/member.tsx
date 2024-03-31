import React from "react";
import styled from "styled-components";

export default function member() {
  const members = [
    {
      id: 1,
      name: "이현우",
      description: "PM&Web Developer",
      imageUrl: "path/member/member1.jpeg",
    },
    {
      id: 2,
      name: "최민우",
      description: "Back-end Developer",
      imageUrl: "path/member/member2.jpeg",
    },
    {
      id: 3,
      name: "윤지원",
      description: "PM&Ui/Ux Designer",
      imageUrl: "path/member/member2.jpeg",
    },
  ];
  return (
    <PageContainer>
      <p className="mainp">Our Team</p>
      <h2>팀 멤버 소개</h2>
      <p className="explanation">
        최악의 상황에서도 동작하는 사이트를 만들자는 목표를 가지고 제작합니다.
      </p>
      <MemberList>
        {members.map((member) => (
          <MemberCard key={member.id}>
            <MemberImage src={member.imageUrl} alt={member.name} />
            <div className="explanationbox">
              <MemberName>{member.name}</MemberName>
              <MemberDescription>{member.description}</MemberDescription>
            </div>
          </MemberCard>
        ))}
      </MemberList>
    </PageContainer>
  );
}
const PageContainer = styled.div`
  text-align: center;

  h2 {
    margin: 0;
    font-family: Inter;
    font-size: 40px;
    font-weight: 700;
    line-height: 48px;
    text-align: center;
  }
  p {
    margin-bottom: 8px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
  }
  .mainp {
    margin-top: 40px;
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;
    text-align: center;
    color: #3758f9;
  }
  .explanation {
    margin-bottom: 60px;
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
  .explanationbox {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 230px;
    height: 83px;
    background: #ffffff;
    top: -110px;
    left: 22px;
    border-radius: 8px;
    opacity: 0px;
  }
`;

const MemberImage = styled.img`
  width: 270px;
  height: 320px;
  border-radius: 8px;
`;

const MemberName = styled.h3`
  font-family: Inter;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  text-align: center;
  margin: 1px;
`;

const MemberDescription = styled.p`
  margin: 0;
  font-family: Inter;
  font-size: 12px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
`;
