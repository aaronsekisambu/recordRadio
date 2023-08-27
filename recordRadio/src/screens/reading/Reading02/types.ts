export interface ITopToken {
  image: string;
  amount: number;
  volatility_value: number;
  type: EType;
}

export enum EType {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}

export interface IPost {
  image: string;
  title: string;
  date: string;
  description?: string;
}

export interface IPodcast {
  image: string;
  title: string;
  date: string;
}
