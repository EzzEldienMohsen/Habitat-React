/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Cart, Home, Landing, MainPage, SingleProduct, WishList } from './pages';
import { store } from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


// Loader
import {loader as MainLoader} from "./pages/Landing"
import {loader as ProductsLoader} from "./pages/MainPage"
import {loader as singleProductLoader} from "./pages/SingleProduct"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
}); 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: MainLoader(queryClient),
      },
      {
        path: '/:file/:page',
        element: <MainPage />,
        loader: ProductsLoader(queryClient),
      },
      {
        path: '/products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader(queryClient),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/wishList',
        element: <WishList />,
      }
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;