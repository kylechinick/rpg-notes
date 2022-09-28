import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';

function Header() {
  return (
    <>
      <p>RPG Notes</p>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/sign-in'>Account</Link>
        </li>
      </ul>
    </>
  );
}

export default Header;
