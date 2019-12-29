import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Image from 'gatsby-image';
import { getFixedImageObject } from 'gatsby-transformer-cloudinary';

const ProjectImage = ({ image, alt }) => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    getFixedImageObject({
      public_id: `esausilva-dev/portfolio/${image}`,
      cloudName: 'esausilva',
      transformations: ['w_300'],
    }).then(result => {
      const overrideResult = {
        ...result,
        width: 300,
        height: 169,
      };
      setFixed(overrideResult);
    });
  }, [image]);

  return fixed ? (
    <Image fixed={fixed} alt={alt} loading="lazy" />
  ) : (
    <p>loading...</p>
  );
};

ProjectImage.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ProjectImage;
