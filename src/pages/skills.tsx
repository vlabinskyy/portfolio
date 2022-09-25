import type { HeadFC } from 'gatsby';
import * as React from 'react';

import Application from '../modules/Application';

const SkillsPage = () => {
  return <Application>Skills page</Application>;
};

export default SkillsPage;

export const Head: HeadFC = () => <title>My Skills</title>;
