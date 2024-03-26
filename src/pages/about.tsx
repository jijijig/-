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
  justify-content: center;
  gap: 100px;

`;