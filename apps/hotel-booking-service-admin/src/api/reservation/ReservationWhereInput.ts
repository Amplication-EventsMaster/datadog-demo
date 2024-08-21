import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { RoomWhereUniqueInput } from "../room/RoomWhereUniqueInput";

export type ReservationWhereInput = {
  checkInDate?: DateTimeNullableFilter;
  checkOutDate?: DateTimeNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  room?: RoomWhereUniqueInput;
  status?: "Option1";
};
