import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function AboutSub() {
  return (
    <Container>
      <div className="aboutblock1">
        <ImageWrapper>
          <Image
            src="/path/member/member01.png"
            alt="home"
            width={244}
            height={290}
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/path/member/member02.png"
            alt="home"
            width={244}
            height={290}
          />
        </ImageWrapper>
      </div>

      <div className="aboutblock2">
        <ImageWrapper>
          <Image
            src="/path/member/member03.png"
            alt="home"
            width={270}
            height={400}
          />
        </ImageWrapper>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;

  .aboutblock1 {
    width: 270px;

    margin-right: 20px;
  }
  .aboutblock2 {
    padding-top: 15%;
    width: 270px;
  }
`;
const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 15px;
`;
