/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, title, children }) {
  const { site, socialCard } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            url
          }
        }
        socialCard: allFile(
          filter: { name: { regex: "/esau-silva-social-card/" } }
        ) {
          edges {
            node {
              publicURL
            }
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const titleTemplate = `${title} | ${site.siteMetadata.title}`;
  const socialCardUrl = `${site.siteMetadata.url}${socialCard.edges[0].node.publicURL}`;

  return (
    <>
      <title>{titleTemplate}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={socialCardUrl} />
      <meta name="og:title" content={titleTemplate} />
      <meta name="og:description" content={metaDescription} />
      <meta name="og:type" content="website" />
      <meta name="og:url" content={site.siteMetadata.url} />
      <meta name="og:image" content={socialCardUrl} />
      <meta name="og:image:width" content="1200" />
      <meta name="og:image:height" content="630" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:image" content={socialCardUrl} />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      {children}
    </>
  );
}

SEO.defaultProps = {
  description: ``,
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export { SEO as Seo };
