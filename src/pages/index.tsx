'use client';
import styled from "styled-components";


export default function Home() {
  return (
    <Wrapper>
      <Top>
       
      </Top>
      <h1>gd</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  
`;
const Top = styled.div`
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;