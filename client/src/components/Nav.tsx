import React from 'react';
import styled from 'styled-components';
import {VscGithubInverted} from "react-icons/all";

const Header = styled.header`
  background-color: #555555;
  width: 100%;
  height: 60px;
  padding: 0 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2em;
  color: white;
  margin-bottom: 10px;
`;

const Link = styled.a`
    color: #fff;
`;

export default function Nav () {
    return (
        <Header>
            Greachka app
            <Link href="https://github.com/MedvedMichael/grechka"><VscGithubInverted/></Link>
        </Header>
    )
}
