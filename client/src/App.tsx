import React from 'react';
import styled from "styled-components";
import Nav from "./Nav";
import Main from "./pages/Main";

const MainApp = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <MainApp>
      <Nav />
      <Main/>
    </MainApp>
  );
}
