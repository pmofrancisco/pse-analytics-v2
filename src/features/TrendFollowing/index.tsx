import React from 'react';
import { useRecoilValueLoadable} from 'recoil';

import Grid from '../../components/Grid';
import * as Feature from '../Feature.styled';
import { trendFollowingState } from './selectors';

import { stockImages } from './stock-images';
import * as Styled from './TrendFollowing.styled';

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
        </Grid.Header>
        <Grid.Body>
          {state === 'hasValue' && contents.slice(0, 15).map(({
            AverageValue50,
            ClosePrice,
            ClosePriceDiff,
            HighestClosePrice50,
            SMA50,
            SMA100,
            StockCode,
          }) => (
            <Grid.Row key={StockCode}>
              <Styled.StockCode>
                <Styled.StockImage alt={StockCode} src={stockImages[StockCode] ?? stockImages.DEFAULT} />
                {StockCode}
              </Styled.StockCode>
              <Styled.NumberItem>
                <Styled.NumberLabel>SMA 50</Styled.NumberLabel>
                <Styled.NumberValue>{SMA50.toFixed(4).toLocaleString()}</Styled.NumberValue>
              </Styled.NumberItem>
              <Styled.NumberItem>
                <Styled.NumberLabel>SMA 100</Styled.NumberLabel>
                <Styled.NumberValue>{SMA100.toFixed(4).toLocaleString()}</Styled.NumberValue>
              </Styled.NumberItem>
              <Styled.NumberItem>
                <Styled.NumberLabel>Close Price</Styled.NumberLabel>
                <Styled.NumberValue>{ClosePrice.toFixed(4).toLocaleString()}</Styled.NumberValue>
              </Styled.NumberItem>
              <Styled.NumberItem>
                <Styled.NumberLabel>Highest Close Price 50</Styled.NumberLabel>
                <Styled.NumberValue>{HighestClosePrice50.toFixed(4).toLocaleString()}</Styled.NumberValue>
              </Styled.NumberItem>
              <Styled.NumberItem>
                <Styled.NumberLabel>Close Price Diff</Styled.NumberLabel>
                <Styled.NumberValue>{ClosePriceDiff.toFixed(4).toLocaleString()}</Styled.NumberValue>
              </Styled.NumberItem>
            </Grid.Row>
          ))}
        </Grid.Body>
      </Grid>
    </Feature.Container>
  );
};

export default TrendFollowing;
