import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import NotFound from './pages/NotFound';
import Loadable from './components/Loadable';
import { lazy } from 'react';

const Home = Loadable(lazy(() => import('@/pages/Home')));
const PhotoDetail = Loadable(lazy(() => import('@/pages/PhotoDetail')));
const Auth = Loadable(lazy(() => import('@/pages/Auth')));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      {
        path: ':id',
        element: <PhotoDetail />,
      },
    ],
  },
  { path: 'login', element: <Auth /> },
  { path: 'register', element: <Auth /> },
]);

export function App() {
  return <RouterProvider router={router} />;
}

export default App;
