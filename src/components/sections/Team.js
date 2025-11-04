import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Example project preview images (replace with yours)
import preview1 from "../../assets/Winkr.png";
import preview2 from "../../assets/WearBefore.png";
import preview3 from "../../assets/Chaabi.png";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  padding: 4rem 0;
  position: relative;
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 80%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  gap: 6rem;

  @media (max-width: 64em) {
    width: 90%;
  }
`;

const ProjectRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 48em) {
    flex-direction: column;
    &:nth-child(even) {
      flex-direction: column;
    }
  }
`;

// ✅ Animated card (preview image)
const PreviewCard = styled(motion.div)`
  flex: 1;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
  overflow: hidden;
  background: ${(props) => props.theme.carouselColor};
  transition: all 0.4s ease;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
`;

// ✅ Animated details box
const DetailsCard = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.2rem;
  background: ${(props) => `rgba(${props.theme.textRgba}, 0.05)`};
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.4s ease;
  color: ${(props) => props.theme.text};
  backdrop-filter: blur(4px);

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 48em) {
    padding: 1.5rem;
  }
`;

const ProjectTitle = styled.h2`
  font-size: ${(props) => props.theme.fontxl};
  color: ${(props) => props.theme.text};
  font-weight: 700;
  border-bottom: 2px solid ${(props) => props.theme.text};
  display: inline-block;
  padding-bottom: 0.3rem;
`;

const ProjectDesc = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  line-height: 1.6;
  color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
`;

const Button = styled.a`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 10px;
  text-decoration: none;
  color: ${(props) => props.theme.text};
  font-size: ${(props) => props.theme.fontsm};
  font-weight: bold;
  align-self: flex-start;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

// ✅ Animation variants
const leftCardVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

const rightCardVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0 },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const projects = [
    {
      img: preview1,
      title: "Winkr App",
      desc: "Modern dating app landing page built with React and Framer Motion. Optimized for conversions, engagement, and aesthetic balance.",
      link: "#",
    },
    {
      img: preview2,
      title: "WearBefore Store",
      desc: "E-commerce platform for sustainable fashion. Features Stripe payments, product management, and admin dashboard built with MERN stack.",
      link: "#",
    },
    {
      img: preview3,
      title: "Chaabi CRM",
      desc: "Custom CRM system for service-based businesses with automated leads, analytics, and cloud-based authentication.",
      link: "#",
    },
  ];

  return (
    <Section id="projects">
      <Title>Sample Projects</Title>
      <Container>
        {projects.map((project, index) => {
          const isEven = index % 2 === 1;
          return (
            <ProjectRow key={index}>
              <PreviewCard
                variants={isEven ? rightCardVariants : leftCardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img src={project.img} alt={project.title} />
              </PreviewCard>

              <DetailsCard
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDesc>{project.desc}</ProjectDesc>
                <Button href={project.link} target="_blank">
                  View Project
                </Button>
              </DetailsCard>
            </ProjectRow>
          );
        })}
      </Container>
    </Section>
  );
};

export default Projects;
