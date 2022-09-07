import React from "react";
import {
  List,
  Create,
  Edit,
  SimpleForm,
  Datagrid,
  TextField,
  TextInput,
  EditButton,
  DeleteButton,
  DateInput,
  DateField,
} from "react-admin";

export const CategoriesList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />
        <EditButton basePath="/categoris" />
        <DeleteButton basePath="/categoris" />
      </Datagrid>
    </List>
  );
};

export const CategoriesCreate = (props) => {
  return (
    <Create title="Create User" {...props}>
      <SimpleForm>
        <TextInput type="number" source="id" />
        <TextInput source="name" />
        <DateInput source="createdAt" />
        <DateInput source="updatedAt" />
      </SimpleForm>
    </Create>
  );
};
export const CategoriesEdit = (props) => {
  return (
    <Edit title="Edit User" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <DateInput source="createdAt" />
        <DateInput source="updatedAt" />
      </SimpleForm>
    </Edit>
  );
};
