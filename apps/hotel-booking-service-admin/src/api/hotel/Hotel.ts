import { Feedback } from "../feedback/Feedback";
import { Room } from "../room/Room";

export type Hotel = {
  address: string | null;
  city: string | null;
  country: string | null;
  createdAt: Date;
  feedbacks?: Array<Feedback>;
  id: string;
  name: string | null;
  rating: number | null;
  rooms?: Array<Room>;
  updatedAt: Date;
};
