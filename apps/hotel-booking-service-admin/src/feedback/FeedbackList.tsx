import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { HOTEL_TITLE_FIELD } from "../hotel/HotelTitle";

export const FeedbackList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Feedbacks"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="comment" source="comment" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Hotel" source="hotel.id" reference="Hotel">
          <TextField source={HOTEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="rating" source="rating" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
