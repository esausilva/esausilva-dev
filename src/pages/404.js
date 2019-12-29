import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <p>
      Go back to my homepage at{' '}
      <a href="https://esausilva.dev">https://esausilva.dev</a>{' '}
    </p>
  </Layout>
);

export default NotFoundPage;
