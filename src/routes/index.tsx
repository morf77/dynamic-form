import { Navigate } from 'react-router-dom';
import PageForm from './form';
import PageResult from './result';

export const routes = [
  {
    path: '/',
    element: <Navigate to="/en" replace />
  },
  { path: ':locale', element: <PageForm /> },
  { path: ':locale/', element: <PageForm /> },
  { path: ':locale/result', element: <PageResult /> }
];
