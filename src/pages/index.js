import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Spring } from 'react-spring';
import Layout from '../components/layout';

const LinkStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  text-align: center;
  a {
    font-size: 16pt;
    text-decoration: none;
    color: black;
    font-family: Sedgwick Ave;
  }
  a:hover {
    text-decoration: underline;
  }
  h1 {
    font-family: Rock Salt;
  }

  @media only screen and (max-width: 1200px) {
    a {
      text-decoration: underline;
    }
  }
`;

const IndexPage = () => (
  <Layout>
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={100}>
      {props => (
        <LinkStyles style={props}>
          <h1>Gutter Nasty</h1>
          <Link to="/music">Music</Link>
          <Link to="/barbershop">Barbershop</Link>
          <Link to="/about">About</Link>
        </LinkStyles>
      )}
    </Spring>
  </Layout>
);

export default IndexPage;
