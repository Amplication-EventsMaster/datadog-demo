import { Customer } from "../customer/Customer";
import { Room } from "../room/Room";

export type Reservation = {
  checkInDate: Date | null;
  checkOutDate: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  room?: Room | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
