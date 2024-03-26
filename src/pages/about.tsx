import React from 'react';
import styled from 'styled-components';
import AboutSub from '@/Components/About/AboutSub';
import AboutTitle from '@/Components/About/AboutTitle';


export default function TeamInfo() {
  return (
    <Container>
    <AboutTitle/>
   <AboutSub/>

    </Container>
  );
}

const Container = styled.div`
margin: 67px 0 0 10%;
  padding: 0;
  width: 80vw;
  height: 60vh;
  background-color: #f5f5f5;
  display: flex;
  justify-content: space-around;
  .aboutblock1 {
    width: 50%;
    height: 100%;
    background-color: #ffffff;
  }
  .aboutblock2 {
    width: 50%;
    height: 100%;
  
  }
`;