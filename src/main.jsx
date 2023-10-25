import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import AllClass from './Pages/AllClass/AllClass';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Dashboard from './Layout/Dashboard';
import MyCart from './Pages/Dashboard/MyCart';
import AllUsers from './Pages/AllUsers/AllUsers';
import AllInstructors from './Pages/AllInstructors/AllInstructors';
import AddClasses from './Pages/AddClasses/AddClasses';
import AboutUs from './Pages/AboutUs/AboutUs';
import Details from './Pages/Details/Details';
const queryClient = new QueryClient()


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/about',
        element: <AboutUs></AboutUs>
      },
      {
        path: '/classes',
        element: <PrivateRoute><AllClass></AllClass></PrivateRoute>
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({ params }) => fetch(`https://melody-master-server-dhy7d0z7v-nahidahmmed.vercel.app/class/${params.id}`)
      },
      {
        path: '/instructors',
        element: <PrivateRoute><AllInstructors></AllInstructors></PrivateRoute>
      },
    ]
  },
  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'users',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'addclass',
        element: <AddClasses></AddClasses>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>,
)
