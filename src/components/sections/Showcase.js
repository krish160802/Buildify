import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import webDevAnimation from "../../assets/webdev.json";

const Section = styled.section`
  height: 100vh;
  width: 100vw;
  background: radial-gradient(circle at 20% 20%, #0f0f0f, #000);
  display: flex;
  align-items: center;
  justify-content: left;
  overflow: hidden;
`;

const AnimationWrapper = styled(motion.div)`
  width: 90vw;
  max-width: 1200px;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

const Showcase = () => {
  return (
    <Section id="showcase">
      <AnimationWrapper
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Lottie animationData={webDevAnimation} loop={true} />
      </AnimationWrapper>
    </Section>
  );
};

export default Showcase;
