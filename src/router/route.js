import Home from "../page/Home/Home";
import {createBrowserRouter} from 'react-router-dom';
import Form from './../page/Form';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/addcontact",
      element: <Form/>,
    },
  ]);
  export default router