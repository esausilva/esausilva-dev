import React, { Fragment } from 'react';

import { Project } from './Project';
import { HeadingWrapper } from './styles/HeadingWrapper';
import { Hr } from './styles/Hr';
import { portfolio } from '../data';
import { evenOdd } from '../utils';

const Portfolio = () => {
  return (
    <>
      <HeadingWrapper id="nav-portfolio">
        <h1>Portfolio</h1>
      </HeadingWrapper>

      <p>
        Some of the web applications I have designed and developed over the
        years.
      </p>

      <div>
        {portfolio.map((project, idx) => (
          <Fragment key={project.project}>
            <Project {...project} style={evenOdd(idx)} />
            <Hr />
          </Fragment>
        ))}
      </div>
    </>
  );
};

export { Portfolio };
