import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { HotelWhereUniqueInput } from "../hotel/HotelWhereUniqueInput";

export type FeedbackUpdateInput = {
  comment?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  hotel?: HotelWhereUniqueInput | null;
  rating?: number | null;
};
