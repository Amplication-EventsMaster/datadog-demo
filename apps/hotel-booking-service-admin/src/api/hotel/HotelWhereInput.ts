import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RoomListRelationFilter } from "../room/RoomListRelationFilter";

export type HotelWhereInput = {
  address?: StringNullableFilter;
  city?: StringNullableFilter;
  country?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  rating?: FloatNullableFilter;
  rooms?: RoomListRelationFilter;
};
