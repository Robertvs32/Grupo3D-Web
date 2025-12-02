import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Relatorios from './routes/Relatorios/Relatorios';
import Relatorio from './routes/Relatorio/Relatorio';
import Placas from './routes/Placas/Placas';

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
      },
      {
        path: "usuarios",
        element: <Placas/>
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
