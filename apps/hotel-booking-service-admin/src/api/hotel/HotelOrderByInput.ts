import { SortOrder } from "../../util/SortOrder";

export type HotelOrderByInput = {
  address?: SortOrder;
  city?: SortOrder;
  country?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  rating?: SortOrder;
  updatedAt?: SortOrder;
};
