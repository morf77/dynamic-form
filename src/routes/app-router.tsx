import { useRoutes } from 'react-router-dom';
import { routes } from './index';
import Layout from './layout';

export default function AppRoutes() {
  const element = useRoutes(routes);
  return <Layout>{element}</Layout>;
}
