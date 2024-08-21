import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ReservationUpdateInput = {
  checkInDate?: Date | null;
  checkOutDate?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  room?: RoomWhereUniqueInput | null;
  status?: "Option1" | null;
};
