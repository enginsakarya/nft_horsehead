import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import DiscordLogo from '../assets/discordLogoWithBackground.png';
import InstagramLogo from '../assets/instagramLogoWithBackground.png';
import XLogo from '../assets/xLogoWithBackground.png';

const Section = styled.section`
  margin-bottom:-${(props) => props.theme.navHeight};
  background: ${(props) => props.theme.navBackground};
  position: absolute;
  width: 100vw;
  z-index: 1;
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.theme.navBackground};

  height: ${(props) => props.theme.navHeight};
`;

const NavBarRight = styled.nav`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-right: 80px;
  
  background: ${(props) => props.theme.navBackground};
  }
`;


const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  background: ${(props) => props.theme.navBackground};
  margin-right: 8px;

  @media (max-width: 70em) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => props.theme.navBackground};
    backdrop-filter: blur(2px);

    transform: ${(props) =>
      props.click ? 'translateY(0)' : 'translateY(1000%)'};
    transition: all 0.3s ease;

    flex-direction: column;
    justify-content: start;
  }
`;

const MenuItem = styled.li`
  margin: 0 8px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.navMenuItemBackground};
  padding: 4px 16px;
  border-radius: 10px;
  cursor: pointer;
  font-family: Cambria;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0em;
  text-align: center;
  z-index: 50;


  &:hover {
    transition: all 0.2s ease;
    transform: scale(1.2);
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.click ? '2rem' : '1.5rem')};
  height: 2px;
  background: ${(props) => props.theme.text};

  position: absolute;
  top: 4rem;
  right: 4em;
  transform: ${(props) =>
    props.click
      ? 'translate(-50%) rotate(90deg)'
      : 'translate(-50%) rotate(0)'};

  display: none;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    /* 1024px */
    display: flex;
  }

  &::after,
  &::before {
    content: ' ';
    width: ${(props) => (props.click ? '1rem' : '1.5rem')};
    height: 2px;
    right: ${(props) => (props.click ? '-2px' : '0')};
    background: ${(props) => props.theme.text};
    position: absolute;
    transition: all 0.3s ease;
  }

  &::after {
    top: ${(props) => (props.click ? '0.3rem' : '0.5rem')};
    transform: ${(props) => (props.click ? 'rotate(-40deg)' : 'rotate(0)')};
  }

  &::before {
    bottom: ${(props) => (props.click ? '0.3rem' : '0.5rem')};
    transform: ${(props) => (props.click ? 'rotate(40deg)' : 'rotate(0)')};
  }
`;

const IconList = styled.div`
  display: flex;
  align-items: center;
  width: min-content;
  background: ${(props) => props.theme.navBackground};

  & > * {
    padding-right: 1rem;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.2);
    }  
    
    @media (max-width: 64em) {
      /* 1024px */
      display: none;
    }
  }
`;

const Icon = styled.img`
  height: 24px;
  margin-top: 4px;
  width: auto;
  background: none;
`;

const Navigation = (props) => {
  const [click, setClick] = useState(false);


  const scrollTo = async (id) => {
    if(props.location!=='landing_page'){
      await props.update_location('landing_page');
    };

    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });

    setClick(!click);
  };

  return (
    <Section id="navigation">
      <NavBar id="navBar">
        <Logo update_location={props.update_location}/>
        <NavBarRight id="navBarRight">
          <>   
            <Menu click={click}>
              <MenuItem onClick={() => props.update_location('landing')}>MINT</MenuItem>
              <MenuItem onClick={() => props.update_location('roadmap')}>ROADMAP</MenuItem>
              <MenuItem onClick={() => props.update_location('gallery')}>GALLERY</MenuItem>
              <MenuItem onClick={() => props.update_location('faq')}>FAQ</MenuItem>
            </Menu>
          </>
          <IconList>
              <a
                href="https://discord.gg/eqPYZQMxh2"
              >
                <Icon src={DiscordLogo}/>
              </a>
              <a
                href="http://instagram.com"
              >
                <Icon src={InstagramLogo}/>
              </a>
              <a
                href="http://x.com"
              >
                <Icon src={XLogo}/>
              </a>
          </IconList>
          <HamburgerMenu click={click} onClick={() => setClick(!click)}>
            &nbsp;
          </HamburgerMenu>       
        </NavBarRight>
      </NavBar>
    </Section>
  );
};

export default Navigation;
