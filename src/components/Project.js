import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

import ImgFixed from './ImgFixed';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProjectWrapperBase = styled.section`
  display: grid;
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
  @media (max-width: ${props => props.theme.phone}) {
    grid-template-columns: 1fr;
    grid-template-areas: 'image' 'desc' 'stack';
  }
`;

const ProjectWrapper1 = styled(ProjectWrapperBase)`
  grid-template-columns: 300px auto;
  grid-template-areas: 'image desc' 'stack stack';
`;

const ProjectWrapper2 = styled(ProjectWrapperBase)`
  grid-template-columns: auto 300px;
  grid-template-areas: 'desc image' 'stack stack';
`;

const Project = ({ project, stack, description, images, style }) => {
  const Body = () => (
    <>
      <div>
        <Carousel
          showArrows
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          width="300px"
        >
          {images.map(image => (
            <ImgFixed
              src={image}
              alt={project}
              width={300}
              height={200}
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
    </>
  );

  switch (style) {
    case 'even':
      return (
        <ProjectWrapper1>
          <Body />
        </ProjectWrapper1>
      );
    case 'odd':
      return (
        <ProjectWrapper2>
          <Body />
        </ProjectWrapper2>
      );
    default:
      return null;
  }
};

Project.propTypes = {
  project: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  style: PropTypes.oneOf(['even', 'odd']),
};

export default Project;
