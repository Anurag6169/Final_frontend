import styled from "styled-components";

const AddServiceChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #0353c9;
  width: 428px;
  height: 72px;
`;
const AddServiceItem = styled.div`
  position: absolute;
  top: 19px;
  left: 356px;
  border-top: 2px solid #fff;
  box-sizing: border-box;
  width: 46px;
  height: 2px;
`;
const AddServiceInner = styled.div`
  position: absolute;
  top: 45px;
  left: 378px;
  border-top: 2px solid #fff;
  box-sizing: border-box;
  width: 24px;
  height: 2px;
`;
const LineDiv = styled.div`
  position: absolute;
  top: 32px;
  left: 366px;
  border-top: 2px solid #fff;
  box-sizing: border-box;
  width: 36px;
  height: 2px;
`;
const Rap = styled.b`
  position: absolute;
  top: 21px;
  left: 20px;
  font-size: 25px;
  color: #fff;
`;
const Services = styled.b`
  position: absolute;
  top: 2px;
  left: 273px;
`;
const IconChevronCircleLeft = styled.img`
  position: absolute;
  height: 100%;
  width: 7.53%;
  top: 0%;
  right: 92.47%;
  bottom: 0%;
  left: 0%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const ServicesParent = styled.div`
  position: absolute;
  top: 95px;
  left: 20px;
  width: 385px;
  height: 29px;
  font-size: 22.5px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 10px;
  background-color: #fff;
  border: 2px solid #02bdf3;
  box-sizing: border-box;
  width: 357px;
  height: 69px;
`;
const CPrograming = styled.div`
  position: absolute;
  top: 13px;
  left: 12px;
  font-weight: 600;
`;
const OurProfessionalsAre = styled.div`
  position: absolute;
  top: 38px;
  left: 12px;
  display: inline-block;
  width: 278px;
`;
const EmojiBooksIcon = styled.img`
  position: absolute;
  height: 56.15%;
  width: 11.17%;
  top: 23.19%;
  right: 3.67%;
  bottom: 20.66%;
  left: 85.15%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 303px;
  left: 36px;
  width: 357px;
  height: 69px;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 390px;
  left: 36px;
  width: 357px;
  height: 69px;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 477px;
  left: 36px;
  width: 357px;
  height: 69px;
`;
const IllustrationTeacherIcon = styled.img`
  position: absolute;
  height: 13.37%;
  width: 28.24%;
  top: 16.2%;
  right: 63.35%;
  bottom: 70.43%;
  left: 8.41%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Teacher = styled.div`
  position: absolute;
  top: 178px;
  left: 181px;
  font-size: 20px;
  font-weight: 600;
  color: #093f68;
`;
const RectangleButton = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: #02bdf3;
  position: absolute;
  top: 212px;
  left: 181px;
  border-radius: 5px;
  width: 159px;
  height: 32px;
`;
const AddServices = styled.div`
  position: absolute;
  top: 219px;
  left: 215px;
  color: #fff;
  display: inline-block;
  width: 103px;
  height: 16px;
`;
const RectangleDiv = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 20px;
  background-color: #093f68;
  width: 148px;
  height: 50px;
`;
const Next = styled.div`
  position: absolute;
  top: 9px;
  left: 49px;
  display: inline-block;
  width: 59px;
  height: 26px;
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 841px;
  left: 252px;
  width: 148px;
  height: 50px;
  font-size: 24px;
  color: #fff;
`;
const AddServiceRoot = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 926px;
  overflow: hidden;
  text-align: left;
  font-size: 15px;
  color: #02bdf3;
  font-family: Inter;
`;

const AddService = () => {
  return (
    <AddServiceRoot>
      <AddServiceChild />
      <AddServiceItem />
      <AddServiceInner />
      <LineDiv />
      <Rap>RAP</Rap>
      <ServicesParent>
        <Services>SERVICES</Services>
        <IconChevronCircleLeft alt="" src={`🦆 icon "Chevron Circle Left"_1`} />
      </ServicesParent>
      <RectangleParent>
        <GroupChild />
        <CPrograming>C++ Programing</CPrograming>
        <OurProfessionalsAre>
          Our professionals are here to help you.
        </OurProfessionalsAre>
        <EmojiBooksIcon alt="" src={`🦆 emoji "books"_2`} />
      </RectangleParent>
      <RectangleGroup>
        <GroupChild />
        <CPrograming>C Programing</CPrograming>
        <OurProfessionalsAre>
          Our professionals are here to help you.
        </OurProfessionalsAre>
        <EmojiBooksIcon alt="" src={`🦆 emoji "books"_3`} />
      </RectangleGroup>
      <RectangleContainer>
        <GroupChild />
        <CPrograming>Python Programing</CPrograming>
        <OurProfessionalsAre>
          Our professionals are here to help you.
        </OurProfessionalsAre>
        <EmojiBooksIcon alt="" src={`🦆 emoji "books"_4`} />
      </RectangleContainer>
      <IllustrationTeacherIcon alt="" src={`🦆 illustration "Teacher"_5`} />
      <Teacher>TEACHER</Teacher>
      <RectangleButton />
      <AddServices>Add Services</AddServices>
      <GroupDiv>
        <RectangleDiv />
        <Next>Next</Next>
      </GroupDiv>
    </AddServiceRoot>
  );
};

export default AddService;
