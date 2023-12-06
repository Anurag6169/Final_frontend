import "./Login.css";

const Login = () => {

  const login = async (username, password) => {
    try {
      const response = await fetch('http://localhost:5000/erap_backend/user_login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
  
      if (!response.ok) {

        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful', data.token);
    } catch (error) {
      console.error('Error during login:', error.message);
    }
  };
  
  const username = 'example_user';
  const password = 'example_password';
  
  login(username, password);
  

  return (
    <div className="iphone-14-plus-5">
      <div className="frame">
        <b className="login">LOGIN</b>
        <div className="email">Email:</div>
        <div className="do-not-have-container">
          <span>{`Do not have an account? `}</span>
          <span className="create-new-account">Create new account</span>
          <span> here!</span>
        </div>
        <input
          className="frame1"
          name="Email"
          id="Email"
          placeholder="Enter your Email"
          type="email"
        />
        <div className="password">Password:</div>
        <input
          className="frame2"
          name="Password"
          id="Pasword"
          placeholder="Enter You Password"
          type="password"
        />
        <div className="frame3">
          <div className="submit">Submit</div>
        </div>
      </div>
      <div className="frame4">
        <div className="frame-child" />
        <div className="frame5">
          <div className="frame-item" />
          <div className="frame-inner" />
          <b className="rap">RAP</b>
        </div>
      </div>
    </div>
  );
};

export default Login;
