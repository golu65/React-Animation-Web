import React from 'react'
import { styled, Box, Typography } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Four from './Four';

const MainBox = styled(Box)`
  width: 100%;
  height: 100%;
  background: rgb(32, 28, 25);
  position: relative;
`

const BoderBox = styled(Box)`
  width: 830px;
  height: 850px;
  border: 1px solid grey;
  margin: auto;
  box-shadow: 20px 20px 50px grey;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    border-radius: 0;
  }
`

const ArijitText = styled(Typography)`
  color: white;
  font-size: 2.5rem;
  letter-spacing: 5px;
  text-align: center;
  padding-top: 9rem;
  font-family: 'Playfair Display', serif;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    padding-top: 5rem;
    font-size: 1rem;
    letter-spacing: 2px;
  }
`

const StageBox = styled(Box)`
  width: 650px;
  height: 150px;
  display: flex;
  margin-top: 4rem;
  margin-left: 5.5rem;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-left: 0;
    margin-top: 2rem;
  }
`

const PerofomaceBox = styled(Box)`
  display: flex;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    flex-direction: column;
  }
`

const ZeroBox = styled(Box)`
  width: 150px;
  height: 120px;
  margin-top: 12px;
  margin-left: 55px;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    margin-left: 0;
    margin-right: 0;
    margin-top: 6px;
    text-align: center;
  }
`

const EnquText = styled(Typography)`
  color: rgb(255, 108, 50);
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 1px;
  text-align: center;
  padding-top: 1.5rem;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    padding-top: 0.5rem;
    font-size: 1.2rem;
  }
`

const EnquTextMade = styled(Typography)`
  color: grey;
  text-align: center;
  font-size: 1rem;
  letter-spacing: 2px;
  font-family: 'Playfair Display', serif;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`

const SeeBox = styled(Box)`
  width: 750px;
  height: 60px;
  margin-top: 60px;
  margin-left: 2.5rem;
  background: #505050;
  display: flex;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0;
    margin-top: 5rem;
  }
`

const EnquTextMadeSee = styled(Typography)`
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 2px;
  padding-top: 10px;
  padding-left: 3rem;
  font-family: 'Playfair Display', serif;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    padding-left: 80px;
   
    font-size: 1rem;
  }
`

const Three = () => {
  return (
    <MainBox>
      <Box>
        <BoderBox>
          <Box>
            <ArijitText>Performance + Details</ArijitText>
          </Box>
          <Box>
            <StageBox>
              <PerofomaceBox>
                <Box>
                  <ZeroBox>
                    <EnquText>0</EnquText>
                    <EnquTextMade>Off-Stage Performers</EnquTextMade>
                  </ZeroBox>
                </Box>
                <Box>
                  <ZeroBox>
                    <EnquText>60-90 min</EnquText>
                    <EnquTextMade>Performance<br />Duration</EnquTextMade>
                  </ZeroBox>
                </Box>
                <Box>
                  <ZeroBox>
                    <EnquText>1</EnquText>
                    <EnquTextMade>Performing Member</EnquTextMade>
                  </ZeroBox>
                </Box>
              </PerofomaceBox>
            </StageBox>
            <StageBox>
              <PerofomaceBox>
                <Box>
                  <ZeroBox>
                    <EnquText>Can Travel</EnquText>
                    <EnquTextMade>Nationwide</EnquTextMade>
                  </ZeroBox>
                </Box>
                <Box>
                  <ZeroBox>
                    <EnquText>Hindi</EnquText>
                    <EnquTextMade>Performing<br />Languages</EnquTextMade>
                  </ZeroBox>
                </Box>
              </PerofomaceBox>
            </StageBox>
            <Box>
              <SeeBox>
                <EnquTextMadeSee>Customize your requirements while booking</EnquTextMadeSee>
                <EastIcon style={{ color: 'rgb(255,108,50)', fontSize: '3.5rem', paddingTop: '0px', paddingLeft: '18px' }} />
              </SeeBox>
            </Box>
          </Box>
        </BoderBox>
      </Box>
      <Four/>
    </MainBox>
  )
}

export default Three;
