'use client';
import React from 'react'
import Link from 'next/link';
import styled from 'styled-components'


export default function Navbar() {
  return (
    <Warpapper>
      <Link href="/">지지직</Link>
      <Link href="/about">정보</Link>
      <Link href="/work">작업물</Link>
      <Link href="/member">인원</Link>
      <Link href="/vendor">지원</Link>
    </Warpapper>
  )
}

const Warpapper = styled.div`
display: flex;
  justify-content: space-around; 
  align-items: center; 
  padding: 10px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #004d40; 
  border-radius:  0 0 10px 10px;
  gap: 20px;

  a {
    font-size: 20px;
    text-decoration: none;
    color: #fff; 
    transition: color 0.3s ease;

    &:hover {
      color: #80cbc4;
    }
  }
`;