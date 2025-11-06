import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import DrawSvg from "../DrawSvg";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  line-height: 1.2;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

// const Container1 = styled.div`
//   width: 70%;
//   height: 200vh;
//   background-color: ${(props) => props.theme.body};
//   margin: 0 auto;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;

//   @media (max-width: 64em) {
//     width: 80%;
//   }

//   @media (max-width: 48em) {
//     width: 90%;
//   }
// `;
const Container = styled.div`
  width: 70%;
  min-height: 100vh; /* ✅ allow dynamic growth */
  background-color: ${(props) => props.theme.body};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 3rem 0;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
  }
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 90%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 50px 0 50px 0;
      text-align: right;

      @media (max-width: 48em) {
        border-radius: 0 50px 0 50px;
        text-align: left;

        p {
          border-radius: 0 40px 0 40px;
        }
      }
    }

    p {
      border-radius: 40px 0 40px 0;
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;

    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }

    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;

const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;

  @media (max-width: 48em) {
    justify-content: flex-end !important;
  }
`;

const ItemContainer = styled.div`
  width: 40%;
  height: fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.text};

  @media (max-width: 48em) {
    width: 70%;
  }
`;

const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;

const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;

const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  font-weight: 400;
  margin: 0.5rem 0;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const RoadMapItem = ({ title, subText, addToRef }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle>{title}</SubTitle>
          <Text>{subText}</Text>
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (element) => {
    if (element && !revealRefs.current.includes(element)) {
      revealRefs.current.push(element);
    }
  };

  useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

  let t1 = gsap.timeline();
  revealRefs.current.forEach((el, index) => {
    t1.fromTo(
      el.childNodes[0],
      { y: 0 },
      {
        y: "-30%",
        scrollTrigger: {
          id: `section-${index}`,
          trigger: el,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  });

  // ✅ Refresh triggers when layout changes or new items are added
  ScrollTrigger.refresh();

  return () => {
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}, []);

  return (
    <Section id="roadmap">
      <Title>What We Offer</Title>

      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>

        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            addToRef={addToRefs}
            title="Landing Pages & Portfolios"
            subText="Fast, aesthetic one-page sites for creators, professionals, or campaigns."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="E-Commerce Development"
            subText="Build and launch online stores with integrated payments."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="SEO & Performance Optimization"
            subText="Make your site rank and load fast."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="API Development & Integration"
            subText="Build and connect third-party APIs (Google, Firebase, OpenAI, payment gateways, etc.)"
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Custom CRM Development"
            subText="Build a CRM tailored to a business’s workflow."
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="AI Bot Development & Integration"
            subText="Automate customer interactions and streamline workflows with intelligent bots."
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
