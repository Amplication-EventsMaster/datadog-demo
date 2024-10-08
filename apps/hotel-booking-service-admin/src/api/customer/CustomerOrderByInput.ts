import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  phone2?: SortOrder;
  updatedAt?: SortOrder;
};
