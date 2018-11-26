import React from 'react'
import { Link } from 'gatsby'
import { Spring } from 'react-spring'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Layout from '../components/layout'
import Header from '../components/header'

const ABOUT_IMAGE = graphql`
  {
    file(relativePath: { regex: "/about-image2/" }) {
      childImageSharp {
        fixed(width: 400, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`

const AboutStyles = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  padding-right: 20px;
  .about-img {
    justify-self: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    grid-column: 1 /3;
    padding-left: 20px;
  }
  .info-card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5);
    padding: 10px;
    justify-content: center;
    grid-column: 1/3;
  }
  h1 {
    text-align: center;
    font-family: Sedgwick Ave;
  }
  p {
    font-family: Sedgwick Ave;
  }
`

const AboutPage = () => (
  <StaticQuery
    query={ABOUT_IMAGE}
    render={data => (
      <>
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
                  <AboutStyles>
                    <Img
                      fixed={data.file.childImageSharp.fixed}
                      className="about-img"
                    />
                    <div className="info-card">
                      <h1>About Me</h1>
                      <p>
                        This is GUTTERNASTY, this is all I am. The GUTTER is
                        where I stand. Barbering was just a plan to build my
                        standards in high demand, to be able to provide my
                        family with all I can. I'm a simple man in this widow
                        land, I have some good in me, just a little strand,
                        cross my path and do me bad the nsee no good for whom it
                        stands. A wicked man is all I am, I admit it some people
                        can't but I'll never quit in life. I've done the good
                        and bad, I've taken punches but still I stand.
                      </p>
                    </div>
                  </AboutStyles>
                </Layout>
              </div>
            )}
          </Spring>
        </div>
      </>
    )}
  />
)

export default AboutPage
