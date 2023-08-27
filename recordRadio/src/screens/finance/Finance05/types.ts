export interface ICategory {
  name: string;
  image: string;
}

export interface IWallet {
  id?: string;
  category: ICategory;
  amount: number;
  color: string;
}
