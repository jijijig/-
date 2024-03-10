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
justify-content: space-between;
padding: 10px 20px;
max-width: 1200px;
margin: 0 auto;
a {
  font-size: 20px;
  text-decoration: none;
  color: #333;
}
`;
