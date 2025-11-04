import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  height: 100vh; /* force full viewport */
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  line-height: 1.2;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.body};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
  }
`;

const Box = styled.div`
  width: 45%;

  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top top",
      end: "+=100%",    // pin for one viewport height
      pin: true,
      pinSpacing: false, // no extra blank space
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>FAQ's</Title>
      {/* <br></br> */}
      {/* <p>Got questions? We’ve got answers</p> */}
      <Container>
        <Box>
          <Accordion title="What kind of websites do you build?">
            We build everything from fast, single-page landing sites to complex full-stack web applications — including e-commerce platforms, CRMs, and AI-powered solutions.
          </Accordion>
          <Accordion title="Can you redesign or upgrade my existing website?">
            Absolutely. We can refresh your current site’s UI, migrate it to modern frameworks, or rebuild it for better speed, SEO, and security.
          </Accordion>
          <Accordion title="Can AI bots integrate with my existing website or CRM?">
            Yes. We can embed AI directly into your website or connect it to your internal CRM, WhatsApp, or support tools.
          </Accordion>
        </Box>
        <Box>
          <Accordion title="How long does it take to build a website?">
            A simple landing page can be ready within a week, while a full-featured app or e-commerce site may take 3–5 weeks depending on complexity and integrations.
          </Accordion>
          <Accordion title="How much do your services cost?">
            Our pricing depends on the project scope — we offer flexible packages for startups, creators, and established businesses. Contact us for a quick quote.
          </Accordion>
          <Accordion title="Will I own the source code and hosting after the project?">
            Yes. Once the project is delivered and paid, you get full ownership of the code, assets, and hosting.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
