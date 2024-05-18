import { Box, Typography, styled } from '@mui/material';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PersonIcon from '@mui/icons-material/Person';
import React from 'react';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import EastIcon from '@mui/icons-material/East';
import Three from './Three';
import Rotate from 'react-reveal/Rotate';


const MainBox = styled(Box)`
  width: 100%;
  height: 100%;
  background: rgb(32, 28, 25);
  position: relative;
`

const TextBox = styled(Box)`
  display: flex;
  padding-top: 8rem;
  margin-left: 9.5rem;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    flex-direction: column;
    padding-top: 2rem;
    margin-left: 0;
  }

  /* Styles for tablets */
  @media (min-width: 601px) and (max-width: 959px) {
    padding-top: 3rem;
  }
`

const ImageDegine = styled('img')`
  width: 80%;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    width: 100%;
  }
`

const TextMainBox = styled(Box)`
  display: flex;
  padding-top: 8rem;
  padding-left: -2rem;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    padding-top: 3rem;
  }
`

const ArijitText = styled(Typography)`
  color: white;
  font-weight: 600;
  font-size: 3.5rem;
  letter-spacing: 9px;
  font-family: 'Playfair Display', serif;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    text-align: center;
    font-size: 1rem;
    letter-spacing: 2px;
  }

  /* Styles for tablets */
  @media (min-width: 601px) and (max-width: 959px) {
    font-size: 3rem;
    letter-spacing: 8px;
   
  }
`

const SingerBox = styled(Box)`
  display: flex;
  @media (max-width: 600px) {
    display: block;
  }
  
`

const PersinBoxBox = styled(Box)`
  display: flex;
  margin-top: 2.5rem;
  margin-left: 1rem;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    margin-left: 0;
   
   
  }
`

const SingerText = styled(Typography)`
  padding-left: 8px;
  color: grey;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 4px;
  font-family: 'Playfair Display', serif;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    font-size: 1rem;
    letter-spacing: 3px;
    padding-left: 10px;
  }
`

const TableCreate = styled(Box)`
  display: flex;
  margin-top: 1rem;
  @media (max-width: 600px) {
    display: block;
  }
`

const EnquBox = styled(Box)`
  width: 400px;
  border: 1px solid grey;
  height: 55px;
  display: flex;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    width: 100%;
    margin-top: 12px;
  }
`

const EnquText = styled(Typography)`
  color: rgb(255, 108, 50);
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 2px;
  padding-top: 10px;
  padding-left: 7px;
  font-family: 'Playfair Display', serif;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    padding-left: 10px;
    font-size: 1.2rem;
  }
`

const EnquTextMade = styled(Typography)`
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  letter-spacing: 2px;
  padding-top: 10px;
  padding-left: 7px;
  font-family: 'Playfair Display', serif;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    padding-left: 10px;
    font-size: 1rem;
  }
`

const RenwedBox = styled(Box)`
  width: 800px;
  height: 80px;
  margin-top: 20px;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    width: 100%;
  }
`

const SeeBox = styled(Box)`
  width: 400px;
  height: 60px;
  margin-top: 20px;
  border: 1px solid grey;
  border-radius: 35px;
  display: flex;

  /* Styles for phones or smaller devices */
  @media (max-width: 600px) {
    width: 100%;
  }
`

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
    padding-left: 80px;
    font-size: 1.5rem;
  }
`

const Two = () => {
  return (
    <MainBox>

      <TextBox>
  
          <Rotate top left>
            <Box>
              <ImageDegine src="Image/1.png" alt="image" />
            </Box>
          </Rotate>
    

        
          <Rotate bottom right>
            <Box>
              <TextMainBox>
                <Box>
                  <ArijitText>Arijit Singh</ArijitText>
                </Box>
                <SingerBox>
                  <PersinBoxBox>
                    <PersonIcon style={{ color: 'grey', fontSize: '1.2rem', paddingTop: '6px' }} />
                    <SingerText>Singer</SingerText>
                  </PersinBoxBox>
                  <PersinBoxBox>
                    <AddLocationIcon style={{ color: 'grey', fontSize: '1.2rem', paddingTop: '6px' }} />
                    <SingerText>Mumbai, Maharashtra</SingerText>
                  </PersinBoxBox>
                </SingerBox>
              </TextMainBox>
              <Box>
                <TableCreate>
                  <EnquBox>
                    <InvertColorsIcon style={{ color: 'rgb(255,108,50)', fontSize: '2rem', paddingTop: '10px', paddingLeft: '18px' }} />
                    <EnquText>Enquiries</EnquText>
                    <EnquTextMade>made in last 24 Hours</EnquTextMade>
                  </EnquBox>
                  <EnquBox>
                    <EnquText>Recently booked</EnquText>
                    <EnquTextMade>on 13 June</EnquTextMade>
                  </EnquBox>
                </TableCreate>
              </Box>
              <Box>
                <RenwedBox>
                  <EnquTextMade>
                    Renowned for his super hits, Arijit Singh is now the talk of the town because of his golden voice and stellar performances!
                  </EnquTextMade>
                </RenwedBox>
              </Box>
              <Box>
                <SeeBox>
                  <EnquTextMadeSee>See Pricing &</EnquTextMadeSee>
                  <EastIcon style={{ color: 'rgb(255,108,50)', fontSize: '3.5rem', paddingTop: '0px', paddingLeft: '18px' }} />
                </SeeBox>
              </Box>
            </Box>
          </Rotate>
   
      </TextBox>
      <Three />
    </MainBox >
  )
}

export default Two;
