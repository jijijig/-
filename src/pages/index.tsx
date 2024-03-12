
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ["/main-img/01.png", "/main-img/02.png", "/main-img/03.png"];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <Top />
      <SliderContainer>
        <Button onClick={handlePrev}>{"<"}</Button>
        <ImageContainer>
          <ImageWrapper style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((src, index) => (
              <EachImageWrapper key={index}>
                <Image src={src} alt={`Description ${index + 1}`}  fill style={{ objectFit: 'cover' }} />

              </EachImageWrapper>
            ))}
          </ImageWrapper>
        </ImageContainer>
        <Button onClick={handleNext}>{">"}</Button>
      </SliderContainer>
      <DotsContainer>
  {images.map((_, index) => (
    <Dot key={index} $isActive={index === currentIndex} onClick={() => setCurrentIndex(index)} /> // `isActive`를 `$isActive`로 변경
  ))}
</DotsContainer>
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
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex: none;
  width: 100%;
  position: relative;
  transition: transform 0.5s ease-in-out;
`;

const Button = styled.button`
  cursor: pointer;
  background: #ddd;
  border: none;
  padding: 10px 20px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  &:first-of-type {
    left: 10px;
  }
  &:last-of-type {
    right: 10px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  width: 80vw;
  overflow: hidden;
`;

const EachImageWrapper = styled.div`
  flex: none;
  margin-top:10%;
  width: 80vw;
  height: 60vh;
  position: relative;
`;

const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Dot = styled.div<{ $isActive: boolean }>`
  cursor: pointer;
  height: 10px;
  width: 10px;
  margin: 0 5px;
  background-color: ${({ $isActive }) => ($isActive ? 'black' : 'grey')}; 
  border-radius: 50%;
  display: inline-block;

  &:hover {
    background-color: ${({ $isActive }) => ($isActive ? 'black' : 'darkgrey')}; 
  }
`;
