export interface ICategory {
  name: string;
  image: string;
}

export interface ITransaction {
  category: ICategory;
  name: string;
  amount: string;
}
