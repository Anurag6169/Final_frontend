import React, {useState} from 'react';
import styled from 'styled-components';
import Header from '../Components/Header';

const GlobalStyles = styled.div`
  body {
    margin: 0;
    font-family: 'Inter';
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

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }

  body, html {
    font-family: 'Montserrat', sans-serif;
  }

  a, a:visited, a:hover, a:active {
    text-decoration: none;
    font-weight: 500;
    color: #ff4d4d;
  }

  *::-webkit-scrollbar {
    display: none;
  }

  * {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const Nav = styled.div`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #0353C9;
  padding: 1rem;
  height: 2rem;
  color: #fff;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1rem;
`;

const Hamburger = styled.div`
  > img {
    width: 1.5rem;
    height: 1.5rem;
    object-fit: contain;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  font-size: 1rem;
  color: #02BDF3;
  font-weight: 700;
`;

const BackButton = styled.div`
  > img {
    width: 0.75rem;
    height: 0.75rem;
    object-fit: contain;
  }
`;

const ControlTitle = styled.div`
  font-weight: 700;
  font-size: 1rem;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 178px;
  height: 218px;
  border: #02BDF3 solid 2px;
  border-radius: 15px;
  background: #FFF;
`;

const BlueBackground = styled.div`
  background-color: #02BDF3;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 6rem;
  width: 100%;
  border: #02BDF3 solid 2px;
  border-radius: 15px 15px 0 0;

  > img {
    width: 4rem;
    height: 5rem;
  }
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const CardDetailsTitle = styled.div`
  font-size: 1rem;
  color: #093F68;
  font-weight: 600;
`;

const ModalOverlay = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  max-width: 80%;
  text-align: left;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const AppointmentDetails = ({ isOpen, onClose, appointmentDetails }) => {
  return (
    <ModalOverlay isOpen={isOpen}>
      <ModalContainer>
        <ModalHeader>
          <div>Appointment Details</div>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <div>
          {/* Display appointment details here */}
          {appointmentDetails}
        </div>
      </ModalContainer>
    </ModalOverlay>
  );
};

const Profession = () => {

    const getProfessionals = async () => {
        try {
          const response = await fetch('http://localhost:5000/erap_backend/get_profession', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',

            },
          });
      
          if (!response.ok) {

            throw new Error('Failed to fetch professionals');
          }
      
          const professionalsData = await response.json();
      

          professionalsData.forEach(professional => {
            console.log('Professional ID:', professional.id);
            console.log('Name:', professional.name);
            console.log('Image:', professional.img);
            console.log('Description:', professional.description);
          });
        } catch (error) {
          console.error('Error during fetch professionals:', error.message);
        }
      };
      
      const getProfessionalSchedule = async (professionalId) => {
        try {
          const response = await fetch(`http://localhost:5000/${professionalId}/schedule`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              
            },
          });
      
          if (!response.ok) {
      
            throw new Error('Failed to fetch professional schedule');
          }
      
      
          const scheduleData = await response.json();
 
          scheduleData.forEach(scheduleItem => {
            console.log('Schedule Item ID:', scheduleItem.id);
            console.log('Start Time:', scheduleItem.start_time);
            console.log('End Time:', scheduleItem.end_time);
          });
        } catch (error) {
          console.error('Error during fetch professional schedule:', error.message);
        }
      };
      
  
      const professionalId = '123';
      getProfessionalSchedule(professionalId);
      
      

    const [isModalOpen, setModalOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);

  const handleCardClick = (appointmentDetails) => {
    setSelectedAppointment(appointmentDetails);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedAppointment(null);
  };

  return (
    <>
    <GlobalStyles>
      <Header />

      <Container>
        <Controls>
          <BackButton><img src="back_icon.png" alt="back button" /></BackButton>
          <ControlTitle>PROFESSION</ControlTitle>
        </Controls>
      </Container>

      <CardContainer>
        {/* Sample card */}
        <Card onClick={() => handleCardClick('Sample appointment details')}>
          <BlueBackground>
            <img src="🦆 illustration _Doctor_.png" alt="doctor illustration" />
          </BlueBackground>
          <CardDetails>
            <CardDetailsTitle>DOCTOR</CardDetailsTitle>
          </CardDetails>
        </Card>

        <Card>
          <BlueBackground><img src="🦆 illustration _Meditation_.png" alt="meditation illustration" /></BlueBackground>
          <CardDetails>
            <CardDetailsTitle>COACH</CardDetailsTitle>
          </CardDetails>
        </Card>

        <Card>
          <BlueBackground><img src="🦆 illustration _Teacher_.png" alt="teacher illustration" /></BlueBackground>
          <CardDetails>
            <CardDetailsTitle>TEACHER</CardDetailsTitle>
          </CardDetails>
        </Card>

        <Card>
          <BlueBackground><img src="🦆 illustration _Doctor_.png" alt="doctor illustration" /></BlueBackground>
          <CardDetails>
            <CardDetailsTitle>DOCTOR</CardDetailsTitle>
          </CardDetails>
        </Card>

        <Card>
          <BlueBackground><img src="🦆 illustration _Doctor_.png" alt="doctor illustration" /></BlueBackground>
          <CardDetails>
            <CardDetailsTitle>DOCTOR</CardDetailsTitle>
          </CardDetails>
        </Card>

        <Card>
          <BlueBackground><img src="🦆 illustration _Meditation_.png" alt="meditation illustration" /></BlueBackground>
          <CardDetails>
            <CardDetailsTitle>COACH</CardDetailsTitle>
          </CardDetails>
        </Card>

        <Card>
          <BlueBackground><img src="🦆 illustration _Teacher_.png" alt="teacher illustration" /></BlueBackground>
          <CardDetails>
            <CardDetailsTitle>TEACHER</CardDetailsTitle>
          </CardDetails>
        </Card>

        <Card>
          <BlueBackground><img src="../images/illustration _Doctor_.png" alt="doctor illustration" /></BlueBackground>
          <CardDetails>
            <CardDetailsTitle>DOCTOR</CardDetailsTitle>
          </CardDetails>
        </Card>
      </CardContainer>
    </GlobalStyles>

    <AppointmentDetails
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        appointmentDetails={selectedAppointment}
      />
    </>
  );
};

export default Profession;
