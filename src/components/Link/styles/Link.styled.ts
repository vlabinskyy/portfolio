import { Link } from 'gatsby';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;

  &,
  &:visited {
    color: #cad8f3;

    ${({ $isActive }: { $isActive?: boolean }) => {
      return $isActive && `color: aquamarine;`;
    }}
  }
`;
