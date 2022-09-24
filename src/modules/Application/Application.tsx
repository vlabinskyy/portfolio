import React, { ReactNode } from 'react';

import { NormalizeCss } from './styles/normalize';
import { ResetCss } from './styles/reset';
import { Typography } from './styles/typography';

const Application: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <ResetCss />
      <NormalizeCss />
      <Typography />
      {children}
    </>
  );
};

export { Application };
