import { graphql } from 'gatsby';

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

// Trying to figure out why BARBER_IMAGES won't export
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

export { ALBUM_IMAGES, BARBER_IMAGES };
