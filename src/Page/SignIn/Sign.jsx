import React from 'react';

const Sign = () => {
    return (
      <div className="container">
        <h1>Sign IN</h1>
        <form>
          <input className="input" type="text" placeholder="Email" /> <br />
          <input
            className="input"
            type="password"
            placeholder="Password"
          />{" "}
          <br />
          <input className="input" type="submit" value="Sign Up" />
        </form>
        <button className="sign">Sign In</button>
      </div>
    );
};

export default Sign;