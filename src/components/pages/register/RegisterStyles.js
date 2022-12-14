import styled from "styled-components";

export const RegisterContainer = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 40px;
  left: 0;
  z-index: -1;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  padding: 40px;
  width: 40%;
  text-align: center;
  display: flex;
  flex-direction: column;

  img {
    position: relative;
    width: 80px;
    left: calc(50% - 40px);
  }

  input {
    margin-bottom: 10px;
  }
`;
