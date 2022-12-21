import styled from "styled-components";

export const NavbarContainer = styled.nav`
  position: sticky;
  width: 100vw;
  height: 50px;
  background-color: aliceblue;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3fr;
`;

export const NavbarBrandingContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: white;
    letter-spacing: 6px;
  }
`;

export const NavbarLinksContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: end;
  ul {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    li {
      list-style-type: none;
      a {
        color: black;
        text-decoration: none;
      }
    }
  }
`;

export const Branding = styled.h2`
  color: orange;
  text-transform: uppercase;
  font-size: 22px;
  letter-spacing: 5px;
  font-family: cursive;
  padding-left: 20px;
`;
