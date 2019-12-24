import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

const ImgFixed = ({ src, alt, height, width }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fixed {
              ...GatsbyImageSharpFixed_withWebp
              originalName
            }
          }
        }
      }
    }
  `);

  const image = allImageSharp.edges.find(
    edge => edge.node.fixed.originalName === src
  );

  if (!image) {
    return null;
  }

  const overrideImageProps = {
    ...image.node.fixed,
    width,
    height,
  };

  return <Img fixed={overrideImageProps} alt={alt} />;
};

ImgFixed.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

ImgFixed.defaultProps = {
  height: 60,
  width: 60,
};

export default ImgFixed;
