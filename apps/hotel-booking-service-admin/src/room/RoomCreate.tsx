import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { HotelTitle } from "../hotel/HotelTitle";
import { ReservationTitle } from "../reservation/ReservationTitle";

export const RoomCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="hotel.id" reference="Hotel" label="Hotel">
          <SelectInput optionText={HotelTitle} />
        </ReferenceInput>
        <TextInput label="number" source="numberField" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput
          source="reservations"
          reference="Reservation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReservationTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="typeField"
          label="type"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
