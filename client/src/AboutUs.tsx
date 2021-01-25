import React from 'react';
import Nav from './Nav';
import styled from 'styled-components'
import ProfileCard from "./ProfileCard";
import Nikita from './public/Nikita.jpg'
import Anton from './public/Anton.jpg'
import Michael from './public/Michael.jpg'
import Footer from "./Footer";
console.log(1)
export default function AboutUs() {
    return (<AboutUsContainer>
        <Nav/>
        <ProfilesContainer>
            <ProfileCard telegram={'@fiveiskii'} fullName={'Фивейский Антон'} github={'https://github.com/AntonFiveis'} imgUrl={Anton}/>
            <ProfileCard telegram={'@medved2001'} fullName={'Медведев Михаил'} github={'https://github.com/MedvedMichael'} imgUrl={Michael}/>
            <ProfileCard telegram={'@Ethsfn'} fullName={'Блудов Никита'} github={'https://github.com/nikita-nikita-nikita'} imgUrl={Nikita}/>
        </ProfilesContainer>
        <Footer/>
    </AboutUsContainer>)
}
const AboutUsContainer = styled.div`
    display: flex;
    flex-direction:column;
    width: 100vw;
`
const ProfilesContainer = styled.div`

display:flex;
flex-direction:row;
width:100%;
justify-content:space-around;
`
