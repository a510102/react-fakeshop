import React from 'react';

const Login = ({ onChangeValue ,onRequestLogin }) => {
  return (
    <div>
      <from>
        <h2>管理者登入</h2>
        <label>Email:</label>
        <input
          type="email" 
          placeholder="Email Address" 
          id="email" 
          onChange = { onChangeValue } 
        /><br/>
        <label>Password:</label>
        <input 
          type="password" 
          placeholder="Password" 
          id="password" 
          onChange = { onChangeValue } 
        /><br/>
        <input 
          type="button" 
          value="Sign in"
          onClick = { onRequestLogin } 
        />
      </from>
    </div>
  )
}

export default Login