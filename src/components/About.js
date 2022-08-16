import React from 'react';
import styled from 'styled-components';

import { ImgFixed } from './ImgFixed';
import { HeadingWrapper } from './styles/HeadingWrapper';
import {
  stackFrontEnd,
  stackBackEnd,
  stackDatabase,
  stackOther,
} from '../data';

/**
 * Styled Components
 */
const Card = styled.section`
  border: 1px solid ${props => props.theme.border};
  border-radius: 5px;
  margin-bottom: 1em;
`;

const CardHeader = styled.div`
  padding: 0.7em;
  font-size: 1.8rem;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const CardBody = styled.div`
  padding: 0.7em;
  font-size: 1.2rem;
  display: flex;
  flex-wrap: wrap;
`;

const StackSkill = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5em;
  width: 80px;
  text-align: center;
  div {
    margin-bottom: 0.5em;
  }
`;

const ToRightParagraph = styled.p`
  justify-self: end;
`;

/**
 * Component
 */
const About = () => {
  return (
    <>
      <HeadingWrapper id="nav-about">
        <h1>About Me</h1>
      </HeadingWrapper>
      <p>
        Experienced Full-Stack Software Engineer currently working 100% as a
        back-end engineer on the .NET Stack.
      </p>
      <p>
        I build microservices and APIs for my current employer, a company in the
        financial sector. We build on top of an event-driven architecture using
        NServiceBus for communication between microservices and APIs. Fully
        automated deployments (CI/CD) with Azure DevOps.
      </p>
      <p>
        On my current role, I lead the development of one of our newest product
        offerings. I collaborate internally with multiple teams, as well as
        externally with clients and their development teams.
      </p>
      <p>
        Outside of being an engineer, I love hiking with my wife and son. I
        trained in Brazilian Jiu-Jitsu for 5 years, which I hope to pick up
        again, and nd I love learning new technologies.
      </p>
      <p>Below some of the technologies I am familiar with.</p>

      <Card>
        <CardHeader>Front-End</CardHeader>
        <CardBody>
          {stackFrontEnd.map(skill => (
            <StackSkill key={skill.src}>
              <ImgFixed src={skill.src} alt={skill.text} />
              {skill.text}
            </StackSkill>
          ))}
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Back-End</CardHeader>
        <CardBody>
          {stackBackEnd.map(skill => (
            <StackSkill key={skill.src}>
              <ImgFixed src={skill.src} alt={skill.text} />
              {skill.text}
            </StackSkill>
          ))}
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Database</CardHeader>
        <CardBody>
          {stackDatabase.map(skill => (
            <StackSkill key={skill.src}>
              <ImgFixed src={skill.src} alt={skill.text} />
              {skill.text}
            </StackSkill>
          ))}
        </CardBody>
      </Card>

      <Card>
        <CardHeader>Other</CardHeader>
        <CardBody>
          {stackOther.map(skill => (
            <StackSkill key={skill.src}>
              <ImgFixed src={skill.src} alt={skill.text} />
              {skill.text}
            </StackSkill>
          ))}
        </CardBody>
      </Card>

      <ToRightParagraph>
        <small>* Beginner Level</small>
      </ToRightParagraph>
    </>
  );
};

export { About };
