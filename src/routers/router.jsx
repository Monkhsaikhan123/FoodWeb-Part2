import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from '../App';
  import Home from '../home/Home';
  import Shop from "../shop/Shop";
  import About from "../components/About";
  import Blog from "../components/Blog";
  import SingleBook from "../shop/SingleBook";
  import DashboardLayout from "../dashboard/DashboardLayout";
  import Dashboard from "../dashboard/Dashboard";
  import UploadFood from "../dashboard/UploadFood";
  import ManageFood from "../dashboard/ManageFood";
  import EditFood from "../dashboard/EditFood";
  import Signup from "../components/Signup";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children : [
        {
            path: '/',
            element: <Home/>
        },
        {
            path: '/shop',
            element: <Shop/>
        },
        {
            path:'/about',
            element: <About/>
        },
        {
            path:'/blog',
            element: <Blog/>
        },{
            path:'/food/:id',
            element: <SingleBook/>,
            loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
        },
        
      ]
      
    },
    {
      path:'/admin/dashboard',
      element: <DashboardLayout/>,
      children:[
        {
          path:'/admin/dashboard',
          element: <Dashboard/>,
        },
        {
          path:'/admin/dashboard/upload',
          element:<UploadFood/>,
        },
        {
          path:'/admin/dashboard/manage',
          element:<ManageFood/>,
        },
        {
          path:'/admin/dashboard/edit-food/:id',
          element:<EditFood/>,
          loader: ({params}) => fetch(`http://localhost:5000/food/${params.id}`)
        }
      ]
    },
    {
      path:'signup',
      element: <Signup/>
    }
  ]);
  export default router;