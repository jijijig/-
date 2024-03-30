import React, { useState } from "react";
import styled from "styled-components";

interface ModalProps {
  show: boolean;
}
export default function Works() {
  return (
    <Wrapper>
      <Top>
        <p className="mainp">Our Portfolio</p>
        <h1>작업물</h1>
        <p>멤버들의 작업물을 확인할 수 있습니다.</p>
      </Top>
      <MiddleBar>
        <table>
          <tr>
            <td>All Project</td>
            <td>Branding</td>
            <td>Design</td>
            <td>Marketing</td>
            <td>Development</td>
          </tr>
        </table>
      </MiddleBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
`;
const MiddleBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem;
  td {
    text-align: center;
    width: 162px;
    height: 48px;
    gap: 10px;
    border-radius: 8px 0px 0px 0px;
    opacity: 0px;
  }
`;
const Top = styled.div`
  text-align: center;
  margin: 2rem;

  p {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
  }
  .mainp {
    margin: 8px;
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;
    text-align: center;
    color: #3758f9;
  }
  h1 {
    margin: 0px;
    margin-bottom: 4px;
  }
`;
