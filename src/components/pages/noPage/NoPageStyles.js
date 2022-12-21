import styled from "styled-components";

export const NoPageContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    letter-spacing: 5px;
    text-decoration: underline;
  }
`;
