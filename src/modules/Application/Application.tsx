import React, { ReactNode } from 'react';

import { Layout } from '../Layout/Layout';
import { Fonts } from './styles/fonts';
import { GlobalCss } from './styles/global';
import { NormalizeCss } from './styles/normalize';
import { ResetCss } from './styles/reset';
import { Typography } from './styles/typography';

const Application: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <ResetCss />
      <NormalizeCss />
      <Fonts />
      <Typography />
      <GlobalCss />
      <Layout>{children}</Layout>
    </>
  );
};

export { Application };
