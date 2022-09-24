import React from 'react';
import { Link as BaseLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon, { SideMenuIconType } from './Icon';

const Link = styled(BaseLink)`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 8px;
  text-decoration: none;

  &:hover {
    background-color: var(--gray-8);
  }
`;

type Props = {
  icon: SideMenuIconType;
  to: string;
};

const Item = ({ icon, to }: Props) => (
  <Link to={to}>
    <Icon type={icon} />
  </Link>
);

export default Item;
