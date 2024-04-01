import React, { ChangeEvent, FormEvent, useState } from 'react';
import styled from 'styled-components';




export default function ApplicationForm() {
  
  return (
   <Warpper>
    <div className="homeblock1">
      <p className='mainp'>Our Portfolio</p>
      <h2>작업물</h2>
      <p className="explanation">
        멤버들의 작업물을 확인할 수 있습니다.
        </p>
      </div>
    </Warpper>

  );
}
const Warpper = styled.div`
  margin: 67px 0 0 10%;
  padding: 0;
  width: 80vw;
  height: 60vh;
  display: flex;
  justify-content: space-around;
  .homeblock1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    .mainp {
      margin: 8px;
      font-family: Inter;
      font-size: 18px;
      font-weight: 600;
      line-height: 26px;
      text-align: center;
      color: #3758F9;
    }
    h2{
      margin: 0;
font-family: Inter;
font-size: 40px;
font-weight: 700;
line-height: 48px;
text-align: center;
    }
    .explanation {
      font-family: Inter;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      text-align: center;
      
    }
  
  
  }
  .homeblock2 {
    width: 50%;
    height: 100%;
  
  }
`;