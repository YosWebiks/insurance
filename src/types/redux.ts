export interface Claim {
  id: string;
  policy_id: string;
  approved: boolean;
  amount: number;
  created_at: Date;
}

export interface Policy {
  id: string;
  name: string;
  price: number;
  created_at: Date;
  age: number;
}

export interface GenericPayload {
  id?: string;
  amount?: number;
  policy_id?:string
}
