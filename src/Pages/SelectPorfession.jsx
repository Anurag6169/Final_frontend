import styled from "styled-components";
import Header from "../Components/Header";
const SelectingProfessionChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #0353c9;
  width: 428px;
  height: 72px;
`;
const SelectingProfessionItem = styled.div`
  position: absolute;
  top: 19px;
  left: 356px;
  border-top: 2px solid #fff;
  box-sizing: border-box;
  width: 46px;
  height: 2px;
`;
const SelectingProfessionInner = styled.div`
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
const ViewServices = styled.div`
  position: absolute;
  top: 260px;
  left: 322px;
  font-size: 15px;
  color: #fff;
  text-align: center;
  display: inline-block;
  width: 63px;
`;
const GroupChild = styled.div`
  position: absolute;
  top: 1px;
  left: 0px;
  border-radius: 15px;
  background-color: #fff;
  border: 2px solid #02bdf3;
  box-sizing: border-box;
  width: 178px;
  height: 218px;
`;
const GroupItem = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 15px 15px 0px 0px;
  background-color: #02bdf3;
  width: 178px;
  height: 149px;
`;
const Doctor = styled.div`
  position: absolute;
  top: 168px;
  left: 42px;
  font-weight: 600;
`;
const IllustrationDoctorIcon = styled.img`
  position: absolute;
  height: 57.14%;
  width: 53.28%;
  top: 10.5%;
  right: 22.56%;
  bottom: 32.36%;
  left: 24.16%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const RectangleParent = styled.div`
  position: absolute;
  top: 202px;
  left: 20px;
  width: 178px;
  height: 219px;
`;
const SelectProfession = styled.div`
  position: absolute;
  top: 123px;
  left: 88px;
  font-size: 24px;
  font-weight: 600;
`;
const Teacher = styled.div`
  position: absolute;
  top: 170px;
  left: 41px;
  font-weight: 600;
`;
const IllustrationTeacherIcon = styled.img`
  position: absolute;
  height: 56.54%;
  width: 67.91%;
  top: 11.42%;
  right: 19.17%;
  bottom: 32.05%;
  left: 12.92%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const RectangleGroup = styled.div`
  position: absolute;
  top: 446px;
  left: 20px;
  width: 178px;
  height: 219px;
`;
const Teacher1 = styled.div`
  position: absolute;
  top: 171px;
  left: 42px;
  font-weight: 600;
`;
const RectangleContainer = styled.div`
  position: absolute;
  top: 690px;
  left: 20px;
  width: 178px;
  height: 219px;
`;
const JohnDoe = styled.div`
  position: absolute;
  top: 179px;
  left: 114px;
`;
const Name1 = styled.div`
  position: absolute;
  top: 179px;
  left: 8px;
`;
const Specialization = styled.div`
  position: absolute;
  top: 191px;
  left: 8px;
`;
const Yoga = styled.div`
  position: absolute;
  top: 191px;
  left: 114px;
`;
const IllustrationMeditationIcon = styled.img`
  position: absolute;
  height: 57.28%;
  width: 71.35%;
  top: 10.96%;
  right: 14.04%;
  bottom: 31.76%;
  left: 14.61%;
  max-width: 100%;
  overflow: hidden;
  max-height: 100%;
`;
const Coach = styled.div`
  position: absolute;
  top: 152px;
  left: 20px;
  font-size: 20px;
  font-weight: 600;
  color: #093f68;
  text-align: center;
  display: inline-block;
  width: 139px;
`;
const GroupDiv = styled.div`
  position: absolute;
  top: 446px;
  left: 227px;
  width: 178px;
  height: 219px;
  font-size: 10px;
  color: #02bdf3;
`;
const Coach1 = styled.div`
  position: absolute;
  top: 170px;
  left: 20px;
  font-weight: 600;
  display: inline-block;
  width: 139px;
`;
const RectangleParent1 = styled.div`
  position: absolute;
  top: 446px;
  left: 227px;
  width: 178px;
  height: 219px;
  text-align: center;
`;
const GroupChild7 = styled.div`
  position: absolute;
  top: 0.98px;
  left: 0px;
  border-radius: 15px;
  background-color: #fff;
  border: 2px solid #02bdf3;
  box-sizing: border-box;
  width: 178px;
  height: 213.3px;
`;
const GroupChild8 = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border-radius: 15px 15px 0px 0px;
  background-color: #02bdf3;
  width: 178px;
  height: 145.79px;
`;
const Doctor1 = styled.div`
  position: absolute;
  top: 169px;
  left: 46px;
  font-weight: 600;
  display: inline-block;
  width: 86px;
  height: 23.48px;
`;

const SelectingProfessionRoot = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 926px;
  overflow: hidden;
  text-align: left;
  font-size: 20px;
  color: #093f68;
  font-family: Inter;
`;

const SelectingProfession = () => {
  return (

    <><Header />

    <SelectingProfessionRoot>
      <SelectProfession>SELECT PROFESSION</SelectProfession>
      <RectangleGroup>
        <GroupChild />
        <GroupItem />
        <Teacher>TEACHER</Teacher>
        <IllustrationTeacherIcon alt="" src={`🦆 illustration "Teacher"_2`} />
      </RectangleGroup>
      <RectangleContainer>
        <GroupChild />
        <GroupItem />
        <Teacher1>TEACHER</Teacher1>
        <IllustrationTeacherIcon alt="" src={`🦆 illustration "Teacher"_3`} />
      </RectangleContainer>
     
        
     
    </SelectingProfessionRoot>
    </>
  );
};

export default SelectingProfession;
