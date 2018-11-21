import React from 'react';
import { Link } from 'gatsby';
import { Spring } from 'react-spring';

import Header from '../components/header';
import Layout from '../components/layout';

const MusicPage = () => (
  <div>
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={100}>
      {props => (
        <div style={props}>
          <Header />
        </div>
      )}
    </Spring>
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={400}>
      {props => (
        <div style={props}>
          <Layout>
            <h1>Hi from the second page</h1>
            <p>Welcome to page 2</p>
            <Link to="/">Go back to the homepage</Link>
          </Layout>
        </div>
      )}
    </Spring>
  </div>
);

export default MusicPage;
