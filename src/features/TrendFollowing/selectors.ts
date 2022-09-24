import axios from 'axios';
import { selector } from 'recoil';

export interface ITrendFollowing {
  AverageValue50: number;
  ClosePrice: number;
  ClosePriceDiff: number;
  HighestClosePrice50: number;
  SMA100: number;
  SMA50: number;
  StockCode: string;
};

export const trendFollowingState = selector<ITrendFollowing[]>({
  key: 'trendFollowing',
  get: async () => {
    try {
      const response = await axios.get<ITrendFollowing[]>('/api/trend-following');
      const { data } = response;
      return data;
    } catch {
      throw new Error();
    }
  },
});