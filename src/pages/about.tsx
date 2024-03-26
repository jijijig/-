import React from 'react';
import styled from 'styled-components';
import AboutSub from '@/Components/About/AboutSub';
import AboutTitle from '@/Components/About/AboutTitle';


export default function TeamInfo() {
  return (
    <Container>
    
   <AboutSub/>
   <AboutTitle/>
    </Container>
  );
}

const Container = styled.div`

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