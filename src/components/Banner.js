import React, { useState } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  min-height: 30rem;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  border-bottom: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 3rem 1rem;

  @media (max-width: 48em) {
    min-height: 25rem;
    padding: 2rem 1rem;
  }
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
  text-align: center;
  text-transform: capitalize;
  text-shadow: 1px 1px 2px ${(props) => props.theme.text};
  margin-bottom: 1.5rem;

  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Description = styled.p`
  color: ${(props) => props.theme.body};
  opacity: 0.9;
  margin-bottom: 2rem;
  text-align: center;
  font-size: ${(props) => props.theme.fontmd};
  width: 60%;

  @media (max-width: 64em) {
    width: 80%;
  }

  @media (max-width: 48em) {
    width: 100%;
    font-size: ${(props) => props.theme.fontsm};
  }
`;

const Form = styled.form`
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;

  @media (max-width: 64em) {
  width: 100%;
  grid-template-columns: 1fr;
  padding: 0 0.5rem;
}

  input,
  select {
    width: 100%;
    min-width: 0;
    box-sizing: border-box;
    padding: 0.8rem 1rem;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontsm};
    outline: none;

    &::placeholder {
      color: ${(props) => props.theme.text};
      opacity: 0.7;
    }

    &:focus {
      border-color: ${(props) => props.theme.text};
      box-shadow: 0 0 5px ${(props) => props.theme.body};
    }
  }

  button {
    grid-column: span 2;
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: none;
    padding: 1rem 2rem;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 600;
    font-size: ${(props) => props.theme.fontsm};
    transition: all 0.2s ease;

    &:hover {
      transform: scale(0.95);
      background-color: ${(props) => props.theme.text};
      color: ${(props) => props.theme.body};
      box-shadow: 0 0 10px ${(props) => props.theme.body};
    }

    @media (max-width: 48em) {
      grid-column: span 1;
    }
  }
`;

const CheckboxGroup = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  background-color: ${(props) => props.theme.body};
  padding: 1rem 1.5rem;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.text};

  label {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.text};
    font-size: ${(props) => props.theme.fontsm};
    cursor: pointer;

    input {
      accent-color: ${(props) => props.theme.text};
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }

  h4 {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.text};
  }

  @media (max-width: 64em) {
    grid-column: span 1;
  }

  @media (max-width: 48em) {
    padding: 1rem;
  }
`;

const SuccessMessage = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  text-align: center;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.25);
  animation: fadeSlide 0.6s ease forwards;
  max-width: 90%;
  z-index: 5;

  @keyframes fadeSlide {
    from {
      opacity: 0;
      transform: translate(-50%, 40px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }

  @media (max-width: 48em) {
    bottom: 1.5rem;
    font-size: ${(props) => props.theme.fontsm};
    padding: 0.8rem 1.5rem;
  }
`;


const Banner = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    services: [],
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedServices = checked
        ? [...prevData.services, value]
        : prevData.services.filter((service) => service !== value);
      return { ...prevData, services: updatedServices };
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("https://buildify-backend-xjms.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          source: "",
          services: [],
        });
      }, 4000);
    } else {
      alert("Failed to send email");
    }
  } catch (err) {
    console.error(err);
    alert("Server error");
  }
};


  return (
    <Section id="connect">
      <Title>Let's Get You a Quotation!</Title>
      <Description>
        Fill in your details below — we’ll reach out with the perfect solution for your needs.
      </Description>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <select
          name="source"
          value={formData.source}
          onChange={handleChange}
          required
        >
          <option value="">From where did you hear about us?</option>
          <option value="Social Media">Social Media</option>
          <option value="Friend or Colleague">Friend or Colleague</option>
          <option value="Google Search">Google Search</option>
          <option value="Other">Other</option>
        </select>

        {/* ✅ Checkbox section */}
        <CheckboxGroup>
          <h4>What would you like us to do?</h4>
          <label>
            <input
              type="checkbox"
              value="Landing Page Development"
              checked={formData.services.includes("Landing Page Development")}
              onChange={handleCheckbox}
            />
            Landing Page Development
          </label>
          <label>
            <input
              type="checkbox"
              value="E-Commerce Development"
              checked={formData.services.includes("E-Commerce Development")}
              onChange={handleCheckbox}
            />
            E-Commerce Development
          </label>
          <label>
            <input
              type="checkbox"
              value="Search Engine Optimization"
              checked={formData.services.includes("Search Engine Optimization")}
              onChange={handleCheckbox}
            />
            Search Engine Optimization
          </label>
          <label>
            <input
              type="checkbox"
              value="API Development & Integration"
              checked={formData.services.includes("API Development & Integration")}
              onChange={handleCheckbox}
            />
            API Development & Integration
          </label>
          <label>
            <input
              type="checkbox"
              value="Custom CRM Development"
              checked={formData.services.includes("Custom CRM Development")}
              onChange={handleCheckbox}
            />
            Custom CRM Development
          </label>
        </CheckboxGroup>

        <button type="submit">Submit</button>
      </Form>

      {submitted && (
        <SuccessMessage>
          ✅ Thank you! We’ve received your message and will get back to you soon.
        </SuccessMessage>
      )}
    </Section>
  );
};

export default Banner;
