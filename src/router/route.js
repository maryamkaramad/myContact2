import Home from "../page/Home/Home";
import {createBrowserRouter} from 'react-router-dom';
import Form from './../page/Form';
import SingleContact from "../page/SingleContact/SingleContact";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/addcontact",
      element: <Form/>,
    },
    {
      path: "/updatecontact/:contactId",
      element: <Form/>,
    },
    {
      path: "/contacts/:contactId",
      element: <SingleContact/>,
    },
  ]);
  export default router