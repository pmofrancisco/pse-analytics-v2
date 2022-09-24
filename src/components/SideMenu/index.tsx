import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Item from './Item';

const Container = styled.div`
  background-color: var(--gray-9);
  height: 100%;
  position: fixed;
  top: 0;
`;

type Props = {
  children: ReactNode;
};

const SideMenu = ({ children }: Props) => (
  <Container>
    {children}
  </Container>
);

SideMenu.Item = Item;

export default SideMenu;
