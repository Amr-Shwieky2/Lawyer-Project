import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import NotFound from './pages/NotFound';
import SharedLayout from './components/layout/SharedLayout';
import Dashboard from './pages/Dashboard';
import Specialty from './pages/Specialty';
import Customer from './pages/Customer';

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