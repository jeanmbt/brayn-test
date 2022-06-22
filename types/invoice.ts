import { Item } from "./item";

export interface Invoice {
  Debitor: {
    name: string;
    phone_number: string | undefined;
    email: string | undefined;
    postcode: string | undefined;
    street: string | undefined;
    location: string | undefined;
  };
  balance: number | undefined;
  billing_number: string | undefined;
  brutto: number | undefined;
  date_paid: number | undefined;
  due_date: string | undefined;
  foreign_currency: string | undefined;
  id: number | undefined;
  items: Item[];
  netto: number | undefined;
  payment_method: string | undefined;
  receipt_date: string | undefined;
  receipt_id: number | undefined;
  service_period: string | undefined;
  state: string | undefined;
}
