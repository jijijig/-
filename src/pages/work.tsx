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
      src: "/path/drug/image1.jpg",
      title: "마약중독 재활 프로젝트",
      description: "구현 구조",
    },
    {
      id: 2,
      src: "/path/drug/image2.jpg",
      title: "마약중독 재활 서비스",
      description: "메인 페이지",
    },
    {
      id: 3,
      src: "/path/drug/image3.jpg",
      title: "마약중독 재활 서비스",
      description: "기부 페이지",
    },
    {
      id: 4,
      src: "/path/drug/image4.jpg",
      title: "마약중독 재활 서비스",
      description: "로그인 페이지",
    },
    {
      id: 5,
      src: "/path/drug/image5.jpg",
      title: "마약중독 재활 서비스",
      description: "관리 페이지",
    },
    {
      id: 6,
      src: "/path/drug/image6.jpg",
      title: "마약중독 재활 서비스",
      description: "지도 페이지",
    },
    {
      id: 7,
      src: "/path/drug/image7.jpg",
      title: "마약중독 재활 서비스",
      description: "마이페이지",
    },
    {
      id: 8,
      src: "/path/drug/image8.jpg",
      title: "마약중독 재활 서비스",
      description: "상세확인 페이지",
    },
    {
      id: 9,
      src: "/path/drug/image9.jpg",
      title: "마약중독 재활 서비스",
      description: "공유 페이지",
    },
    {
      id: 10,
      src: "/path/domidomi/image1.png",
      title: "작업물 10",
      description: "이미지 10 설명",
    },
    {
      id: 11,
      src: "/path/domidomi/image2.png",
      title: "작업물 11",
      description: "이미지 11 설명",
    },
    {
      id: 12,
      src: "/path/domidomi/image3.png",
      title: "작업물 2",
      description: "이미지 12 설명",
    },
    {
      id: 13,
      src: "/path/domidomi/image4.png",
      title: "작업물 13",
      description: "이미지 13 설명",
    },
    {
      id: 14,
      src: "/path/domidomi/image5.png",
      title: "작업물 14",
      description: "이미지 14 설명",
    },
    {
      id: 15,
      src: "/path/domidomi/image6.png",
      title: "작업물 15",
      description: "이미지 15 설명",
    },
    {
      id: 16,
      src: "/path/domidomi/image7.png",
      title: "작업물 16",
      description: "이미지 16 설명",
    },
    {
      id: 17,
      src: "/path/domidomi/image8.png",
      title: "작업물 17",
      description: "이미지 17 설명",
    },
    {
      id: 18,
      src: "/path/domidomi/image9.png",
      title: "작업물 18",
      description: "이미지 18 설명",
    },
    {
      id: 19,
      src: "/path/domidomi/image10.png",
      title: "작업물 19",
      description: "이미지 19 설명",
    },
    {
      id: 20,
      src: "/path/domidomi/image11.png",
      title: "작업물 20",
      description: "이미지 20 설명",
    },
    {
      id: 21,
      src: "/path/domidomi/image12.png",
      title: "작업물 21",
      description: "이미지 21 설명",
    }
    ,
    {
      id: 22,
      src: "/path/domidomi/image13.png",
      title: "작업물 22",
      description: "이미지 22 설명",
    }
    , {
      id: 23,
      src: "/path/domidomi/image14.png",
      title: "작업물 22",
      description: "이미지 22 설명",
    }
    , {
      id: 24,
      src: "/path/domidomi/image15.png",
      title: "작업물 24",
      description: "이미지 24 설명",
    }
    , 

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
