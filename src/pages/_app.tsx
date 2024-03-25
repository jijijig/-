import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/Components/LayOut/Navbar";
import styled from "styled-components";
export default function App({ Component, pageProps }: AppProps) {
  return <Warpapper>
     <Navbar/>
     <Component {...pageProps} />
     </Warpapper>;
}

const Warpapper = styled.div`
margin: 0;
padding: 0;


`