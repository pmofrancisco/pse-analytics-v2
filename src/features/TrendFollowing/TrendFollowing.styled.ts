import styled from 'styled-components';
import Grid from '../../components/Grid';

export const StockCode = styled(Grid.RowItem)`
  align-items: center;
  display: flex;
  font-weight: bold;
  gap: 8px;
`;

export const StockImage = styled.img`
  width: 24px;
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