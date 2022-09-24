import styled from 'styled-components';
import Grid from '../../components/Grid';

export const StockCode = styled(Grid.RowItem)`
  font-weight: bold;
`;

export const NumberItem = styled(Grid.RowItem)`
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const NumberLabel = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NumberValue = styled.div``;