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
  const works = [
    {
      id: 1,
      src: "/path/to/image1.jpg",
      title: "작업물 1",
      description: "이미지 1 설명",
    },
    {
      id: 2,
      src: "/path/to/image2.jpg",
      title: "작업물 2",
      description: "이미지 2 설명",
    },
    {
      id: 3,
      src: "/path/to/image3.jpg",
      title: "작업물 3",
      description: "이미지 3 설명",
    },
    {
      id: 4,
      src: "/path/to/image4.jpg",
      title: "작업물 4",
      description: "이미지 4 설명",
    },
    {
      id: 5,
      src: "/path/to/image5.jpg",
      title: "작업물 5",
      description: "이미지 5 설명",
    },
    {
      id: 6,
      src: "/path/to/image6.jpg",
      title: "작업물 6",
      description: "이미지 6 설명",
    },
    {
      id: 7,
      src: "/path/to/image7.jpg",
      title: "작업물 7",
      description: "이미지 7 설명",
    },
    {
      id: 8,
      src: "/path/to/image8.jpg",
      title: "작업물 8",
      description: "이미지 8 설명",
    },
    {
      id: 9,
      src: "/path/to/image9.jpg",
      title: "작업물 9",
      description: "이미지 9 설명",
    },
    {
      id: 10,
      src: "/path/to/image10.jpg",
      title: "작업물 10",
      description: "이미지 10 설명",
    },
    {
      id: 11,
      src: "/path/to/image11.jpg",
      title: "작업물 11",
      description: "이미지 11 설명",
    },
    {
      id: 12,
      src: "/path/to/image12.jpg",
      title: "작업물 2",
      description: "이미지 12 설명",
    },
    {
      id: 13,
      src: "/path/to/image13.jpg",
      title: "작업물 13",
      description: "이미지 13 설명",
    },
    {
      id: 14,
      src: "/path/to/image14.jpg",
      title: "작업물 14",
      description: "이미지 14 설명",
    },
  ];

  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work);
  };

  const handleCloseModal = () => {
    setSelectedWork(null);
  };

  return (
    <>
      <Grid>
        {works.map((work) => (
          <WorkItem key={work.id} onClick={() => handleWorkClick(work)}>
            <Image src={work.src} alt={work.title} />
          </WorkItem>
        ))}
      </Grid>
      {selectedWork && (
        <>
          <Overlay show={!!selectedWork} onClick={handleCloseModal} />
          <Modal show={!!selectedWork}>
            <h2>{selectedWork.title}</h2>
            <p>{selectedWork.description}</p>
            <StyledImage src={selectedWork.src} alt={selectedWork.title} />{" "}
            <button onClick={handleCloseModal}>닫기</button>
          </Modal>
        </>
      )}
    </>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 1rem;
`;

const WorkItem = styled.div`
  cursor: pointer;
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
