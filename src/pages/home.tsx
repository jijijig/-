import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HomeTitle from "@/Components/Home/HomeTitle";
import HomeSub from "@/Components/Home/Homesub";

export default function home() {
  return (
    <Warpper>
      <div className="homeblock1">
        <HomeTitle />
      </div>
      <div className="homeblock2">
        <HomeSub />
      </div>
    </Warpper>
  );
}
const Warpper = styled.div`
  margin: 67px 0 0 10%;
  padding: 0;
  width: 80vw;
  height: 60vh;

  display: flex;
  justify-content: space-around;
  .homeblock1 {
    width: 50%;
    height: 100%;
    background-color: #ffffff;
  }
  .homeblock2 {
    margin-left: 5%;
    width: 40%;
    height: 100%;
  }
`;
