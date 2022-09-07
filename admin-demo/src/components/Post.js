import React from "react";
import {
  List,
  SimpleList,
  SimpleShowLayout,
  RichTextField,
  Show,
  ReferenceField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  ShowButton,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import RichTextInput from "ra-input-rich-text";
import { useMediaQuery } from '@material-ui/core';
// import MarkdownInput from 'ra-input-markdown';
// import Editor from './Editor/Editor'
const PostTitle = ({ record }) => {
      return <span>Post {record ? `"${record.name}"` : ''}</span>;
  };
const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
      <SelectInput optionText="name" />
  </ReferenceInput>,
  <ReferenceInput source="categoryId" label="Category" reference="categories" allowEmpty>
      <SelectInput optionText="name" />
  </ReferenceInput>,
];
export const PostList = (props) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  return (
    <List filters={postFilters} {...props}>
      {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => `${record.author} views`}
                    tertiaryText={record => new Date(record.createdAt).toLocaleDateString()}
                />
            ) : (
      <Datagrid rowClick="edit">
        {/* <TextField source="id" /> */}
        <ReferenceField source="userId" reference="users">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField source="categoryId" reference="categories">
          <TextField source="name" />
        </ReferenceField>
        {/* <TextField source="author" /> */}
        <TextField source="name" />
        {/* <TextField source="textparagraphs" /> */}
        <TextField source="typetrending" />
        <DateField source="createdAt" />
        <DateField source="updatedAt" />

        {/* Button */}
        <ShowButton basePath="/blogs" />
        <EditButton basePath="/blogs" />
        <DeleteButton basePath="/blogs" />
      </Datagrid>
      )}
    </List>
  );
};
export const PostShow = (props) => (
  <Show {...props}>
    <SimpleShowLayout>
      <TextField source="author" />
      <TextField source="name" />
      <TextField source="thumbnailUrl" />
      <TextField source="typetrending" />
      <DateField source="createdAt" />
      <DateField source="updatedAt" />
      <RichTextField source="textparagraphs" />
    </SimpleShowLayout>
  </Show>
);
export const PostCreate = (props) => {
  return (
    <Create title="Create a Post" {...props}>
      <SimpleForm>
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput source="categoryId" reference="categories">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="name" />
        <TextInput source="thumbnailUrl" />
        {/* <RichTextInput source='thumbnailUrl' toolbar={['image']}/> */}
        <TextInput source="typetrending" />
        <DateInput label="Published" source="createdAt" />
        <RichTextInput
          source="textparagraphs"
          toolbar={[
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction

            [{ size: ["small", false, "large", "huge"] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            ["image", "video"],
            [{ align: [] }],

            ["clean"],
          ]}
        />
        {/* <MarkdownInput source="textparagraphs" /> */}
        {/* <Editor source='textparagraphs'/> */}
      </SimpleForm>
    </Create>
  );
};

export const PostEdit = (props) => {
  return (
    <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ReferenceInput source="categoryId" reference="categories">
          <SelectInput optionText="name" />
        </ReferenceInput>
        <TextInput source="name" />
        <TextInput source="thumbnailUrl" />
        {/* <RichTextInput source='thumbnailUrl' toolbar={['image']}/> */}
        <TextInput source="typetrending" />
        <DateInput label="Published" source="createdAt" />
        <DateInput label="Published" source="updatedAt" />
        <RichTextInput
          source="textparagraphs"
          toolbar={[
            ["bold", "italic", "underline", "strike"], // toggled buttons
            ["blockquote", "code-block"],

            [{ header: 1 }, { header: 2 }], // custom button values
            [{ list: "ordered" }, { list: "bullet" }],
            [{ script: "sub" }, { script: "super" }], // superscript/subscript
            [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
            [{ direction: "rtl" }], // text direction

            [{ size: ["small", false, "large", "huge"] }], // custom dropdown
            [{ header: [1, 2, 3, 4, 5, 6, false] }],

            [{ color: [] }, { background: [] }], // dropdown with defaults from theme
            [{ font: [] }],
            ["image", "video"],
            [{ align: [] }],

            ["clean"],
          ]}
        />
        {/* <MarkdownInput source="textparagraphs" /> */}
        {/* <Editor/> */}
      </SimpleForm>
    </Edit>
  );
};
