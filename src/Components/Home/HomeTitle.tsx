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
      <div className="buttons">
        <button>Get Started</button>
        <div className="download">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12.6152" r="12" fill="#3758F9" />
            <rect
              x="7.9989"
              y="14.9789"
              width="8.18182"
              height="1.63636"
              fill="white"
            />
            <rect
              x="11.2716"
              y="7.61523"
              width="1.63636"
              height="4.09091"
              fill="white"
            />
            <path
              d="M12.0899 14.1606L14.9241 11.0925H9.2556L12.0899 14.1606Z"
              fill="white"
            />
          </svg>
          <p>Download App</p>
        </div>
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
    height: 120px;
    pre {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: left;
      color: #637381;
    }
  }
  .buttons {
    width: 509px;
    display: flex;
    gap: 20px;
    button {
      padding: 13px, 28px, 13px, 28px;
      cursor: pointer;
      background: #3758f9;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      font-family: Inter;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: center;
      color: #ffffff;
    }
  }
  .download {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    p {
      font-family: Inter;
      font-size: 16px;
      font-weight: 500;
      line-height: 24px;
      text-align: left;
      color: #464646;
      margin: 0;
      justify-content: center;
      align-items: center;
    }
    svg {
      margin-top: 5px;
    }
  }
`;
