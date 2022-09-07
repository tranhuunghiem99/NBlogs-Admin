import React from "react";
import { Admin, Resource } from "react-admin";
// import restProvider from 'ra-data-simple-rest'
import authoPro from "./components/authProvider";
import { PostShow, PostList, PostEdit, PostCreate } from "./components/Post";
import {
  CategoriesList,
  CategoriesEdit,
  CategoriesCreate,
} from "./components/Categories";
import { UserList, UserEdit, UserCreate } from "./components/User";
import Dashboard from "./components/Dashboar";
import jsonServerProvider from "ra-data-json-server";
// import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CategoryIcon from '@material-ui/icons/Category';
import BookIcon from '@material-ui/icons/Book';


const dataProvider = jsonServerProvider(
  "https://blog-json-api-react.herokuapp.com"
);
// const dataProvider = restProvider('http://localhost:3000')
function App() {
  return (
    <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authoPro}>
      <Resource
        options={{ label: "Blog Post" }}
        name="blogs"
        icon={BookIcon}
        list={PostList}
        show={PostShow}
        create={PostCreate}
        edit={PostEdit}
      />

      <Resource
        options={{ label: "Categories" }}
        name="categories"
        icon={CategoryIcon}
        list={CategoriesList}
        create={CategoriesCreate}
        edit={CategoriesEdit}
      />
      <Resource
        options={{ label: "Users" }}
        name="users"
        icon={PersonAddIcon}
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  );
}

export default App;
