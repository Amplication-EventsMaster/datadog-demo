import { FeedbackUpdateManyWithoutCustomersInput } from "./FeedbackUpdateManyWithoutCustomersInput";
import { ReservationUpdateManyWithoutCustomersInput } from "./ReservationUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  dateOfBirth?: Date | null;
  email?: string | null;
  feedbacks?: FeedbackUpdateManyWithoutCustomersInput;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  reservations?: ReservationUpdateManyWithoutCustomersInput;
};
