import type { HeadFC } from 'gatsby';
import * as React from 'react';

import Application from '../modules/Application';

const ContactPage = () => {
  return <Application>Get In Touch page</Application>;
};

export default ContactPage;

export const Head: HeadFC = () => <title>Get In Touch</title>;
