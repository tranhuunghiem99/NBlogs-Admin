import React from "react";
import {
  List,
  Create,
  Edit,
  SimpleForm,
  Datagrid,
  EmailField,
  TextField,
  TextInput,
  EditButton,
  DeleteButton,
} from "react-admin";

export const UserList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
        <EmailField source="email" />
        {/* <TextField source="phone" />
                <TextField source="company" label="Company" /> */}
        <EditButton basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
};

export const UserCreate = (props) => {
  return (
    <Create title="Create User" {...props}>
      <SimpleForm>
        <TextInput type="number" source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <TextInput source="company" />
      </SimpleForm>
    </Create>
  );
};
export const UserEdit = (props) => {
  return (
    <Edit title="Edit User" {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="phone" />
        <TextInput source="company" />
      </SimpleForm>
    </Edit>
  );
};
