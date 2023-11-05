import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SharedLayout from './components/layout/SharedLayout';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import Dashboard from './pages/Dashboard/Dashboard';
import Specialty from './pages/Specialty/Specialty';
import Customer from './pages/Customer/Customer';
import NotFound from './pages/NotFound/NotFound';


const Router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'logIn',
        element: <LogIn />,
      },
      {
        path: 'Dashboard',
        element: <Dashboard />,
      },
      {
        path: 'Specialty',
        element: <Specialty />,
      },
      {
        path: 'Customer',
        element: <Customer />,
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={Router}/>
    </>
  )
}

export default App