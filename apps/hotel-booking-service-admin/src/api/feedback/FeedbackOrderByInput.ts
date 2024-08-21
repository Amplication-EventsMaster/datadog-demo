import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  comment?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  hotelId?: SortOrder;
  id?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
