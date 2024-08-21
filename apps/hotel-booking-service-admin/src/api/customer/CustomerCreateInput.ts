import { FeedbackCreateNestedManyWithoutCustomersInput } from "./FeedbackCreateNestedManyWithoutCustomersInput";
import { ReservationCreateNestedManyWithoutCustomersInput } from "./ReservationCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  dateOfBirth?: Date | null;
  email?: string | null;
  feedbacks?: FeedbackCreateNestedManyWithoutCustomersInput;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  reservations?: ReservationCreateNestedManyWithoutCustomersInput;
};
