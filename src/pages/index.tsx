import type { HeadFC } from 'gatsby';
import * as React from 'react';

import Application from '../modules/Application';

const IndexPage = () => {
  return <Application>1</Application>;
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
