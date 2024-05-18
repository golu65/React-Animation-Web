import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

const MainBox = styled(Box)`
  width: 100%;
  height: 100%;
  background: rgb(32, 28, 25);
  position: relative;

`;

const FootermainBox = styled(Box)`
  display: flex;
  flex-direction: column;

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const FooterSecondBox = styled(Box)`
  width: 90%;
  height: 350px;
  // border: 1px solid grey;
  margin: 1rem;

  @media (min-width: 600px) {
    width: 40%;
   
  }
`;

const EnquTextMade = styled(Typography)`
  color: #909090;
  font-weight: 600;
  font-size: 1.2rem;
  margin-left: 2rem;
  padding-top: 0rem;
  padding-bottom: 1.5rem;
  font-family: 'Playfair Display', serif;

  @media (max-width: 600px) {
 
    font-size: 1rem;
    text-align: center;
  }
`;

const EnquTextMadeSec = styled(Typography)`
  color: #606060;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-left: 2rem;
  padding-top: 0rem;
  padding-bottom: 2rem;
  font-family: 'Playfair Display', serif;

  @media (max-width: 600px) {
    margin-left: 0rem;
    font-size: 0.9rem;
    text-align: center;
  }
`;

const EmailBox = styled(Box)`
  width: 350px;
  height: 59px;
  margin-left: 2rem;
  border: 1px solid grey;
  border-radius: 15px;
  display: flex;

  @media (max-width: 600px) {
    margin-left: 1rem;
    width: 90%;
  }
`;

const EnquTextMadeFor = styled(Typography)`
  color: #606060;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 1px;
  margin-left: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 2rem;
  font-family: 'Playfair Display', serif;

  @media (max-width: 600px) {
    margin-left: 2rem;
    font-size: 0.9rem;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <MainBox>
      <Box>
        <FootermainBox>
          <FooterSecondBox>
            <Box>
              <EnquTextMade>SELEBZ</EnquTextMade>
            </Box>
            <Box>
              <EnquTextMadeSec>
                Selebz, is the first-ever de-influencing platform, making reels that boosts your business.
              </EnquTextMadeSec>
            </Box>
            <Box>
              <EnquTextMadeSec>Sign Up and we will get in touch as soon as possible</EnquTextMadeSec>
            </Box>

            <Box>
              <EmailBox>
                <input
                  type="text"
                  style={{ background: 'rgb(32, 28, 25)', color: 'white', width: '100%' }}
                  placeholder="Email Address"
                />
                <EastIcon
                  style={{ color: 'rgb(255, 108, 50)', fontSize: '3.5rem', paddingTop: '0px', paddingLeft: '18px', cursor: 'pointer' }}
                />
              </EmailBox>
            </Box>
            <Box>
              <EnquTextMadeFor>@ 2024 by VINSM Globe Private Limited</EnquTextMadeFor>
            </Box>
          </FooterSecondBox>

          <FooterSecondBox>
            <Box>
              <EnquTextMade>BREWING UP CREATIVITY AT OUR STUDIO</EnquTextMade>
            </Box>
            <Box>
              <EnquTextMadeSec>
                E 48/4, Pocket - D, Okhla Phase - 2
                <br />
                New Delhi - 110020
                <br />
                +91-7042884270
                <br />
                hola@selebz.com
              </EnquTextMadeSec>
            </Box>
          </FooterSecondBox>
        </FootermainBox>
      </Box>
    </MainBox>
  );
};

export default Footer;
