import React from 'react';
import PropTypes from 'prop-types';

import 'lazysizes';

const CloudinaryImage = ({ alt, title, relativePath, transformations }) => {
  return (
    <img
      src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUDINARY_USER}/image/upload/e_blur:1500,f_auto,q_40${transformations}/esausilva-dev/${relativePath}`}
      alt={alt}
      title={title}
      data-sizes="auto"
      data-src={`https://res.cloudinary.com/${process.env.GATSBY_CLOUDINARY_USER}/image/upload/f_auto,q_auto${transformations}/esausilva-dev/${relativePath}`}
      className="lazyload"
    />
  );
};

CloudinaryImage.propTypes = {
  alt: PropTypes.string.isRequired,
  title: PropTypes.string,
  relativePath: PropTypes.string.isRequired,
  transformations: PropTypes.string,
};

CloudinaryImage.defaultProps = {
  title: '',
  transformations: '',
};

export { CloudinaryImage };
