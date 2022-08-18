import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';

import { HeadingWrapper } from './styles/HeadingWrapper';
import { openSource } from '../data';

import 'react-web-tabs/dist/react-web-tabs.css';

const TabsCustom = styled(Tabs)`
  margin: 1em 0 1.5em 0;
`;

const TabListCustom = styled(TabList)`
  max-width: 450px;
  @media (max-width: ${({ theme }) => theme.media.small}) {
    max-width: 60px;
  }
`;

const TabCustom = styled(Tab)`
  color: ${({ theme }) => theme.colors.blueish};
  font-weight: bolder;
  &[aria-selected='true']:after {
    border-right: 3px solid ${({ theme }) => theme.colors.blueish} !important;
  }
`;

const OpenSource = () => {
  const [innerWidth, setInnerWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== `undefined`) {
      setInnerWidth(window.innerWidth);
    }
  }, []);

  return (
    <>
      <HeadingWrapper id="nav-oss">
        <h1>Open Source</h1>
      </HeadingWrapper>

      <p>
        These are some of my open source projects. Visit my GitHub{' '}
        <a
          href="https://github.com/esausilva"
          target="_blank"
          rel="noopener noreferrer"
        >
          profile
        </a>{' '}
        to see the rest of my repos.
      </p>

      <div>
        <TabsCustom defaultTab="0" vertical>
          <TabListCustom>
            {openSource.map((project, idx) => (
              <TabCustom tabFor={`${idx}`} key={`${project.project}-tab`}>
                {innerWidth <= 767 ? idx + 1 : project.project}
              </TabCustom>
            ))}
          </TabListCustom>
          {openSource.map((project, idx) => (
            <TabPanel tabId={`${idx}`} key={`${project.project}-panel`}>
              <h2>{project.project}</h2>
              <p>{project.description}</p>
              <p>
                <em>{project.stack}</em>
              </p>
              <p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Repo Link
                </a>
              </p>
            </TabPanel>
          ))}
        </TabsCustom>
      </div>
    </>
  );
};

export { OpenSource };
