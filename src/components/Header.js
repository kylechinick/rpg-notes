import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainNav = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
`;

const AppWordMark = styled.p`
  font-family: 'Caudex', serif;
  font-size: 1.6rem;
  font-weight: 700;
`;

const NavLinksList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
`;

const NavLink = styled.li`
  margin-left: 0.5rem;
  // margin-right: 0.5rem;
`;

function Header() {
  return (
    <MainNav>
      <AppWordMark>The Tattered Tome</AppWordMark>
      <NavLinksList>
        <NavLink>
          <Link to='/'>Home</Link>
        </NavLink>
        <NavLink>
          <Link to='/sign-in'>Account</Link>
        </NavLink>
      </NavLinksList>
    </MainNav>
  );
}

export default Header;
