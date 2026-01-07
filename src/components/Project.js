import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

import { CloudinaryImage } from './CloudinaryImage';
import { transformationsFormat } from '../utils';
import { EVEN, ODD } from '../utils/constants';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

/**
 * Styled Components
 */
const ProjectWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas: 'image' 'desc' 'stack';
  grid-template-rows: auto;
  grid-gap: 0.5em;
  margin-bottom: 1em;
  div:nth-child(1) {
    grid-area: image;
    justify-self: center;
  }
  div:nth-child(2) {
    grid-area: desc;
  }
  div:nth-child(3) {
    grid-area: stack;
    text-align: center;
  }
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    grid-template-columns: ${({ $position }) =>
      $position === EVEN ? '300px auto' : 'auto 300px'};
    grid-template-areas: ${({ $position }) =>
      $position === EVEN
        ? '"image desc" "stack stack"'
        : '"desc image" "stack stack"'};
  }
`;

/**
 * Component
 */
const Project = ({ project, stack, description, images, style }) => (
  <ProjectWrapper $position={style}>
    <div>
      <Carousel
        showArrows
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        width="300px"
      >
        {images.map(image => (
          <CloudinaryImage
            alt={project}
            title={project}
            relativePath={image}
            transformations={transformationsFormat('w_300')}
            key={image}
          />
        ))}
      </Carousel>
    </div>

    <div>
      <h2>{project}</h2>
      {description.split('|').map((desc, idx) => (
        <p key={`${project}-${idx}`}>{desc}</p>
      ))}
    </div>

    <div>
      <p>
        <em>{stack}</em>
      </p>
    </div>
  </ProjectWrapper>
);

Project.propTypes = {
  project: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.oneOf([EVEN, ODD]),
};

export { Project };
