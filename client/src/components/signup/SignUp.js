import React, { useState } from 'react';
// import './SignUpForm.css';


const SignUp = ({ navigate }) => {

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    fetch( '/users', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName: userName, email: email, password: password })
    })
      .then(response => {
        if(response.status === 201) {
          console.log("Success")

          // navigate('/login')
        } else {
          setError("Email already exists")
          setUserName("")
          setEmail("")
          setPassword("")
          navigate('/signup')
        }
      })
  }

  const handleUserNameChange = (event) => {
    setUserName(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }


    return (
      <div>
        <h1>Sign Up Form</h1>
      <form onSubmit={handleSubmit}>
          <input placeholder="UserName" id="userName" type='text' value={ userName } onChange={handleUserNameChange} />
          <input placeholder="Email" id="email" type='text' value={ email } onChange={handleEmailChange} />
          <input placeholder="Password" id="password" type='password' value={ password } onChange={handlePasswordChange} />
        <button id='submit' type="submit" value="Submit">Sign Up</button>
        {error && (
            <div className="alert alert-danger">
              {error}
              <a href="/login">Please login</a>{" "}
            </div>
        )}
      </form>
      </div> 
    );
}

export default SignUp;