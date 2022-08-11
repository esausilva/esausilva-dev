import React, { Fragment } from 'react';

import { Project } from './Project';
import { HeadingWrapper } from './styles/HeadingWrapper';
import { Hr } from './styles/Hr';
import { wip } from '../data';
import { evenOdd } from '../utils';

const WorkInProgress = () => {
  return (
    <>
      <HeadingWrapper id="nav-wip">
        <h1>Work in Progress</h1>
      </HeadingWrapper>

      <div>
        {wip.map((project, idx) => (
          <Fragment key={project.project}>
            <Project {...project} style={evenOdd(idx)} />
            <Hr />
          </Fragment>
        ))}
      </div>
    </>
  );
};

export { WorkInProgress };
