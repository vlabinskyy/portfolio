import React, { ReactNode } from 'react';

import { ContentStyled } from './styles/ContentStyled';

const Content: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <ContentStyled>{children}</ContentStyled>;
};

export { Content };
