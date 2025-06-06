import { Navigate } from 'react-router-dom';

import { lazy } from 'react';

const Form = lazy(() => import('./form'));

const Result = lazy(() => import('./result'));

export const routes = [
  {
    path: '/',
    element: <Navigate to="/en" replace />
  },
  { path: ':locale', element: <Form /> },
  { path: ':locale/', element: <Form /> },
  { path: ':locale/result', element: <Result /> }
];
