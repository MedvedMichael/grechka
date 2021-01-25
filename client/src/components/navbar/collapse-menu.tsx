import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

import { useContext } from 'react';
import { NavbarProps, NavLinkProps } from './navbar';
import { useHistory, useLocation } from 'react-router-dom';





const CollapseMenu = ({ navbarState, handleNavbar }: NavbarProps) => {
  const { open } = useSpring<{open: number}>({ open: navbarState ? 0 : 1 });

  const NavLink = ({ children, href }: NavLinkProps) => {
    const history = useHistory()
    const location = window.location
    const isCurrent = location.pathname === href

    const onLinkClick = () => {
      if (!isCurrent) {
        history.push(href)
      }
    }
    return ( 
      <li>
        <span style={isCurrent ? {color: '#ffc71f'} : {}} onClick={onLinkClick}>{children}</span>
      </li>)
  }

  if (navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate((openValue: number) => `translate3d(0, ${openValue}px, 0`),
        
      }}
      >
        <NavLinks >
          <NavLink href="/">Home</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/gallery">Gallery</NavLink>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #000000;
  transition: 0.1s;
  position: fixed;
  z-index:9;
  top: 4.5rem;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 1rem 1rem;
  margin-top: 1rem;
  color: #fff;

  & li {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    padding: 0.5rem 2rem;
    list-style: none;
  }

  & span {
    font-size: 1.4rem;
    line-height: 2;
    
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    

    &:hover {
      color: #ffc71f;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;

