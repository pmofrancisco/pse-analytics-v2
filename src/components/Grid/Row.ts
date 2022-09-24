import React from 'react';
import styled from 'styled-components';

export const Row = styled.li`
  align-items: center;
  border-bottom: 1px solid var(--gray-8);
  display: grid;
  gap: 8px;
  padding: 8px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(7, 1fr);
  }
`;

export const RowItem = styled.div<{
  textAlign?: 'left' | 'center' | 'right'
}>`
  text-align: ${({ textAlign = 'left' }) => textAlign};
`;
