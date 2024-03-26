"use client";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

export default function Navbar() {
  return (
    <Warpapper>
      <div className="SiteMain">
        <Link href="/home">지지직</Link>
      </div>
      <div className="SiteSub">
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/member">Member</Link>
        <Link href="/vendor">Portfolio</Link>
      </div>
    </Warpapper>
  );
}

const Warpapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  max-width: 1200px;
  background-color: #ffffff;
  padding: 25px 135px;
  .SiteMain {
    font-size: 30px;
    font-weight: bold;
    color: #111928;
    margin-right: 140px;
  }
  .SiteSub {
    width: 40%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  a {
    font-size: 20px;
    text-decoration: none;
    color: #111928;
    transition: color 0.3s ease;

    &:hover {
      color: black;
    }
  }
`;
