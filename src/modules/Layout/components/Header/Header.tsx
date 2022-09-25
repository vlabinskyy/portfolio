import React from 'react';

import { Link } from '../../../../components';
import { HeaderStyled, NavigationListItem } from './styles/Header.styled';

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <nav>
        <ul>
          <NavigationListItem>
            <Link isActive to="/contact">
              Get In Touch
            </Link>
          </NavigationListItem>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export { Header };
