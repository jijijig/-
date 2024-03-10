"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const images = ["/main-img/01.png", "/main-img/02.png", "/main-img/03.png"];
  return (
    <Wrapper>
      <Top></Top>
      <SliderContainer>
        <Button onClick={handlePrev}>{"<"}</Button>
        <ImageContainer>
          <ImageWrapper
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Description ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            ))}
          </ImageWrapper>
        </ImageContainer>
        <Button onClick={handleNext}>{">"}</Button>
      </SliderContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Top = styled.div`
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
`;

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageWrapper = styled.div`
  flex: none;
  width: 80vw;
  position: relative;
  transition: transform 0.5s ease-in-out;
`;

const Button = styled.button`
  cursor: pointer;
  background: #ddd;
  border: none;
  padding: 10px 20px;
  margin: 10px;
`;
const ImageContainer = styled.div`
  display: flex;
  width: 80vw;
  overflow: hidden;
`;
