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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${IMAGES.contactbg}); /* Replace with your image path */
    background-size: cover;
    background-position: center;
    filter: blur(10px);
    z-index: 0;
    opacity: 0.6; /* adjust for darkness/visibility */
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5); /* Optional: dark overlay for better contrast */
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
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 700px;
  text-align: center;
  margin-bottom: 50px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1100px;
`;

const Card = styled(motion.div)`
  background: #1a1a1a;
  padding: 30px;
  cursor:pointer;
  border-radius: 18px;
  box-shadow: 0 0 15px rgba(255, 138, 0, 0.25);
  transition: 0.3s ease;
  text-align: center;
  border-top: 3px solid #ff8a00;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 0 25px rgba(229, 46, 113, 0.5);
    border-top: 3px solid #e52e71;
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #ff8a00;
`;

const ServiceName = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 10px;
  color: #ff8a00;
`;

const Description = styled.p`
  color: #bbb;
  font-size: 1rem;
  line-height: 1.5;
`;

const Services = () => {
  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </Title>
      <Subtitle
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
>
  At Shield Code, we deliver cutting-edge digital solutions tailored to your business.
</Subtitle>

<Subtitle
  as={motion.p}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
>
  Whether you're a startup or an enterprise, our services are designed to empower your brand
  with sleek, scalable, and secure digital systems. From custom web and mobile applications
  to user-centric designs and full-scale deployment, we offer a full spectrum of tech services.
</Subtitle>

<Subtitle
  as={motion.p}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.6, duration: 0.8 }}
  style={{ marginBottom: "40px" }}
>
  We believe that great products start with great conversations. Let’s collaborate to
  turn your vision into digital reality.
</Subtitle>

      <ServicesGrid>
  <Card
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5 }}
  >
    <Icon>💻</Icon>
    <ServiceName>Web Development</ServiceName>
    <Description>
      Fully responsive, fast, and modern websites using React, Vite, and scalable technologies.
    </Description>
  </Card>

  <Card
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
  >
    <Icon>🎨</Icon>
    <ServiceName>UI/UX Design</ServiceName>
    <Description>
      Beautiful, intuitive interfaces that create unforgettable user experiences and boost engagement.
    </Description>
  </Card>

  <Card
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.7 }}
  >
    <Icon>📱</Icon>
    <ServiceName>Mobile App Development</ServiceName>
    <Description>
      Cross-platform mobile apps with native performance for both Android and iOS.
    </Description>
  </Card>

  <Card
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 }}
  >
    <Icon>🧠</Icon>
    <ServiceName>Software Consulting</ServiceName>
    <Description>
      Expert guidance to shape your product vision, tech stack, and growth roadmap.
    </Description>
  </Card>

  <Card
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.9 }}
  >
    <Icon>🛒</Icon>
    <ServiceName>E-Commerce Solutions</ServiceName>
    <Description>
      Robust online store setups with cart systems, payment integration, and admin panels.
    </Description>
  </Card>

  <Card
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1.0 }}
  >
    <Icon>🔐</Icon>
    <ServiceName>Security & Hosting</ServiceName>
    <Description>
      Secure cloud hosting, backups, and performance monitoring with SSL and firewall.
    </Description>
  </Card>
</ServicesGrid>

    </Container>
  );
};

export default Services;
