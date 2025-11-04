import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Logo from "./Logo";

const Section = styled.section`
  width: 100vw;
  background-color: ${(props) => props.theme.body};
`;

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;

  .mobile {
    display: none;
  }

  @media (max-width: 64em) {
    .desktop {
      display: none;
    }

    .mobile {
      display: inline-block;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;

  @media (max-width: 64em) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
    z-index: 50;
    background-color: ${(props) => `rgba(${props.theme.bodyRgba}, 0.85)`};
    backdrop-filter: blur(2px);
    flex-direction: column;
    justify-content: center;
    transform: ${(props) =>
      props.menuClick ? `translateY(0)` : `translateY(1000%)`};
    transition: all 0.3s ease;
    touch-action: none !important;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: ${(props) => props.theme.text};
  cursor: pointer;

  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props) => props.theme.text};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  @media (max-width: 64em) {
    margin: 1rem 0;

    &::after {
      display: none;
    }
  }
`;

const HamburgerMenu = styled.span`
  width: ${(props) => (props.menuClick ? "2rem" : "1.5rem")};
  height: 2px;
  background: ${(props) => props.theme.text};
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: ${(props) =>
    props.menuClick
      ? "translateX(-50%) rotate(90deg)"
      : "translateX(-50%) rotate(0)"};
  display: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 64em) {
    display: flex;
  }

  &::after,
  &::before {
    content: "";
    width: ${(props) => (props.menuClick ? "1rem" : "1.5rem")};
    height: 2px;
    right: ${(props) => (props.menuClick ? "-2px" : "0")};
    background: ${(props) => props.theme.text};
    position: absolute;
  }

  &::after {
    top: ${(props) => (props.menuClick ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.menuClick ? "rotate(-40deg)" : "rotate(0)")};
  }

  &::before {
    bottom: ${(props) => (props.menuClick ? "0.3rem" : "0.5rem")};
    transform: ${(props) => (props.menuClick ? "rotate(40deg)" : "rotate(0)")};
  }
`;

const Navigation = () => {
  const [menuClick, setMenuClick] = useState(false);

  const scrollTo = (id) => {
    let element = document.getElementById(id);

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    setMenuClick(!menuClick);
  };

  return (
    <Section id="navigation">
      <NavBar>
        <Logo />
        <HamburgerMenu
          menuClick={menuClick}
          onClick={() => setMenuClick(!menuClick)}
        >
          &nbsp;
        </HamburgerMenu>
        <Menu menuClick={menuClick}>
          
          <MenuItem onClick={() => scrollTo("navigation")}>Home</MenuItem>
          <MenuItem onClick={() => scrollTo("roadmap")}>Services</MenuItem>
           <MenuItem onClick={() => scrollTo("projects")}>Showcase</MenuItem>
          <MenuItem onClick={() => scrollTo("testimonials")}>WhatPeopleSay</MenuItem>
          <MenuItem onClick={() => scrollTo("faq")}>Faq</MenuItem>
          <MenuItem onClick={() => scrollTo("connect")}>Let’s Collaborate</MenuItem>
          
        </Menu>
        
      </NavBar>
    </Section>
  );
};

export default Navigation;
