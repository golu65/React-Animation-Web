import styled from '@emotion/styled';
import React from 'react';
import { Box, Typography } from '@mui/material';
import MarkChatUnreadIcon from '@mui/icons-material/MarkChatUnread';
import StarIcon from '@mui/icons-material/Star';
import EastIcon from '@mui/icons-material/East';

const MainBox = styled(Box)`
  width: 100%;
  height: 100%;
  background: rgb(32, 28, 25);
  position: relative;
`;

const ArijitText = styled(Typography)`
  color: white;
  font-size: 2.5rem;
  letter-spacing: 5px;
  margin-left: 8rem;
  padding-top: 5rem;
  padding-bottom: 5rem;
  font-family: 'Playfair Display', serif;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    margin-left: 2rem;
    padding-top: 3rem;
    font-size: 1.5rem;
    letter-spacing: 3px;
  }
`;

const ArijitTextSec = styled(Typography)`
  color: white;
  font-size: 2.5rem;
  letter-spacing: 2px;
  margin-left: 4rem;
  padding-top: 1rem;

  font-family: 'Playfair Display', serif;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    margin-left: 1rem;
    padding-top: 3rem;
    font-size: 1.5rem;
    text-align: center;
    letter-spacing: 3px;
  }
`;

const SamitBox = styled(Box)`
  display: flex;
 

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    margin-left: 0.5rem;
    display: block;
    
  }
`;

const DubeyBox = styled(Box)`
  width: 750px;
  height: 220px;
//   border: 1px solid white;
  background: #202020;
  margin-left: 8rem;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    width: 90%;
    margin-left: 0.5rem;
    margin-top: 2rem;
  }
`;

const DubeyBoxSec = styled(Box)`
  width: 650px;
  height: 350px;
//   border: 1px solid white;
  background: #202020;
  margin-left: 1rem;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    width: 90%;
    margin-left: 0.5rem;
    margin-top: 2rem;
  }
`;

const IconBoc = styled(Box)`
  margin-left: 4rem;
  padding-top: 1rem;
  padding-bottom: 0.5rem;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    margin-left: 1rem;
  }
`;

const EnquTextMade = styled(Typography)`
  color: #909090;
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 1px;
  padding-left: 4rem;
  font-family: 'Playfair Display', serif;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    padding-left: 0rem;
    text-align: center;
    font-size: 1rem;
  }
`;

const EnquText = styled(Typography)`
  color: white;
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 1px;
  padding-left: 4rem;
  padding-top: 0.5rem;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    padding-top: 0.5rem;
    font-size: 12px;
    text-align: center;
    padding-left: 0rem;
  }
`;

const LiveBox = styled(Box)`
  width: 350px;
  height: 60px;
//   border: 1px solid white;
  margin-left: 4rem;
  margin-top: 1rem;
  display: flex;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    width: 90%;
    margin-left: 0rem;
    margin-top: 1.5rem;
    text-align: center;
  }
`;

const EnquTextSec = styled(Typography)`
  color: rgb(255, 108, 50);
  font-weight: 600;
  font-size: 1.3rem;
  letter-spacing: 1px;
  padding-left: 0.5rem;
  padding-top: 0.8rem;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    padding-top: 0.5rem;
    font-size: 1.2rem;
  }
`;

const StartBox = styled(Box)`
  margin-left: 0.5rem;
  padding-top: 0.8rem;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    margin-left: 0.3rem;
  }
`;

const EnquTextMadeSec = styled(Typography)`
  color: #909090;
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 1px;

  padding-left: 0.5rem;
  padding-top: 0.8rem;
  font-family: 'Playfair Display', serif;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    padding-left: 2rem;
    font-size: 1rem;
  }
`;

const SeeBox = styled(Box)`
  width: 450px;
  height: 60px;
  margin-top: 20px;
  margin-left: 40rem;
  border: 1px solid grey;
  border-radius: 35px;
  display: flex;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    width: 90%;
    margin-left: 0.5rem;
    margin-top: 1.5rem;
  }
`;

const EnquTextMadeSee = styled(Typography)`
  color: white;
  font-weight: 500;
  font-size: 2rem;
  letter-spacing: 2px;
  padding-top: 4px;
  padding-left: 3rem;
  font-family: 'Playfair Display', serif;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    padding-left: 1rem;
    font-size: 1.5rem;
  }
`;

const EnquTextMadeThi = styled(Typography)`
  color: #909090;
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 1px;
  text-align: center;
  padding-left: 0.5rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  font-family: 'Playfair Display', serif;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    padding-left: 2rem;
    font-size: 1rem;
  }
`;

const BoderLine = styled(Box)`
  width: 100%;
  border: 1px solid grey;
`


const Five = () => {
  return (
    <MainBox>
      <Box>
        <Box>
          <ArijitText>Featured Ratings & Reviews</ArijitText>
        </Box>
        <SamitBox>
          <DubeyBox>
            <IconBoc>
              <MarkChatUnreadIcon style={{ color: '#383838', fontSize: '3rem' }} />
            </IconBoc>
            <EnquTextMade>Shamita Dubey Booked Artist on 24 Apr 2023</EnquTextMade>
            <EnquText>
              "Thankful to starclicnh for seamless booking and <br /> the best quotations available. Artist lit up our
              <br /> evening with a soulful performance"
            </EnquText>
          </DubeyBox>

          <DubeyBoxSec>
            <Box>
              <ArijitTextSec>100% Value for Money</ArijitTextSec>
              <EnquTextMade>Based on 93 Reviews</EnquTextMade>
            </Box>

            <Box>
              <LiveBox>
                <EnquTextSec>4.5</EnquTextSec>
                <StartBox>
                  <StarIcon style={{ color: 'rgb(255, 108, 50)' }} />
                </StartBox>
                <EnquTextMadeSec>Live Performance</EnquTextMadeSec>
              </LiveBox>
            </Box>
            <Box>
              <LiveBox>
                <EnquTextSec>4.5</EnquTextSec>
                <StartBox>
                  <StarIcon style={{ color: 'rgb(255, 108, 50)' }} />
                </StartBox>
                <EnquTextMadeSec>Crowd Interaction</EnquTextMadeSec>
              </LiveBox>
            </Box>
            <Box>
              <LiveBox>
                <EnquTextSec>5.0</EnquTextSec>
                <StartBox>
                  <StarIcon style={{ color: 'rgb(255, 108, 50)' }} />
                </StartBox>
                <EnquTextMadeSec>Value for money</EnquTextMadeSec>
              </LiveBox>
            </Box>
          </DubeyBoxSec>
        </SamitBox>
        <Box>
          <SeeBox>
            <EnquTextMadeSee>See Pricing & Book</EnquTextMadeSee>
            <EastIcon style={{ color: 'rgb(255, 108, 50)', fontSize: '3.5rem', paddingTop: '0px', paddingLeft: '18px' }} />
          </SeeBox>
        </Box>
        <Box>
          <EnquTextMadeThi>Get quotes within 5 mins!</EnquTextMadeThi>
        </Box>
      </Box>
      <BoderLine>

      </BoderLine>
    </MainBox>
  );
};

export default Five;
