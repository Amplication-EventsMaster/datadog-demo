import { Customer } from "../customer/Customer";
import { Hotel } from "../hotel/Hotel";

export type Feedback = {
  comment: string | null;
  createdAt: Date;
  customer?: Customer | null;
  hotel?: Hotel | null;
  id: string;
  rating: number | null;
  updatedAt: Date;
};
