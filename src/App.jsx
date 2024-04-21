/* eslint-disable no-unused-vars */
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Landing } from './pages';
import { store } from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';


// Loader
import {loader as MainLoader} from "./pages/Landing"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
    },
  },
}); 

const router = createBrowserRouter([{
  path:"/",
  element: <Home/>,
  children:[
    {
      index:true,
      element: <Landing/>,
      loader:MainLoader(queryClient),
      
    }
  ]
}])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;