import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "./Button";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  line-height: 1.2;
  margin-bottom: 0.5rem;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }

  .website {
    position: relative;
    color: #00fff0;
    animation: glitch 1.5s infinite;
  }

  @keyframes glitch {
    0% {
      text-shadow: 2px 2px #eba8daff, -2px -2px #00fff0;
    }
    25% {
      text-shadow: -2px -2px #f0a0dcff, 2px 2px #00fff0;
    }
    50% {
      text-shadow: 2px -2px #d48fc3ff, -2px 2px #00fff0;
    }
    75% {
      text-shadow: -2px 2px #d895c7ff, 2px -2px #00fff0;
    }
    100% {
      text-shadow: 2px 2px #f1aae0ff, -2px -2px #00fff0;
    }
  }

  .text-1 {
    color: red;
  }
  .text-2 {
    color: purple;
  }
  .text-3 {
    color: green;
  }

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    width: 90%;
  }
`;

const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.6)`};
  font-weight: 600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;

const ButtonContainer = styled.div`
  align-self: flex-start;
  display: flex;
  justify-content: center;

  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
    button {
    display: inline-block;
    background-color: rgba(6, 8, 8, 0.6);
    color: ${(props) => props.theme.body};
    outline: solid;
    border: none;
    font-size: ${(props) => props.theme.fontsm};
    padding: 1.5rem 3rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }

  button:hover {
    transform: scale(1.05);
    // transform: scale(1.05);
    // box-shadow: 0 0 15px rgba(6, 8, 8, 0.6);
  }
  
  button::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${(props) => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all 0.3s ease;
  }
  button:hover::after {
    transform: translate(-50%, -50%) scale(1);
    padding: 0.4rem;
  }    

`;

const TypeWriterText = () => {
  // Smooth scroll function
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Title>
        We Build <span className="website">Websites</span> That Define{" "}
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('<span class="text-1">Performance.</span>')
              .pauseFor(1500)
              .deleteAll()
              .typeString('<span class="text-2">Interaction.</span>')
              .pauseFor(1500)
              .deleteAll()
              .typeString('<span class="text-3">Trends.</span>')
              .pauseFor(1500)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <SubTitle>Your brand deserves a powerful online presence.</SubTitle>

      <ButtonContainer>
        {/* ✅ Use a normal button element to handle the scroll manually */}
        <button
          onClick={() => scrollTo("projects")}
          style={{
            background: "white",
            // border: "2px solid #00fff0",
            color: "#090a0aff",
            padding: "0.75rem 2rem",
            borderRadius: "50px",
            cursor: "pointer",
            fontWeight: "600",
            fontSize: "1rem",
            transition: "all 0.3s ease",
          }}
          
          
        >
          Explore
        </button>
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
