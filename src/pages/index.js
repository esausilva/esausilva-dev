import React from 'react';

import { Layout } from '../components/Layout';
import { About } from '../components/About';
import { Portfolio } from '../components/Portfolio';
// import { WorkInProgress } from '../components/WorkInProgress';
import { OpenSource } from '../components/OpenSource';
import { Blog } from '../components/Blog';

const IndexPage = () => (
  <Layout>
    <About />
    <Portfolio />
    {/* <WorkInProgress /> */}
    <OpenSource />
    <Blog />
  </Layout>
);

export default IndexPage;
