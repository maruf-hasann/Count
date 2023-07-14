import React from 'react';
import './Style.css'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <div className='container'>
            <h1>Login</h1>
        <form>
          <input className="input" type="text" placeholder="Email" /> <br />
          <input
            className="input"
            type="password"
            placeholder="Password"
          />{" "}
          <br />
          <input className="input" type="submit" value="Login" />
            </form>
            <button className='sign' ><Link to='/sign'>Sign In</Link></button>
      </div>
    );
};

export default Login;