import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type RoomWhereInput = {
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
  numberField?: StringNullableFilter;
  price?: FloatNullableFilter;
  reservations?: ReservationListRelationFilter;
  typeField?: "Option1";
};
