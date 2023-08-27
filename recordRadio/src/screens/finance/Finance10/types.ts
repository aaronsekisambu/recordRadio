export interface IWalletCard {
  marginRight?: number;
  is_active?: boolean;
  type: 'own' | 'owe';
  amount: number;
}

export interface ICategory {
  name: string;
  image: string;
}

export interface ITransaction {
  category: ICategory;
  name: string;
  amount: string;
  created_at: string;
}
