import React from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Homesub() {
  return (
    <Warpapper>
      <ImageWrapper>
        <Image
          src="/main-img/dumi-main.png"
          alt="home"
          width={491}
          height={515}
        />
      </ImageWrapper>
    </Warpapper>
  );
}

const Warpapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 110px 8px 8px 8px;
  overflow: hidden;
`;
