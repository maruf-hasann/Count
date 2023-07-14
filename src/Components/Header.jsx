import React from 'react';

const Header = () => {
    return (
      <nav>
        <h3>LOGO</h3>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Counter</li>
        </ul>
        <button className="login">
          <a href="/login" className="login">
            Login
          </a>
        </button>
      </nav>
    );
};

export default Header;