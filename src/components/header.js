import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a {
    display: block;
    text-decoration: none;
    padding: 10px;
    text-align: center;
    text-transform: uppercase;
    font-family: Rock Salt, cursive;
    text-decoration: none;
    color: black;
  }
  .logo {
    font-family: Rock Salt;
    grid-column: 1 / 4;
    justify-self: start;
  }
  a:hover {
    text-decoration: underline;
  }
`;

const Header = () => (
  <HeaderStyle>
    <ul>
      <li className="logo">
        <Link to="/">GN</Link>
      </li>
      <li>
        <Link to="/music">Music</Link>
      </li>
      <li>
        <Link to="/barbershop">Barbershop</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </HeaderStyle>
);

export default Header;
