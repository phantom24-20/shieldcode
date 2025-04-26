import styled from "styled-components";
import { motion } from "framer-motion";
import IMAGES from "../assets/Image";

const Container = styled.div`
  position: relative;
  padding: 100px 40px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  color: white;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${IMAGES.contactbg}); // ✅ Replace with your actual image path
    background-size: cover;
    background-position: center;
    filter: blur(10px);
    opacity: 0.5;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5); // ✅ Optional dark overlay for better text visibility
    z-index: 0;
  }

  * {
    position: relative;
    z-index: 1;
  }
`;


const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 900px;
  line-height: 1.7;
  text-align: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  justify-items: center;
  gap: 30px;
  margin-top: 60px;
  width: 100%;
  max-width: 1000px;
`;

const ProjectCard = styled(motion.div)`
  background: #1a1a1a;
  border-radius: 16px;
  padding: 25px;
  width: 100%;
  cursor:pointer;
  max-width: 300px;
  box-shadow: 0 0 10px rgba(255, 138, 0, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 18px rgba(229, 46, 113, 0.5);
  }
`;

const ProjectTitle = styled.h3`
  color: #ff8a00;
  margin-bottom: 10px;
`;

const ProjectDesc = styled.p`
  font-size: 1rem;
  color: #bbb;
`;

const About = () => {
  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Shield Code
      </Title>
      <Description
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.4, duration: 0.8 }}
>
  Shield Code Technologies is a full-stack digital agency that builds high-performing websites,
  scalable applications, and immersive user interfaces for startups, businesses, and enterprises.
  Our mission is to help you harness the power of technology with tailored digital solutions
  that align perfectly with your goals. We work across industries and deliver excellence in
  every line of code, from design mockups to deployment-ready platforms.
</Description>

<Description
  as={motion.p}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  style={{ marginTop: "20px" }}
>
  With a team of passionate developers and creative designers, we’ve built everything from portfolio websites
  and e-commerce platforms to booking systems and business dashboards. Our tech stack includes React, Vite,
  Firebase, Styled Components, and more. At Shield Code, innovation meets reliability.
</Description>
      <ProjectsGrid>
        {[
          {
            title: "HMD Business Portfolio",
            desc: "Portfolio site for HMD Group built with Vite + React, featuring Trust-based payment routing.",
          },
          {
            title: "Pets World Grooming",
            desc: "E-commerce & pet grooming appointment app using React and Firebase. Mobile-optimized.",
          },
          {
            title: "Online Banking System",
            desc: "Training-oriented bank portal using HTML/CSS/JS with a focus on simplicity and UI design.",
          },
          {
            title: "Car Rental Web App",
            desc: "Sleek frontend prototype for a car rental system with responsive booking UI.",
          },
          {
            title: "Modern Portfolio System",
            desc: "Built animated React portfolio sites with sections like About, Services, and Works using Styled Components.",
          },
          {
            title: "Startup Business Website",
            desc: "Crafted custom-designed landing and service pages for multiple startup clients using Vite + React.",
          },
        ].map((proj, index) => (
          <ProjectCard
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
          >
            <ProjectTitle>{proj.title}</ProjectTitle>
            <ProjectDesc>{proj.desc}</ProjectDesc>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Container>
  );
};

export default About;
