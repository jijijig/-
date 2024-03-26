import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';

export default function AboutSub() {
  return (
    <Container>
        <div className='aboutblock1'>
            <ImageWrapper>
                <Image
                    src="/path/domidomi/image1.png"
                    alt="home"
                    width={270}
                    height={320}
                />
            </ImageWrapper> 
            <ImageWrapper>
                <Image
                    src="/path/domidomi/image2.png"
                    alt="home"
                    width={270}
                    height={320}
                />
            </ImageWrapper> 

            </div>

        <div className='aboutblock2'>
        <ImageWrapper>
                <Image
                    src="/path/domidomi/image4.png"
                    alt="home"
                    width={270}
                    height={320}
                />
            </ImageWrapper> 
            </div>
    </Container>

  )
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    
    .aboutblock1 {
        width: 270px;
        height: 670px;

        margin-right: 20px;

    }
    .aboutblock2 {
        padding-top: 35%;
        width: 270px;
        height: 500px;

    }

`;  
const ImageWrapper = styled.div`
    width: 270px;
    height: 320px;
    overflow: hidden;
    border-radius: 15px;
`;