import React from 'react';

import styled from 'styled-components'
import ProfileCard from "../components/ProfileCard";
import Nikita from '../public/Nikita.jpg'
import Anton from '../public/Anton.jpg'
import Michael from '../public/Michael.jpg'
import Footer from "../components/Footer";
import Nav from "../components/Nav";
export default function AboutUs() {
    return (<AboutUsContainer>
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
