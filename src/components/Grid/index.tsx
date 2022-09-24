import React, { ReactNode } from 'react';
import styled from 'styled-components';

import { Header, HeaderItem } from './Header';
import { Row, RowItem } from './Row';

const Body = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Container = styled.div`
  border-top: 1px solid var(--gray-8);
`;

type Props = {
  children: ReactNode;
};

const Grid = ({ children }: Props) => <Container>{children}</Container>;

Grid.Body = Body;
Grid.Header = Header;
Grid.HeaderItem = HeaderItem;
Grid.Row = Row;
Grid.RowItem = RowItem;

export default Grid;
