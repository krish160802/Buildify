import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Section = styled.section`
  width: 100%;
  position: fixed;  
  top: 0;
  left: 0;
  z-index: 1000;
  pointer-events: none;

  background: none;
  box-shadow: none;
  backdrop-filter: none;

  border-bottom: ${({ scrolled, theme }) =>
    scrolled ? "none" : `2px solid rgba(${theme.textRgba}, 0.15)`};

  transition: background 0.3s ease, box-shadow 0.3s ease,
    backdrop-filter 0.3s ease;
`;

const NavBar = styled.nav`
  pointer-events: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${({ scrolled, theme }) =>
    scrolled ? "64px" : theme.navHeight};

  width: ${({ scrolled }) => (scrolled ? "72%" : "88%")};

  margin: 0 auto;
  margin-top: ${({ scrolled }) => (scrolled ? "1rem" : "0")};

  padding: ${({ scrolled }) => (scrolled ? "0 2rem" : "0")};

  background: ${({ scrolled, theme }) =>
    scrolled ? `rgba(${theme.bodyRgba}, 0.6)` : "transparent"};

  backdrop-filter: ${({ scrolled }) =>
    scrolled ? "blur(7px)" : "none"};

  border-radius: ${({ scrolled }) =>
    scrolled ? "999px" : "0"};

  box-shadow: ${({ scrolled }) =>
    scrolled ? "0 12px 35px rgba(0,0,0,0.35)" : "none"};

  transition:
    width 0.35s ease,
    height 0.35s ease,
    padding 0.35s ease,
    margin-top 0.35s ease,
    border-radius 0.35s ease,
    background 0.35s ease,
    box-shadow 0.35s ease;
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
    width: 100vw;
    height: calc(100vh - ${(props) => props.theme.navHeight});
    z-index: 999;

    background-color: rgba(${(props) => props.theme.bodyRgba}, 0.95);
    backdrop-filter: blur(6px);

    flex-direction: column;
    justify-content: center;

    opacity: ${(props) => (props.menuClick ? 1 : 0)};
    pointer-events: ${(props) => (props.menuClick ? "auto" : "none")};
    transform: translateY(${(props) => (props.menuClick ? "0" : "-20px")});

    transition: opacity 0.3s ease, transform 0.3s ease;
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

const CtaItem = styled.li`
  margin-left: 1.5rem;
  padding: 0.6rem 1.4rem;
  border-radius: 999px;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(${(props) => props.theme.textRgba}, 0.25);
  }

  @media (max-width: 64em) {
    margin-top: 2rem;
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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <Section scrolled={scrolled} id="navigation">
      <NavBar scrolled={scrolled}>
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
          <CtaItem onClick={() => scrollTo("connect")}>Let’s Collaborate</CtaItem>
          
        </Menu>
        
      </NavBar>
    </Section>
  );
};

export default Navigation;
