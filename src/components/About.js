import React from 'react';
import styled from 'styled-components';

import ImgFixed from './ImgFixed';
import { HeadingWrapper } from './styles/HeadingWrapper';

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
  display: flex;
  justify-content: flex-end;
`;

/**
 * Other
 */
const stackFrontEnd = [
  {
    text: 'JavaScript (Es6+)',
    src: 'javascript.png',
  },
  {
    text: 'jQuery',
    src: 'jquery.png',
  },
  {
    text: 'React',
    src: 'react.png',
  },
  {
    text: 'Vue.js *',
    src: 'vue.png',
  },
  {
    text: 'Apollo Client *',
    src: 'apollo-client.png',
  },
  {
    text: 'Next.js *',
    src: 'next-js.png',
  },
  {
    text: 'GatsbyJS *',
    src: 'gatsby-js.png',
  },
  {
    text: 'Styled Components',
    src: 'styled-components.png',
  },
  {
    text: 'GraphQL *',
    src: 'graphql.png',
  },
  {
    text: 'CSS3',
    src: 'css3.png',
  },
  {
    text: 'Sass',
    src: 'sass.png',
  },
  {
    text: 'CSS Grid',
    src: 'css-grid.png',
  },
  {
    text: 'Flexbox',
    src: 'flexbox.png',
  },
  {
    text: 'Bootstrap',
    src: 'bootstrap.png',
  },
];

const stackBackEnd = [
  {
    text: '.NET Framework',
    src: 'net-framework.png',
  },
  {
    text: '.NET Core',
    src: 'net-core.png',
  },
  {
    text: 'C#',
    src: 'c-sharp.png',
  },
  {
    text: 'Express.js *',
    src: 'express-js.png',
  },
  {
    text: 'Prisma *',
    src: 'prisma.png',
  },
  {
    text: 'GraphQL Yoga *',
    src: 'graphql-yoga.png',
  },
];

const stackDatabase = [
  {
    text: 'SQL Server',
    src: 'sql-server.png',
  },
  {
    text: 'SQL',
    src: 'sql.png',
  },
  {
    text: 'T-SQL',
    src: 't-sql.png',
  },
];

const stackOther = [
  {
    text: 'Webpack',
    src: 'webpack.png',
  },
  {
    text: 'npm',
    src: 'npm.png',
  },
  {
    text: 'Yarn',
    src: 'yarn.png',
  },
  {
    text: 'Git',
    src: 'git.png',
  },
  {
    text: 'GitHub',
    src: 'github.png',
  },
];

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
        I am a Full-Stack Software Engineer with 7+ years of professional
        experience in building web applications.
      </p>
      <p>
        When working on a project, I enjoy being involved in anything from the
        initial requirements, architectural design, database design to the
        actual development of the application (front-end as well as back-end).
        When it comes to databases, I wouldn't call myself a Database
        Administrator, but I do like to write the queries and stored procedures
        to be used in my applications.
      </p>
      <p>
        Outside of being an engineer, I am a Brazilian Jiu-Jitsu practitioner
        and hold a Blue Belt under Gracie Barra. I have been practicing the
        sport since 2015 and I really enjoy it, especially when I'm applying a
        choke to my sparring partner.
      </p>
      <p>Below are the technologies I am familiar with</p>

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

export default About;
