import { useRoutes } from 'react-router-dom';
import { routes } from './config';
import Layout from './layout';

export default function AppRoutes() {
  const element = useRoutes(routes);
  return <Layout>{element}</Layout>;
}
