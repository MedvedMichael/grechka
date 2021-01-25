import React from 'react'
import styled from "styled-components";
export default function Footer(){
    return (
        <FooterContainer>
            <a href={'github.com/AntonFiveis'}>Anton</a>
            <a href = {'github.com/MedvedMichael'}>Michael</a>
            <a href = {'github.com/nikita-nikita-nikita'}>Nikita</a>
        </FooterContainer>
    )
}
const FooterContainer =styled.div`
background-color: #555555;
  width: 100%;
  height: 60px;
  padding: 0 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2em;
  color: white;
  margin-top: 40px;
`
