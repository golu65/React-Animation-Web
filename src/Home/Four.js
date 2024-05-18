import styled from '@emotion/styled';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Box, Typography } from '@mui/material';
import Five from './Five';
import FourOne from './FourOne'

const MainBox = styled(Box)`
  width: 100%;
  height: 100%;
  background: rgb(32, 28, 25);
  position: relative;
  border-radius: 1rem;
`;

const ArijitText = styled(Typography)`
  color: white;
  font-size: 2.5rem;
  letter-spacing: 5px;
  font-weight: 600;
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  font-family: 'Playfair Display', serif;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    padding-top: 3rem;
    font-size: 1.5rem;
    letter-spacing: 3px;
  }
`;

const ImageSlider = styled('img')`
  width: 100%;
  height: auto;
`;

const CarouselWrapper = styled(Carousel)`
  .carousel-caption {
    background: rgba(0, 0, 0, 0.6);
    padding: 1rem;
  }

  h3 {
    color: white;
  }

  p {
    color: white;
  }
`;

const Four = () => {
  return (
    <MainBox>
      <Box>
        <ArijitText>Live Performances</ArijitText>
      </Box>
      <CarouselWrapper>
        <Carousel.Item>
          <ImageSlider src="Image/2.jpg" alt="hello" />
          <Carousel.Caption>
            <h3>Houserx</h3>
            <p>The specialty pharmacy experience<br />your patients deserve</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageSlider src="Image/3.jpg" alt="hello" />
          <Carousel.Caption>
            <h3 style={{ color: 'black' }}>Live at Amity University</h3>
            <p style={{ color: 'black' }}>Booked via starclinch on 18 June</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ImageSlider src="Image/4.jpg" alt="hello" />
          <Carousel.Caption>
            <h3>Finsweet</h3>
            <p>
              A restaurant that serves high <br /> quality foods of all kinds.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </CarouselWrapper>
      <FourOne/>
      <Five/>
    </MainBox>
  );
};

export default Four;
