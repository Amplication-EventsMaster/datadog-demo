import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ReservationListRelationFilter } from "../reservation/ReservationListRelationFilter";

export type CustomerWhereInput = {
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  feedbacks?: FeedbackListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  phone2?: StringNullableFilter;
  reservations?: ReservationListRelationFilter;
};
