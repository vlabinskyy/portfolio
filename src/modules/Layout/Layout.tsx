import React, { ReactNode } from 'react';

import { Content, Header, Sidebar, Wrapper } from './components';

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Sidebar />
      <Content>{children}</Content>
    </Wrapper>
  );
};

export { Layout };
