import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { HotelTitle } from "../hotel/HotelTitle";

export const FeedbackEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="comment" multiline source="comment" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <ReferenceInput source="hotel.id" reference="Hotel" label="Hotel">
          <SelectInput optionText={HotelTitle} />
        </ReferenceInput>
        <NumberInput label="rating" source="rating" />
      </SimpleForm>
    </Edit>
  );
};
