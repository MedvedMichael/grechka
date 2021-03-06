import React from 'react';
import styled from "styled-components";

import Routing from "./Routing";

const MainApp = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function App() {
  return (
    <MainApp>

      <Routing/>
    </MainApp>
  );
}
