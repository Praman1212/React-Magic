import React from 'react';
import { StrictMode } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'; // Import createRoot
import Usestate from './Usestate.jsx';
import Props from './Props.jsx';
import PassGen from './PassGen.jsx';
import Todolist from './todolist/Todolist.jsx';

const router = createBrowserRouter([
  {
    path: "/useState",
    element: <Usestate />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Usestate />
    <PassGen />
    <Todolist />
  </StrictMode>
);
