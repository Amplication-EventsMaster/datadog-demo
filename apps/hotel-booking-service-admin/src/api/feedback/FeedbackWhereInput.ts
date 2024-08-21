import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type FeedbackWhereInput = {
  comment?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  hotel?: HotelWhereUniqueInput;
  id?: StringFilter;
  rating?: FloatNullableFilter;
};
