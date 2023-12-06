import styled from "styled-components";

const AvailableDaysChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #0353c9;
  width: 428px;
  height: 72px;
`;
const AvailableDaysItem = styled.div`
  position: absolute;
  top: 19px;
  left: 356px;
  border-top: 2px solid #fff;
  box-sizing: border-box;
  width: 46px;
  height: 2px;
`;
const AvailableDaysInner = styled.div`
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
`;
const AvailableDaysTitle = styled.b`
  position: absolute;
  top: 2px;
  left: 181px;
  display: inline-block;
  width: 204px;
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
const AvailableDaysParent = styled.div`
  position: absolute;
  top: 95px;
  left: 20px;
  width: 385px;
  height: 29px;
  font-size: 22.5px;
  color: #02bdf3;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 10px;
  background-color: #02bdf3;
  border: 2px solid #02bdf3;
  box-sizing: border-box;
  width: 356px;
  height: 48px;
`;
const Monday = styled.div`
  position: absolute;
  top: 11px;
  left: 152px;
  font-weight: 600;
  display: inline-block;
  width: 88px;
  height: 13px;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 304px;
  left: 36px;
  width: 356px;
  height: 48px;
`;
const GroupItem = styled.button`
  cursor: pointer;
  border: 2px solid #02bdf3;
  padding: 0;
  background-color: #fff;
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 10px;
  box-sizing: border-box;
  width: 356px;
  height: 48px;
`;
const Wednesday = styled.div`
  position: absolute;
  top: 11px;
  left: 123px;
  font-weight: 600;
  display: inline-block;
  width: 120px;
  height: 13px;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 74px;
  left: 0px;
  width: 356px;
  height: 48px;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 374px;
  left: 36px;
  width: 356px;
  height: 122px;
  color: #02bdf3;
`;
const Thursday = styled.div`
  position: absolute;
  top: 11px;
  left: 144px;
  font-weight: 600;
  display: inline-block;
  width: 96px;
  height: 13px;
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 518px;
  left: 31px;
  width: 356px;
  height: 48px;
  color: #02bdf3;
`;
const RectangleParent1 = styled.div`
  position: absolute;
  top: 740px;
  left: 36px;
  width: 356px;
  height: 48px;
`;
const RectangleParent2 = styled.div`
  position: absolute;
  top: 588px;
  left: 31px;
  width: 356px;
  height: 122px;
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
  font-weight: 600;
  color: #093f68;
`;
const JohnShah = styled.div`
  position: absolute;
  top: 210px;
  left: 181px;
  font-size: 15px;
  color: #02bdf3;
`;
const GroupChild3 = styled.div`
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
const RectangleParent4 = styled.div`
  position: absolute;
  top: 841px;
  left: 252px;
  width: 148px;
  height: 50px;
  font-size: 24px;
`;
const AvailableDaysRoot = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 926px;
  overflow: hidden;
  text-align: left;
  font-size: 20px;
  color: #fff;
  font-family: Inter;
`;

const AvailableDays = () => {
  return (
    <AvailableDaysRoot>
      <AvailableDaysChild />
      <AvailableDaysItem />
      <AvailableDaysInner />
      <LineDiv />
      <Rap>RAP</Rap>
      <AvailableDaysParent>
        <AvailableDaysTitle>AVAILABLE DAYS</AvailableDaysTitle>
        <IconChevronCircleLeft alt="" src={`🦆 icon "Chevron Circle Left"_1`} />
      </AvailableDaysParent>
      <RectangleParent>
        <GroupChild />
        <Monday>Monday</Monday>
      </RectangleParent>
      <RectangleGroup>
        <GroupItem />
        <Monday>Tuesday</Monday>
        <RectangleContainer>
          <GroupItem />
          <Wednesday>Wednesday</Wednesday>
        </RectangleContainer>
      </RectangleGroup>
      <GroupDiv>
        <GroupItem />
        <Thursday>Thursday</Thursday>
      </GroupDiv>
      <RectangleParent1>
        <GroupChild />
        <Monday>Sunday</Monday>
      </RectangleParent1>
      <RectangleParent2>
        <GroupChild />
        <Monday>Friday</Monday>
        <RectangleContainer>
          <GroupChild />
          <Monday>Saturday</Monday>
        </RectangleContainer>
      </RectangleParent2>
      <IllustrationTeacherIcon alt="" src={`🦆 illustration "Teacher"_2`} />
      <Teacher>TEACHER</Teacher>
      <JohnShah>John Shah</JohnShah>
      <RectangleParent4>
        <GroupChild3 />
        <Next>Next</Next>
      </RectangleParent4>
    </AvailableDaysRoot>
  );
};

export default AvailableDays;
