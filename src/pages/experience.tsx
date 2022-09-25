import type { HeadFC } from 'gatsby';
import * as React from 'react';

import Application from '../modules/Application';

const ExperiencePage = () => {
  return <Application>Experience page</Application>;
};

export default ExperiencePage;

export const Head: HeadFC = () => <title>My Experience</title>;
