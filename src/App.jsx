import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, Landing } from './pages';

const router = createBrowserRouter([{
  path:"/",
  element: <Home/>,
  children:[
    {
      index:true,
      element: <Landing/>
    }
  ]
}])

function App() {
  return (
   
          <RouterProvider router={router} />
         
  );
}

export default App;