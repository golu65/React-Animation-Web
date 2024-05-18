import React from 'react';
import { Box, Typography, styled } from '@mui/material';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PersonIcon from '@mui/icons-material/Person';
import EastIcon from '@mui/icons-material/East';
import Rotate from 'react-reveal/Rotate';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const MainBox = styled(Box)`
  width: 100%;
  height: 100%;
  background: rgb(32, 28, 25);
  position: relative;
  
`;

const SecBox = styled(Box)`
  padding-top: 10rem;
  padding-bottom: 4rem;
  
`;

const ImageBox = styled(Box)`
  margin: auto;
  width: 900px;
  height: 250px;
  border-radius: 15px;
  background: #282828;
  
  @media (max-width: 960px) {
    width: 90%;
    max-width: 600px;
    height: 450px;
  }
`;

const SameBox = styled(Box)`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    display: block;
  }
`;

const ImageOne = styled('img')({
  width: '350px',
  height: '250px',
  borderRadius: '15px',

  '@media (max-width: 600px)': {
    width: '100%',
    height: 'auto',
  },
});

const TextMainBox = styled(Box)`
  padding-top: 2rem;
  padding-left: 3rem;

  @media (max-width: 600px) {
    padding-left: 0;
    padding-top: 1rem;
    text-align: center;
  }
`;

const ArijitText = styled(Typography)`
  color: white;
  font-weight: 600;
  font-size: 3rem;
  letter-spacing: 9px;
  font-family: 'Playfair Display', serif;

  @media (max-width: 600px) {
    font-size: 1.5rem;
    letter-spacing: 3px;
  }

  @media (min-width: 601px) and (max-width: 960px) {
    font-size: 2rem;
    letter-spacing: 6px;
  }
`;

const SingerBox = styled(Box)`
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PersinBoxBox = styled(Box)`
  display: flex;
  margin-top: 0.5rem;
  margin-left: -1rem;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const PersinBoxBoxSec = styled(Box)`
  display: flex;
  margin-top: 0.5rem;
  margin-left: 1rem;

  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const SingerText = styled(Typography)`
  padding-left: 8px;
  color: grey;
  font-weight: 600;
  font-size: 1.2rem;
  letter-spacing: 4px;
  font-family: 'Playfair Display', serif;

  @media (max-width: 600px) {
    font-size: 1rem;
    letter-spacing: 3px;
    padding-left: 10px;
  }
`;

const SeeBox = styled(Box)`
  width: 400px;
  height: 60px;
  margin-top: 20px;
  border: 1px solid grey;
  border-radius: 35px;
  display: flex;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const EnquTextMadeSee = styled(Typography)`
  color: white;
  font-weight: 500;
  font-size: 1.5rem;
  letter-spacing: 2px;
  padding-top: 8px;
  padding-left: 3rem;
  font-family: 'Playfair Display', serif;
  @media (max-width: 600px) {
    padding-left: 80px;
    font-size: 1.2rem;
  }
`;

const ImageBoxSec = styled(Box)`
  margin: auto;
  width: 900px;
  height: 650px;
  border-radius: 15px;
  background: #282828;

  @media (max-width: 960px) {
    width: 90%;
    max-width: 600px;
  }
`;

const SecBoxOne = styled(Box)`
  padding-bottom: 5rem;

`;

const ArijitTextOne = styled(Typography)`
  color: white;
  font-size: 2.5rem;
  letter-spacing: 1px;
  margin-left: 2rem;
  padding-top: 2rem;
  font-family: 'Playfair Display', serif;

  @media (max-width: 600px) {
    margin-left: 2rem;
    padding-top: 3rem;
    font-size: 1.5rem;
    letter-spacing: 3px;
  }
`;

const ArijitTextGet = styled(Typography)`
  color: white;
  font-size: 1.5rem;
  letter-spacing: 1px;
  margin-left: 2rem;
  font-family: 'Playfair Display', serif;

  @media (max-width: 600px) {
    margin-left: 2rem;
    padding-top: 3rem;
    font-size: 1rem;
    letter-spacing: 3px;
  }
`;

const SeeBoxOne = styled(Box)`
  width: 400px;
  height: 60px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: 16rem;
  border: 1px solid grey;
  border-radius: 35px;
  display: flex;

  @media (max-width: 600px) {
    width: 100%;
    margin-left: 0;
  }
`;

const BoderLine = styled(Box)`
  width: 100%;
  border: 1px solid grey;
`;

const Six = () => {
  return (
    <MainBox>

      <SecBox>
        <ImageBox>
          <SameBox>
           
              <Rotate top left>
                <Box>
                  <ImageOne src="Image/4.jpg" alt="New" />
                </Box>
              </Rotate>
          
              <Rotate top right>
                <TextMainBox>
                  <Box>
                    <ArijitText>Arijit Singh</ArijitText>
                  </Box>
                  <SingerBox>
                    <PersinBoxBox>
                      <PersonIcon style={{ color: 'grey', fontSize: '1.7rem', paddingTop: '4px' }} />
                      <SingerText>Singer</SingerText>
                    </PersinBoxBox>
                    <PersinBoxBoxSec>
                      <AddLocationIcon style={{ color: 'grey', fontSize: '1.7rem', paddingTop: '6px' }} />
                      <SingerText>Mumbai, Maharashtra</SingerText>
                    </PersinBoxBoxSec>
                  </SingerBox>
                  <Box>
                    <SeeBox>
                      <EnquTextMadeSee>Fill Details & Book</EnquTextMadeSee>
                      <EastIcon style={{ color: 'rgb(255,108,50)', fontSize: '3.5rem', paddingTop: '0px', paddingLeft: '18px' }} />
                    </SeeBox>
                  </Box>
                </TextMainBox>
              </Rotate>
       
          </SameBox>
        </ImageBox>
      </SecBox>

      <SecBoxOne>
        <ImageBoxSec>
          <Box>
            <Box>
              <ArijitTextOne>Best Special Pricing</ArijitTextOne>
              <ArijitTextGet>Get quotes on WhatsApp</ArijitTextGet>
            </Box>
            <Form>
              <Row className="mb-3 mt-4">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label style={{ color: 'white' }}>Your First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label style={{ color: 'white' }}>Your Last Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" />
                </Form.Group>
              </Row>
              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label style={{ color: 'white' }}>Your E-mail</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label style={{ color: 'white' }}>Your Phone Number</Form.Label>
                <Form.Control type="number" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label style={{ color: 'white' }}>Enter your Message</Form.Label>
                <Form.Control type="message" placeholder="Enter Your Message" />
              </Form.Group>
            </Form>
          </Box>
          <Box>
            <SeeBoxOne>
              <EnquTextMadeSee>Book with best price</EnquTextMadeSee>
              <EastIcon style={{ color: 'rgb(255, 108, 50)', fontSize: '3.5rem', paddingTop: '0px', paddingLeft: '18px' }} />
            </SeeBoxOne>
          </Box>
        </ImageBoxSec>
      </SecBoxOne>
      <BoderLine></BoderLine>
    </MainBox>
  );
};

export default Six;
