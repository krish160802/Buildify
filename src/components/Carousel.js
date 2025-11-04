import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, EffectCards, Autoplay } from "swiper";

import img1 from "../assets/Nfts/bighead-1.svg";
import img2 from "../assets/Nfts/bighead-2.svg";
import img3 from "../assets/Nfts/bighead-3.svg";
import img4 from "../assets/Nfts/bighead-4.svg";
import img5 from "../assets/Nfts/bighead-5.svg";
import img6 from "../assets/Nfts/bighead-6.svg";
import img7 from "../assets/Nfts/bighead-7.svg";
import img8 from "../assets/Nfts/bighead-8.svg";
import img9 from "../assets/Nfts/bighead-9.svg";
import img10 from "../assets/Nfts/bighead.svg";

// import Arrow from "../assets/Arrow.svg";

const Container = styled.div`
  width: 25vw;
  height: 70vh;

  @media (max-width: 70em) {
    height: 60vh;
    padding-top: 2rem;
  }

  @media (max-width: 64em) {
    height: 50vh;
    width: 30vw;
  }

  @media (max-width: 48em) {
    height: 50vh;
    width: 40vw;
  }

  @media (max-width: 30em) {
    height: 45vh;
    width: 60vw;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    background-color: ${(props) => props.theme.carouselColor};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${(props) => props.theme.text};
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease;

  }

  .quote {
    font-size: 1.1rem;
    line-height: 1.6;
    font-style: italic;
    opacity: 0.9;
  }
    .author {
    margin-top: 1.5rem;
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme.text};
  }

  .role {
    font-size: 0.9rem;
    color: rgba(${(props) => props.theme.textRgba}, 0.7);
  }
`;


const Carousel = () => {
  const testimonials = [
    {
      quote:
        "An absolute pleasure to work with! The website design was sleek, fast, and beyond our expectations.",
      author: "— Aarav Mehta",
      role: "Founder, UrbanTech Studio",
    },
    {
      quote:
        "They delivered exactly what we needed, on time and with a perfect user experience. Highly recommended!",
      author: "— Sarah Gupta",
      role: "Marketing Lead, Bloomify",
    },
    {
      quote:
        "Professional, responsive, and detail-oriented. Our custom CRM now saves hours of manual work every week.",
      author: "— Vikram Singh",
      role: "CEO, FinGrow",
    },
    {
      quote:
        "Great communication throughout the project and beautiful modern design. Would love to collaborate again!",
      author: "— Neha Patel",
      role: "Creative Director, PixelEdge",
    },
  ];
  return (
    <Container>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          type: "fraction",
        }}
        scrollbar={{
          draggable: true,
        }}
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <p className="quote">“{t.quote}”</p>
            <p className="author">{t.author}</p>
            <p className="role">{t.role}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Carousel;
