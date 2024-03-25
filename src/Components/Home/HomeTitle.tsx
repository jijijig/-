import React from "react";
import styled from "styled-components";

export default function HomeTitle() {
  const pageInfo = {
    title: `지지직(JiJiJik)에
오신 것을 환영합니다!`,
    description: `With TailGrids, business and students thrive together.
Business can perfectly match their staffing
to changing demand throughout the dayed.`,
  };
  return (
    <Warpapper>
      <div className="title">
        <pre>{pageInfo.title}</pre>
      </div>
      <div className="description">
        <pre>{pageInfo.description}</pre>
      </div>
    </Warpapper>
  );
}

const Warpapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  max-width: 1200px;
  background-color: #ffffff;
  padding: 25px 135px;
  .title {
    width: 509px;
    height: 165px;
    pre {
      font-family: Inter;
      font-size: 48px;
      font-weight: 700;
      line-height: 58px;
      text-align: left;
    }
  }

  .description {
    width: 509px;
    height: 165px;
    pre {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
      color: #637381;
    }
  }
`;
