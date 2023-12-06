import React from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

const AppointmentContainer = styled.div`
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    background-color: #FFFFFF;
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #0353C9;
  padding: 1rem;
  height: 3rem;
  color: #fff;
  
  @media (max-width: 430px) {
    padding: 0.5rem;
    height: 2rem;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  
  @media (max-width: 430px) {
    font-size: 1rem;
  }
`;

const Hamburger = styled.div`
  > img {
    width: 2rem;
    height: 2rem;
    object-fit: contain;
    
    @media (max-width: 430px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1.5rem;
  color: #02BDF3;
  font-weight: 700;
  
  @media (max-width: 430px) {
    padding: 1rem;
    font-size: 1rem;
  }
`;

const BackButton = styled.div`
  > img {
    width: 1rem;
    height: 1rem;
    object-fit: contain;
    
    @media (max-width: 430px) {
      width: 0.75rem;
      height: 0.75rem;
    }
  }
`;

const ControlTitle = styled.div`
  font-weight: 700;
  font-size: large;
  
  @media (max-width: 430px) {
    font-size: 1rem;
  }
`;

const InstructorContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  
  @media (max-width: 430px) {
    padding: 1rem;
  }
`;

const InstructorImg = styled.div`
  > img {
    width: 10rem;
    height: 10rem;
    object-fit: contain;
    
    @media (max-width: 430px) {
      width: 7rem;
      height: 7rem;
    }
  }
`;

const InstructorDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const InstructorProfession = styled.div`
  color: #093F68;
  font-weight: 600;
  font-size: 2rem;
  margin-bottom: 1rem;
  
  @media (max-width: 430px) {
    font-size: 1.5rem;
  }
`;

const InstructorDetailsContent = styled.div`
  font-size: 1.25rem;
  color: #02BDF3;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin-top: 0.5rem;
  
  @media (max-width: 430px) {
    font-size: 1rem;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem; /* Added padding */
  row-gap: 1.5rem;
  
  @media (max-width: 430px) {
    padding: 1rem;
  }
`;

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  border: #02BDF3 solid 0.2rem;
  border-radius: 1rem;
  padding: 1rem;
  
  @media (max-width: 430px) {
    height: 4rem;
    padding: 0.75rem;
  }
`;

const ServiceImage = styled.div`
  > img {
    width: 2rem;
    height: 2rem;
    
    @media (max-width: 430px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  font-size: 1.25rem;
  color: #02BDF3;
  
  @media (max-width: 430px) {
    font-size: 1rem;
  }
`;

const BoldText = styled.div`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const DateText = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 0.25rem;
  
  @media (max-width: 430px) {
    margin-top: 0.125rem;
  }
`;

const Appointment = () => {
  return (
    <AppointmentContainer>
      <Header />

      <Container>
        <Controls>
          <BackButton><img src="../images/back_icon.png" alt="back button" /></BackButton>
          <ControlTitle>SERVICES</ControlTitle>
        </Controls>
      </Container>

      <InstructorContainer>
        <InstructorImg><img src="../images/illustration _Doctor_.png" alt="instructor image" /></InstructorImg>
        <InstructorDetails>
          <InstructorProfession>DOCTOR</InstructorProfession>
          <InstructorDetailsContent>
            <div>Name: </div>
            <div>John Doe</div>
          </InstructorDetailsContent>
          <InstructorDetailsContent>
            <div>Email: </div>
            <div>JohnDoe@gmail.com</div>
          </InstructorDetailsContent>
        </InstructorDetails>
      </InstructorContainer>

      <CardContainer>
        <Card>
          <CardDetails>
            <BoldText>C++ Programming</BoldText>
            <DateText><BoldText>Date: &nbsp; &nbsp; </BoldText>20/09/2023</DateText>
          </CardDetails>
          <ServiceImage><img src="../images/emoji _books_.png" alt="service image" /></ServiceImage>
        </Card>

        <Card>
          <CardDetails>
            <BoldText>C++ Programming</BoldText>
            <DateText><BoldText>Date: &nbsp; &nbsp; </BoldText>20/09/2023</DateText>
          </CardDetails>
          <ServiceImage><img src="../images/emoji _books_.png" alt="service image" /></ServiceImage>
        </Card>
      </CardContainer>
    </AppointmentContainer>
  );
}

export default Appointment;
