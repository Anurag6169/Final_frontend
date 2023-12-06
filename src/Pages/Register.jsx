import styled from "styled-components";

const RegisterChild = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #0353c9;
  width: 428px;
  height: 72px;
`;
const RegisterItem = styled.div`
  position: absolute;
  top: 19px;
  left: 356px;
  border-top: 2px solid #fff;
  box-sizing: border-box;
  width: 46px;
  height: 2px;
`;
const RegisterInner = styled.div`
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
const RectangleDiv = styled.div`
  position: absolute;
  top: 186px;
  left: 31px;
  border-radius: 15px;
  background-color: #fff;
  border: 2px solid #02bdf3;
  box-sizing: border-box;
  width: 365px;
  height: 676px;
`;
const RegisterTitle = styled.b`
  position: absolute;
  top: 215px;
  left: 152px;
  font-size: 25px;
`;
const RectangleInput = styled.input`
  border: none;
  background-color: #02bdf3;
  position: absolute;
  top: 466px;
  left: 60px;
  border-radius: 10px;
  width: 308px;
  height: 41px;
`;
const RegisterChild1 = styled.input`
  border: none;
  background-color: #02bdf3;
  position: absolute;
  top: 548px;
  left: 60px;
  border-radius: 10px;
  width: 308px;
  height: 41px;
`;
const Email = styled.div`
  position: absolute;
  top: 442px;
  left: 68px;
`;
const Johndoegmailcom = styled.a`
  position: absolute;
  top: 477px;
  left: 72px;
  text-decoration: underline;
  color: #fff;
`;
const Password = styled.div`
  position: absolute;
  top: 525px;
  left: 68px;
`;
const RegisterChild2 = styled.div`
  position: absolute;
  top: 747px;
  left: 159px;
  border-radius: 20px;
  background-color: #fff;
  border: 1px solid #02bdf3;
  box-sizing: border-box;
  width: 110px;
  height: 34px;
`;
const Submit = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: transparent;
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 15px;
  font-family: Inter;
  color: #02bdf3;
  text-align: left;
  display: inline-block;
`;
const SubmitWrapper = styled.div`
  position: absolute;
  top: 755px;
  left: 189px;
  width: 50px;
  height: 18px;
`;
const DoNotHave = styled.span``;
const CreateNewAccount = styled.span`
  color: #093f68;
`;
const DoNotHaveContainer = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  display: inline-block;
  width: 228px;
`;
const DoNotHaveAnAccountCreateWrapper = styled.div`
  position: absolute;
  top: 697px;
  left: 100px;
  width: 228px;
  height: 36px;
  text-align: center;
`;
const Div = styled.div`
  position: absolute;
  top: 543px;
  left: 76px;
  font-size: 30px;
  color: #fff;
`;
const RegisterChild3 = styled.input`
  border: none;
  background-color: #02bdf3;
  position: absolute;
  top: 636px;
  left: 60px;
  border-radius: 10px;
  width: 308px;
  height: 41px;
`;
const ReEnterPassword = styled.div`
  position: absolute;
  top: 613px;
  left: 68px;
`;
const Div1 = styled.div`
  position: absolute;
  top: 631px;
  left: 76px;
  font-size: 30px;
  color: #fff;
`;
const RegisterChild4 = styled.input`
  border: none;
  background-color: #02bdf3;
  position: absolute;
  top: 298px;
  left: 62px;
  border-radius: 10px;
  width: 308px;
  height: 41px;
`;
const RegisterChild5 = styled.input`
  border: none;
  background-color: #02bdf3;
  position: absolute;
  top: 386px;
  left: 62px;
  border-radius: 10px;
  width: 308px;
  height: 41px;
`;
const FirstName = styled.div`
  position: absolute;
  top: 274px;
  left: 70px;
`;
const John = styled.div`
  position: absolute;
  top: 309px;
  left: 74px;
  color: #fff;
`;
const Doe = styled.div`
  position: absolute;
  top: 398px;
  left: 74px;
  color: #fff;
`;
const LastName = styled.div`
  position: absolute;
  top: 363px;
  left: 70px;
`;
const RegisterRoot = styled.div`
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

const Register = () => {
  return (
    <RegisterRoot>
      <RegisterChild />
      <RegisterItem />
      <RegisterInner />
      <LineDiv />
      <Rap>RAP</Rap>
      <RectangleDiv />
      <RegisterTitle>REGISTER</RegisterTitle>
      <RectangleInput type="text" />
      <RegisterChild1 type="text" />
      <Email>Email:</Email>
      
      <Password>Password:</Password>
      <RegisterChild2 />
      <SubmitWrapper>
        <Submit>Submit</Submit>
      </SubmitWrapper>
      <DoNotHaveAnAccountCreateWrapper>
        <DoNotHaveContainer>
          <DoNotHave>{`Do not have an account? `}</DoNotHave>
          <CreateNewAccount>Create new account</CreateNewAccount>
          <DoNotHave> here!</DoNotHave>
        </DoNotHaveContainer>
      </DoNotHaveAnAccountCreateWrapper>
  
      <RegisterChild3 type="text" />
      <ReEnterPassword>Re-enter password:</ReEnterPassword>

      <RegisterChild4 type="text" />
      <RegisterChild5 type="text" />
      <FirstName>First name:</FirstName>

      <LastName>Last name:</LastName>
    </RegisterRoot>
  );
};

export default Register;
