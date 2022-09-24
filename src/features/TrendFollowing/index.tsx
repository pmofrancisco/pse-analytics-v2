import React from 'react';
import { useRecoilValueLoadable} from 'recoil';

import Grid from '../../components/Grid';
import * as Feature from '../Feature.styled';
import { ITrendFollowing, trendFollowingState } from './selectors';

const TrendFollowing = () => {
  const { contents, state } = useRecoilValueLoadable(trendFollowingState);
  return (
    <Feature.Container>
      <Feature.Title>Trend Following</Feature.Title>
      <Grid>
        <Grid.Header>
          <Grid.HeaderItem>STOCK CODE</Grid.HeaderItem>
          <Grid.HeaderItem textAlign='right'>SMA 50</Grid.HeaderItem>
          <Grid.HeaderItem textAlign='right'>SMA 100</Grid.HeaderItem>
          <Grid.HeaderItem textAlign='right'>CLOSE PRICE</Grid.HeaderItem>
          <Grid.HeaderItem textAlign='right'>CLOSE PRICE 50</Grid.HeaderItem>
          <Grid.HeaderItem textAlign='right'>CLOSE PRICE DIFF</Grid.HeaderItem>
          <Grid.HeaderItem textAlign='right'>AVERAGE VALUE 50</Grid.HeaderItem>
        </Grid.Header>
        <Grid.Body>
          {state === 'hasValue' && contents.map(({
            AverageValue50,
            ClosePrice,
            ClosePriceDiff,
            HighestClosePrice50,
            SMA50,
            SMA100,
            StockCode,
          }) => (
            <Grid.Row key={StockCode}>
              <Grid.RowItem>{StockCode}</Grid.RowItem>
              <Grid.RowItem textAlign='right'>{SMA50}</Grid.RowItem>
              <Grid.RowItem textAlign='right'>{SMA100}</Grid.RowItem>
              <Grid.RowItem textAlign='right'>{ClosePrice}</Grid.RowItem>
              <Grid.RowItem textAlign='right'>{HighestClosePrice50}</Grid.RowItem>
              <Grid.RowItem textAlign='right'>{ClosePriceDiff}</Grid.RowItem>
              <Grid.RowItem textAlign='right'>{AverageValue50}</Grid.RowItem>
            </Grid.Row>
          ))}
        </Grid.Body>
      </Grid>
    </Feature.Container>
  );
};

export default TrendFollowing;
