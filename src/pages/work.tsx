import React, { useState } from "react";
import styled from "styled-components";
interface Work {
  id: number;
  src: string;
  title: string;
  description: string;
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
            <Image src={selectedWork.src} alt={selectedWork.title} />
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
const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 2rem;
  z-index: 100;
  border-radius: 10px;
  display: ${({ show }) => (show ? "block" : "none")};
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
  display: ${({ show }) => (show ? "block" : "none")};
`;
