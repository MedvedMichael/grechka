import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
interface ProfileCardProps {
    imgUrl:string,
    fullName:string,
    telegram:string,
    github:string
}
export default function ProfileCard({imgUrl,fullName, telegram, github}:ProfileCardProps){

    return (
        <ProfileCardContainer>
            <ProfileImg src={imgUrl} alt={'profile image'}/>
            <Text>Full name:{fullName}</Text>
            <Text>Telegram: {telegram}</Text>
            <Text>GitHub: <a style={{color: '#000'}} href={github}> {github}</a></Text>
        </ProfileCardContainer>
    )
}
const ProfileCardContainer = styled.div`
    display:flex;
    flex-direction:column;
    text-align:center;
    align-items:center;
`
const ProfileImg = styled.img`
    width: 80%;
`
const Text = styled.p`
    color:blue;
`

