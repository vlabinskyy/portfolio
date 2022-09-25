import React from 'react';

import { LinkProps } from './interfaces';
import { LinkStyled } from './styles/Link.styled';

const Link: React.FC<LinkProps> = ({ children, to, isActive }) => {
  console.log(isActive, 'isActive');
  return (
    <LinkStyled to={to} $isActive={isActive}>
      {children}
    </LinkStyled>
  );
};

export { Link };
