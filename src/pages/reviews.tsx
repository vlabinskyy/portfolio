import type { HeadFC } from 'gatsby';
import * as React from 'react';

import Application from '../modules/Application';

const ReviewsPage = () => {
  return <Application>Reviews page</Application>;
};

export default ReviewsPage;

export const Head: HeadFC = () => <title>My Reviews</title>;
