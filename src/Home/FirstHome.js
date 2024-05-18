import { Box, Typography, styled, Grid } from '@mui/material';
import React from 'react';
import Fade from 'react-reveal/Fade';

const MainBox = styled(Grid)`
  height: 100vh;
  background: rgb(32, 28, 25);
`;

const SecBox = styled(Grid)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainSection = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const ImageBox = styled(Box)`
  width: 50%;
  display: flex;
  padding-top: 5rem;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    width: 100%;
  }
`;

const ImageLine = styled('img')({
  width:'100%',
  height: '100%'
})

const ArijitBox = styled(Box)`
  width: 300px;
  height: 250px;
  // border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 960px) {
    margin-top: 20px;
    width: 300px;
    height: 50px;    
  }
`;

const ArijitText = styled(Typography)`
  color: white;
  font-size: 7rem;
  letter-spacing: 2px;
  font-family: 'Playfair Display', serif;

  @media (max-width: 960px) {
    font-size: 2rem;
  }
`;

const BoderLine = styled(Box)`
  width: 100%;
  border: 1px solid grey;
`;

const FirstHome = () => {
  return (
    <MainBox container>
      <SecBox item xs={12}>
        <MainSection>
          <ArijitBox>
            <ArijitText>Arijit</ArijitText>
          </ArijitBox>
          <ImageBox>
            <Fade bottom>
              <ImageLine src="Image/1.png" alt="Image" />
            </Fade>
          </ImageBox>
          <ArijitBox>
            <ArijitText>Singh</ArijitText>
          </ArijitBox>
        </MainSection>
      </SecBox>
      <BoderLine />
    </MainBox>
  );
};

export default FirstHome;
