import Home from "../page/Home/Home";
import {createBrowserRouter} from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
  ]);
  export default router