import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";

import BurgerMenu from "./burger-menu";
import CollapseMenu from "./collapse-menu";
import React, { useEffect, useState } from "react";
import {useHistory } from "react-router-dom";
import { VscGithubInverted } from "react-icons/vsc";

export interface NavbarProps {
  navbarState: boolean,
  handleNavbar: () => void,
  startLoading?: () => void
}

const Navbar = () => {
  const [navbarState, setNavbarState] = useState(false)
  const pages = [{url:'/', title: 'Home'}, {url: '/search', title: 'Search'}, {url: '/about-us', title: 'About us'}]
  const path = window.location.pathname
  const [selectedPage, setSelectedPage] = useState(pages.findIndex(item => item.url === path))

  useEffect(() => {
    setSelectedPage(pages.findIndex(item => item.url === window.location.pathname))
  }, [path])
  const handleNavbar = () => setNavbarState(!navbarState)

  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <NavbarTitle>
            Grechka app
          </NavbarTitle>
          <NavLinks style={linkAnimation}>
            {pages.map(page => <NavLink key={page.url} onClick={(href) => setSelectedPage(pages.findIndex(item => item.url === href))} href={page.url}>{page.title}</NavLink>)}
            <span style={{ marginLeft: 'auto', textDecoration: "none" }} >
              <a target="_blank" href="https://github.com/MedvedMichael/grechka"><VscGithubInverted /></a>
            </span>
          </NavLinks>
          
          <BurgerWrapper>
            <BurgerMenu
              navbarState={navbarState}
              handleNavbar={handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={navbarState}
        handleNavbar={handleNavbar}
      />
    </>
  )
}

export default Navbar

export interface NavLinkProps {
  children: string,
  href: string, 
  onClick: (href: string) => void
}

const NavLink = ({ children, href, onClick }: NavLinkProps) => {
  const history = useHistory()
  const location = window.location
  const isCurrent = location.pathname === href

  const onLinkClick = () => {
    if (!isCurrent) {
      onClick(href)
      history.push( href )
    }
  }
  return ( 
    <li>
      <span style={isCurrent ? {color: '#ffc71f'} : {}} onClick={onLinkClick}>{children}</span>
    </li>)
}

const NavBar = styled(animated.nav)`
  position: sticky;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  font-size: 1.4rem;
  background-color:#555555;
  transition: 0.1s;
  color: #ffffff;
  
`;

const NavbarTitle = styled.h3`
    text-decoration: none;
    color: #ffffff;
    font-size: 2rem;
    line-height: 1.2;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    display: block;
    margin-top: 1.25rem;
    margin-bottom: 0.5rem;
    min-width: 16rem;
    text-decoration: none;
    transition: 0.1s;
    & :hover {
      text-decoration:none;
      color: #fff;
    }
    /* transition: all 300ms linear 0s; */
`

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  flex-grow:1;
  margin: auto;
  padding-left: 1.5rem;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-self: end;
    list-style-type: none;
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 1rem;
    margin-right: .5rem;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    padding-left: 0;
    list-style: none;

  & li {
    padding-right: 0;
    padding-left: 0;
  }
  
  & span {
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: 0.1s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #ffc71f;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 800px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;
  margin-left: auto;
  margin-right: 1rem;
  
  

  @media (min-width: 800px) {
    display: none;
  }
`;