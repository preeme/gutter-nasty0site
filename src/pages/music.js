import React from 'react';
import { Spring } from 'react-spring';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

import Header from '../components/header';

const ALBUM_IMAGES = graphql`
  {
    gutterfied: file(relativePath: { regex: "/gutterfied/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    guttersway: file(relativePath: { regex: "/guttersway/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    guttersworld: file(relativePath: { regex: "/guttersworld/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    gutternomics: file(relativePath: { regex: "/gutternomics/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
    gutterseason: file(relativePath: { regex: "/gutterseason/" }) {
      childImageSharp {
        fixed(width: 300, height: 300) {
          ...GatsbyImageSharpFixed_tracedSVG
        }
      }
    }
  }
`;

const AlbumContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit);
`;

const AlbumGallery = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const AlbumCard = styled.div`
  display: grid;
  justify-content: center;
  text-align: center;
`;

const MusicPage = () => (
  <StaticQuery
    query={ALBUM_IMAGES}
    render={({
      gutterfied,
      guttersway,
      gutternomics,
      guttersworld,
      gutterseason,
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
            <AlbumContainer style={props}>
              <AlbumGallery>
                <AlbumCard>
                  <a href="https://itunes.apple.com/us/album/gutterfied/1439464275">
                    <Img fixed={gutterfied.childImageSharp.fixed} />
                  </a>
                </AlbumCard>
                <AlbumCard>
                  <a href="https://itunes.apple.com/us/album/gutters-way/1384044354">
                    <Img fixed={guttersway.childImageSharp.fixed} />
                  </a>
                </AlbumCard>
                <AlbumCard>
                  <a href="https://itunes.apple.com/us/album/gutternomics/1282566612">
                    <Img fixed={gutternomics.childImageSharp.fixed} />
                  </a>
                </AlbumCard>
                <AlbumCard>
                  <a href="https://itunes.apple.com/us/album/gutter-season/1190794445">
                    <Img fixed={gutterseason.childImageSharp.fixed} />
                  </a>
                </AlbumCard>
                <AlbumCard>
                  <a href="https://open.spotify.com/album/5ZJyQhyOVDIue6GNjehMKJ">
                    <Img fixed={guttersworld.childImageSharp.fixed} />
                  </a>
                </AlbumCard>
              </AlbumGallery>
            </AlbumContainer>
          )}
        </Spring>
      </div>
    )}
  />
);

export default MusicPage;
