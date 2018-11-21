import React from 'react'
import { Link } from 'gatsby'
import { Spring } from 'react-spring'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

import Header from '../components/header'
import Layout from '../components/layout'

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
  }
`

const AlbumGallery = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  img {
    justify-self: center;
  }
`

const MusicPage = () => (
  <StaticQuery
    query={ALBUM_IMAGES}
    render={({ gutterfied, guttersway, gutternomics, guttersworld }) => (
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
                <AlbumGallery>
                  {[gutterfied, guttersway, gutternomics, guttersworld].map(
                    ({ childImageSharp }) => (
                      <div>
                        <Img fixed={childImageSharp.fixed} />
                      </div>
                    )
                  )}
                </AlbumGallery>
              </div>
            )}
          </Spring>
        </div>
      </>
    )}
  />
)

export default MusicPage
