"use client";
import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import { useEffect } from "react";
interface StyledLinkProps {
  active: boolean;
}
export default function Navbar() {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  return (
    <Warpapper>
      <div className="SiteMain">
        <Link href="/home">지지직</Link>
      </div>
      <div className="SiteSub">
        <StyledLink href="/home" active={isActive("/home")}>
          Home
        </StyledLink>
        <StyledLink href="/about" active={isActive("/about")}>
          About
        </StyledLink>
        <StyledLink href="/member" active={isActive("/member")}>
          Member
        </StyledLink>
        <StyledLink href="/vendor" active={isActive("/vendor")}>
          Portfolio
        </StyledLink>
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
const StyledLink = styled(Link)<StyledLinkProps>`
  font-size: 20px;
  text-decoration: none;
  color: #111928;
  transition: color 0.3s ease;

  ${({ active }) =>
    active &&
    css`
      font-weight: bold;
      color: black;
    `}
`;
