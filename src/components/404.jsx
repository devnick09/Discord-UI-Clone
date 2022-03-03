import React from "react";
import styled from "styled-components";

const Main = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  h1 {
    font-size: 3rem;
    text-decoration: underline;
  }
`;

const NotFound = () => {
  return (
    <Main>
      <h1>404 : Page Not Found</h1>
    </Main>
  );
};

export default NotFound;
