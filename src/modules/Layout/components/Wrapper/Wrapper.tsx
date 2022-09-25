import React from 'react';

import { WrapperStyled } from './styles/Wrapper.styled';

const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export { Wrapper };
