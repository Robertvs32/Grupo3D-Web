import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Relatorios from './routes/Relatorios';
import Relatorio from './routes/Relatorio';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Relatorios/>
      },
      {
        path: "relatorio/:id",
        element: <Relatorio/>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
