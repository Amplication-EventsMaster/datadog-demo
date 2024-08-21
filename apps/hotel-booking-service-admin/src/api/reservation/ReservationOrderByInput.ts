import { SortOrder } from "../../util/SortOrder";

export type ReservationOrderByInput = {
  checkInDate?: SortOrder;
  checkOutDate?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  id?: SortOrder;
  roomId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
