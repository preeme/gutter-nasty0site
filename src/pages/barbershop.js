import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Spring } from 'react-spring';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Header from '../components/header';

const GalleryContainer = styled.div`
  font-family: Sedgwick Ave;
  h2 {
    font-family: Sedgwick Ave;
  }
  display: grid;
  grid-template-columns: repeat(auto-fit);
`;

const BarberGallery = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  h2 {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    grid-gap: 20px;
    align-items: center;
  }
  h2:before,
  h2:after {
    display: block;
    content: '';
    height: 10px;
    background: linear-gradient(to var(--direction, left), black, transparent);
  }
  h2:after {
    --direction: right;
  }
`;

const BarberCard = styled.div`
  display: grid;
  justify-content: center;
`;

const BarberInfo = styled.div`
  text-align: center;
`;

const BARBER_IMAGES = graphql`
  {
    barberImageOne: file(relativePath: { regex: "/barber-image-1/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    barberImageTwo: file(relativePath: { regex: "/barber-image-2/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    barberImageThree: file(relativePath: { regex: "/barber-image-3/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    barberImageFour: file(relativePath: { regex: "/barber-image-4/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    barberImageFive: file(relativePath: { regex: "/barber-image-5/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    barberImageSix: file(relativePath: { regex: "/barber-image-6/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    barberImageSeven: file(relativePath: { regex: "/barber-image-7/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    barberImageEight: file(relativePath: { regex: "/barber-image-8/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

const BarbershopPage = () => (
  <StaticQuery
    query={BARBER_IMAGES}
    render={({
      barberImageOne,
      barberImageTwo,
      barberImageThree,
      barberImageFour,
      barberImageFive,
      barberImageSix,
      barberImageSeven,
      barberImageEight,
    }) => (
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
            <GalleryContainer style={props}>
              <BarberInfo>
                <h2>Certified Barber</h2>
                <p>
                  Contact me at <strong>(323)683-3264</strong> to book an
                  appointment
                </p>
              </BarberInfo>
              <BarberGallery>
                <h2>Recent Work</h2>
                <BarberCard>
                  <Img fixed={barberImageOne.childImageSharp.fixed} />
                </BarberCard>
                <BarberCard>
                  <Img fixed={barberImageTwo.childImageSharp.fixed} />
                </BarberCard>
                <BarberCard>
                  <Img fixed={barberImageThree.childImageSharp.fixed} />
                </BarberCard>
                <BarberCard>
                  <Img fixed={barberImageFour.childImageSharp.fixed} />
                </BarberCard>
                <BarberCard>
                  <Img fixed={barberImageFive.childImageSharp.fixed} />
                </BarberCard>
                <BarberCard>
                  <Img fixed={barberImageSix.childImageSharp.fixed} />
                </BarberCard>
                <BarberCard>
                  <Img fixed={barberImageSeven.childImageSharp.fixed} />
                </BarberCard>
                <BarberCard>
                  <Img fixed={barberImageEight.childImageSharp.fixed} />
                </BarberCard>
              </BarberGallery>
            </GalleryContainer>
          )}
        </Spring>
      </div>
    )}
  />
);

export default BarbershopPage;
