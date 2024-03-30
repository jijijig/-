import React, { useState } from "react";
import styled from "styled-components";
interface Work {
  id: number;
  src: string;
  title: string;
  description: string;
}

interface ModalProps {
  show: boolean;
}
export default function Work() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work);
  };

  const handleCloseModal = () => {
    setSelectedWork(null);
  };

  return (
    <Wrapper>
      <Top>
        <p className="mainp">Our Portfolio</p>
        <h1>작업물</h1>
        <p>멤버들의 작업물을 확인할 수 있습니다.</p>
      </Top>
      <MiddleBar>
        <table>
          <tr>
            <td>All Project</td>
            <td>Branding</td>
            <td>Design</td>
            <td>Marketing</td>
            <td>Development</td>
          </tr>
        </table>
      </MiddleBar>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1rem;
`;
const MiddleBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1rem;
  td {
    text-align: center;
    width: 162px;
    height: 48px;
    gap: 10px;
    border-radius: 8px 0px 0px 0px;
    opacity: 0px;
  }
`;
const Top = styled.div`
  text-align: center;
  margin: 2rem;

  p {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
  }
  .mainp {
    margin: 8px;
    font-family: Inter;
    font-size: 18px;
    font-weight: 600;
    line-height: 26px;
    text-align: center;
    color: #3758f9;
  }
  h1 {
    margin: 0px;
    margin-bottom: 4px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const WorkItem = styled.div`
  cursor: pointer;
  background-color: #f9f9f9;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
const Modal = styled.div<ModalProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  z-index: 100;
  border-radius: 10px;
  display: ${({ show }) => (show ? "block" : "none")};
  max-width: 80vw;
  max-height: 80vh;
  overflow: auto;
`;

const Overlay = styled.div<ModalProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: ${({ show }) => (show ? "block" : "none")};
`;
const StyledImage = styled.img`
  width: 100%;
  max-height: 60vh;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;
