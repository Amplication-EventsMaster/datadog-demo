import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { ReservationUpdateManyWithoutRoomsInput } from "./ReservationUpdateManyWithoutRoomsInput";

export type RoomUpdateInput = {
  hotel?: HotelWhereUniqueInput | null;
  numberField?: string | null;
  price?: number | null;
  reservations?: ReservationUpdateManyWithoutRoomsInput;
  typeField?: "Option1" | null;
};
