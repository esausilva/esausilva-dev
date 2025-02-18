import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { HeadingWrapper } from './styles/HeadingWrapper';
import { openSource } from '../data';

const TabContainer = styled.div`
  display: flex;
  margin: 1em 0 1.5em 0;
`;

const TabList = styled.div`
  max-width: 60px;
  border-right: 1px solid ${({ theme }) => theme.colors.blueish};
  @media (min-width: ${({ theme }) => theme.media.medium}) {
    max-width: 450px;
  }
`;

const Tab = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.blueish};
  font-weight: bolder;
  position: relative;
  text-align: center;
  transition: background 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  &:hover {
    background-color: ${({ theme }) => theme.colors.tabBg};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.tabBg};
    &:after {
      content: '';
      position: absolute;
      right: -1px;
      top: 0;
      height: 100%;
      width: 3px;
      background: ${({ theme }) => theme.colors.blueish};
    }
  }
`;

const TabPanel = styled.div`
  padding: 0 2rem;
  flex: 1;
`;

const OpenSource = () => {
  const [activeTab, setActiveTab] = useState(0);
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

      <TabContainer>
        <TabList>
          {openSource.map((project, idx) => (
            <Tab
              key={`${project.project}-tab`}
              className={activeTab === idx ? 'active' : ''}
              onClick={() => setActiveTab(idx)}
            >
              {innerWidth <= 767 ? idx + 1 : project.project}
            </Tab>
          ))}
        </TabList>

        <TabPanel>
          <h2>{openSource[activeTab].project}</h2>
          <p>{openSource[activeTab].description}</p>
          <p>
            <em>{openSource[activeTab].stack}</em>
          </p>
          <p>
            <a
              href={openSource[activeTab].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repo Link
            </a>
          </p>
        </TabPanel>
      </TabContainer>
    </>
  );
};

export { OpenSource };
