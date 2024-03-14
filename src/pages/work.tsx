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
      title: "기숙사 사생관리 프로그램",
      description: "로그인 인증관련",
    },
    {
      id: 11,
      src: "/path/domidomi/image2.png",
      title: "기숙사 사생관리 프로그램",
      description: "메인페이지",
    },
    {
      id: 12,
      src: "/path/domidomi/image3.png",
      title: "기숙사 사생관리 프로그램",
      description: "사생 데이터 관리대장",
    },
    {
      id: 13,
      src: "/path/domidomi/image4.png",
      title: "기숙사 사생관리 프로그램",
      description: "PDF관리대장",
    },
    {
      id: 14,
      src: "/path/domidomi/image5.png",
      title: "기숙사 사생관리 프로그램",
      description: "카드키 관리대장",
    },
    {
      id: 15,
      src: "/path/domidomi/image6.png",
      title: "기숙사 사생관리 프로그램",
      description: "사진 관리대장",
    },
    {
      id: 16,
      src: "/path/domidomi/image7.png",
      title: "기숙사 사생관리 프로그램",
      description: "민원접수내역",
    },
    {
      id: 17,
      src: "/path/domidomi/image8.png",
      title: "기숙사 사생관리 프로그램",
      description: "방역호실점검",
    },
    {
      id: 18,
      src: "/path/domidomi/image9.png",
      title: "기숙사 사생관리 프로그램",
      description: "기존 시스템",
    },
    {
      id: 19,
      src: "/path/domidomi/image10.png",
      title: "기숙사 사생관리 프로그램",
      description: "현재 시스템",
    },
    {
      id: 20,
      src: "/path/domidomi/image11.png",
      title: "기숙사 사생관리 프로그램",
      description: "기존 시스템",
    },
    {
      id: 21,
      src: "/path/domidomi/image12.png",
      title: "기숙사 사생관리 프로그램",
      description: "현재 시스템",
    }
    ,
    {
      id: 22,
      src: "/path/domidomi/image13.png",
      title: "기숙사 사생관리 프로그램",
      description: "기존 시스템",
    }
    , {
      id: 23,
      src: "/path/domidomi/image14.png",
      title: "기숙사 사생관리 프로그램",
      description: "현재 시스템",
    }
    , {
      id: 24,
      src: "/path/domidomi/image15.png",
      title: "기숙사 사생관리 프로그램",
      description: "배포",
    }
    , 
    {id: 25,
      src: "/path/poit/image1.png",
      title: "포잇캘린더",
      description: "캘린더 구상도",
    }
    ,
    {id: 26,
      src: "/path/poit/image2.png",
      title: "포잇캘린더",
      description: "메인 설명",
    }
    ,
    {id: 27,
      src: "/path/poit/image3.png",
      title: "포잇캘린더",
      description: "메인 설명",
    }
    ,
    {id: 28,
      src: "/path/poit/image4.png",
      title: "포잇캘린더",
      description: "최초 상단바",
    }
    ,
    {id: 29,
      src: "/path/poit/image5.png",
      title: "포잇캘린더",
      description: "데일리",
    }
    ,
    {id: 30,
      src: "/path/poit/image6.png",
      title: "포잇캘린더",
      description: "투두 리스트",
    }
    ,
    {id: 31,
      src: "/path/poit/image7.png",
      title: "포잇캘린더",
      description: "투두리스트 투두 추가",
    }
    ,
    {id: 32,
      src: "/path/poit/image8.png",
      title: "포잇캘린더",
      description: "투두리스트 테그 수정",
    }
    ,
    {id: 33,
      src: "/path/poit/image9.png",
      title: "포잇캘린더",
      description: "투두리스트 테그 추가",
    }
    ,
    {id: 34,
      src: "/path/poit/image10.png",
      title: "포잇캘린더",
      description: "내부 상단바",
    }
    ,
    {id: 35,
      src: "/path/poit/image11.png",
      title: "포잇캘린더",
      description: "메인 캘린더",
    }
    ,
    {id: 36,
      src: "/path/poit/image12.png",
      title: "포잇캘린더",
      description: "일정 수정",
    }
    ,
    {id: 37,
      src: "/path/poit/image13.png",
      title: "포잇캘린더",
      description: "일정 추가",
    }
    ,
    {id: 38,
      src: "/path/poit/image14.png",
      title: "포잇캘린더",
      description: "친구 목록",
    }
    ,
    {id: 39,
      src: "/path/poit/image15.png",
      title: "포잇캘린더",
      description: "친구 요청",
    }
    ,
    {id: 40,
      src: "/path/poit/image16.png",
      title: "포잇캘린더",
      description: "친구 요청목록 확인",
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
