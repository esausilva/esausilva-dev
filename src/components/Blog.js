import React from 'react';
import styled from 'styled-components';

import { HeadingWrapper } from './styles/HeadingWrapper';
import { blogEntries } from '../data';

/**
 * Styled Components
 */
const Ul = styled.ul`
  margin: 1em 0 1em 2em;
`;

const More = styled.p`
  justify-self: end;
`;

/**
 * Component
 */
const Blog = () => {
  return (
    <>
      <HeadingWrapper id="nav-blog">
        <h1>Blog Entries</h1>
      </HeadingWrapper>

      <p>
        These are some blog entries I have published on my personal blog site
        and some other platforms.
      </p>

      <h2>EsauSilva.com</h2>
      <Ul>
        {blogEntries.esausilva.map(({ title, url }) => (
          <li key={url}>
            <a href={url} target="_blank">
              {title}
            </a>
          </li>
        ))}
      </Ul>
      <More>
        <a href="https://esausilva.com/" target="_blank">
          See More
        </a>
      </More>

      <h2>Medium.com</h2>
      <Ul>
        {blogEntries.medium.map(({ title, url }) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </Ul>
      <More>
        <a
          href="https://medium.com/@_esausilva"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more
        </a>
      </More>

      <h2>Newline</h2>
      <Ul>
        {blogEntries.newline.map(({ title, url }) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </li>
        ))}
      </Ul>

      {blogEntries.upcoming.length > 0 ? (
        <>
          <h2>Upcoming</h2>
          <Ul>
            {blogEntries.upcoming.map(({ title, description }) => (
              <li key={title}>
                {title}
                {description === '' ? null : (
                  <ul>
                    <li>{description}</li>
                  </ul>
                )}
              </li>
            ))}
          </Ul>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export { Blog };
