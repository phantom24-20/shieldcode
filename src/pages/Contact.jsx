import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "emailjs-com";
import IMAGES from "../assets/Image";

const Container = styled.div`
  padding: 100px 40px;
  background: 
    url(${(props) => props.bg}) center/cover no-repeat;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 70px 20px;
  }

  @media (max-width: 480px) {
    padding: 50px 15px;
  }
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #ccc;
  max-width: 700px;
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    max-width: 90%;
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Form = styled(motion.form)`
  background: #1a1a1a;
  padding: 40px;
  border-radius: 20px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 0 20px rgba(255, 138, 0, 0.3);
  display: flex;
  flex-direction: column;
  gap: 20px;

  &:hover {
    box-shadow: 0 0 30px rgba(229, 46, 113, 0.4);
    transform: translateY(-3px);
  }

  @media (max-width: 768px) {
    padding: 30px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-weight: bold;
  color: #ff8a00;

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const Input = styled.input`
  padding: 12px 16px;
  border-radius: 10px;
  border: none;
  background-color: #2c2c2c;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: 2px solid #e52e71;
  }

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 0.95rem;
  }
`;

const Textarea = styled.textarea`
  padding: 12px 16px;
  border-radius: 10px;
  border: none;
  background-color: #2c2c2c;
  color: white;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;

  &:focus {
    outline: 2px solid #e52e71;
  }

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 0.95rem;
  }
`;

const Button = styled.button`
  padding: 14px;
  background: linear-gradient(90deg, #ff8a00, #e52e71);
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.9;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 12px;
  }
`;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0dyk5vn",
        "template_7yanvdm",
        form.current,
        "8bXzpLIV35iKbJZGL"
      )
      .then(
        (result) => {
          alert("Message sent successfully! 🎉");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message 😢", error.text);
        }
      );
  };

  return (
    <Container bg={IMAGES.contactbg}>
      <Title
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </Title>
      <Subtitle
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        We'd love to hear from you. Drop us a message and we'll get back to you!
      </Subtitle>

      <Form
        ref={form}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Field>
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" name="name" required />
        </Field>

        <Field>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" required />
        </Field>

        <Field>
          <Label htmlFor="phone">Phone Number</Label>
          <Input type="tel" id="phone" name="phone" />
        </Field>

        <Field>
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" name="message" required />
        </Field>

        <Button type="submit">Send Message</Button>
      </Form>
    </Container>
  );
};

export default Contact;
