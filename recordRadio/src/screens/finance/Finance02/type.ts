export interface ICategory {
  name: string;
  image: string;
}

export enum StatusEnum {
  Waiting = 'Waiting',
  Paid = 'Paid',
  Expired = 'Expired',
  Complete = 'Complete',
}

export interface IBill {
  category: ICategory;
  amount: number;
  status: StatusEnum;
  due_date: string;
  bill_members?: IBillMember[];
}

export interface IUser {
  avatar: string;
}

export interface IBillMember {
  bill_id?: string;
  user_id?: string;
  is_paid: boolean;
  User: IUser;
}
