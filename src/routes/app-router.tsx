import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import LoaderCircle from '../components/ui/loaders/circle/circle';
import { routes } from './index';
import Layout from './layout';

export default function AppRoutes() {
  const element = useRoutes(routes);
  return (
    <Layout>
      <Suspense fallback={<LoaderCircle />}>{element}</Suspense>
    </Layout>
  );
}
