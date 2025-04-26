import { motion } from "framer-motion";
import styled from "styled-components";
import IMAGES from "../assets/Image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Container = styled.div`
  padding: 100px 40px;
  text-align: center;
  // background: linear-gradient(to bottom, #2c003e, #0d0d0d);
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #bbb;
  max-width: 750px;
  line-height: 1.8;
  text-align: center;
  margin-bottom: 50px;
`;
const Title = styled(motion.h1)`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #ffb84d, #ff4c8b); /* mid-tone darker gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6); /* stronger, deeper shadow */
`;



const Subtitle = styled.p`
  font-size: 1.3rem;
  color: #ccc;
  max-width: 600px;
  margin-bottom: 40px;
`;

const CarouselWrapper = styled.div`
  width: 90%;
  max-width: 900px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
`;

const imageArray = Object.values(IMAGES);
const selectedImages = [IMAGES.img1, IMAGES.img2, IMAGES.img3, IMAGES.img4];
const Home = () => (
  <Container>
    <Title
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      Welcome to Shield Code
    </Title>

    <Subtitle>
      Your digital partner for stunning web development, creative design, and next-level digital solutions.
    </Subtitle>

    <Description>
      At Shield Code Technologies, we specialize in creating fast, scalable, and visually striking websites and web applications that push the limits of innovation. 
      Whether you're a startup or an established enterprise, we blend technology and creativity to craft tailor-made digital experiences. 
      Our services range from responsive front-end development to robust backend solutions, UI/UX design, SEO optimization, and real-time analytics. 
      With a focus on quality, performance, and client satisfaction, we are dedicated to helping your business thrive in the digital era.
    </Description>

    <CarouselWrapper>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
      >
        {selectedImages.map((src, index) => (
          <SwiperSlide key={index}>
            <StyledImage src={src} alt={`Slide ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselWrapper>
  </Container>
);

export default Home;
