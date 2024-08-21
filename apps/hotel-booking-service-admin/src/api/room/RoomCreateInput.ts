import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { ReservationCreateNestedManyWithoutRoomsInput } from "./ReservationCreateNestedManyWithoutRoomsInput";

export type RoomCreateInput = {
  hotel?: HotelWhereUniqueInput | null;
  numberField?: string | null;
  price?: number | null;
  reservations?: ReservationCreateNestedManyWithoutRoomsInput;
  typeField?: "Option1" | null;
};
