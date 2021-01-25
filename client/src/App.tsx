import React from 'react';
import styled from "styled-components";
import Nav from "./components/Nav";
import Routing from "./Routing";

const MainApp = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  return (
    <MainApp>
      <Nav />
      <Routing/>
    </MainApp>
  );
}
