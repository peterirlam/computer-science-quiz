import styled, { createGlobalStyle } from "styled-components";
import BGImage from "./images/background.webp";

export const GlobalStyle = createGlobalStyle`
html {
  height: 100%;;
}
body {
  background-image: linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${BGImage});
  background-size: cover;
  margin: 0;
  padding: 0 20px;
  display: flex;
  justify-content: center;
}
* {
  box-sizing: border-box;
  font-family: 'Audiowide', sans-serif;
}
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #ddd;
  }
  .score {
    color: #ddd;
    font-size: 2rem;
    margin: 0 0 20px;
  }
  h1 {
    background-image: linear-gradient(180deg, #fff, #1afd71);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #004c1d);
    font-size: 70px;
    font-weight: 400;
    text-align: center;
    margin: 30px 0 20px;
  }
  .start,
  .next {
    cursor: pointer;
    background: linear-gradient(180deg, #fff, #99fec0);
    border: 2px solid #006527;
    box-shadow: 0px 5px 10px rgba(230, 255, 239, 0.5);
    border-radius: 10px;
    height: 50px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;
