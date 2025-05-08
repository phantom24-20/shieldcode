import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div`
  padding: 80px 20px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(10, 10, 10, 0.9)),
              url("/background-image.jpg") center/cover no-repeat;
  color: white;
  min-height: 100vh;
`;

const Title = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 30px;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const Section = styled.div`
  margin-bottom: 30px;
`;

const Heading = styled.h3`
  font-size: 1.4rem;
  color: #ff8a00;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #ccc;
  line-height: 1.6;
`;

const Privacy = () => {
  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Privacy Policy
      </Title>

      <Section>
        <Heading>1. Information We Collect</Heading>
        <Text>
          We may collect personal information (name, email, etc.) and technical data (device info,
          IP address, browser type) through forms and analytics.
        </Text>
      </Section>

      <Section>
        <Heading>2. How We Use Your Information</Heading>
        <Text>
          We use your information to respond to inquiries, improve services, and send updates or
          marketing materials.
        </Text>
      </Section>

      <Section>
        <Heading>3. Data Sharing</Heading>
        <Text>
          We do not sell your data. We may share it with service providers or authorities as required
          by law.
        </Text>
      </Section>

      <Section>
        <Heading>4. Data Security</Heading>
        <Text>
          Your data is protected through encryption and secure protocols, but we cannot guarantee
          100% safety.
        </Text>
      </Section>

      <Section>
        <Heading>5. Your Rights</Heading>
        <Text>
          You may request access, correction, or deletion of your personal data by contacting us at
          info@shieldcode.in.
        </Text>
      </Section>

      <Section>
        <Heading>6. Third-Party Links</Heading>
        <Text>
          Our website may link to other sites. We are not responsible for their privacy practices.
        </Text>
      </Section>

      <Section>
        <Heading>7. Changes to This Policy</Heading>
        <Text>
          This policy may be updated. Changes will be posted on this page with an updated effective date.
        </Text>
      </Section>

      <Section>
        <Heading>8. Contact Us</Heading>
        <Text>
          📧 info@shieldcode.in <br />
          Bangalore
        </Text>
      </Section>
    </Container>
  );
};

export default Privacy;
