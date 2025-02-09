import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

const ImgFixed = ({ src, alt, height = 60, width = 60 }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            gatsbyImageData(layout: FIXED, height: 60, width: 60)
            fixed {
              originalName
            }
          }
        }
      }
    }
  `);

  const imageNode = allImageSharp.edges.find(
    edge => edge.node.fixed.originalName === src,
  );
  const image = getImage(imageNode.node);

  if (!image) {
    return null;
  }

  return <GatsbyImage image={image} alt={alt} height={height} width={width} />;
};

ImgFixed.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
};

export { ImgFixed };
