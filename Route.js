import About from './src/components/About';
import Main from './src/components/Main';
import MainLayout from './MainLayout';
import ProductListing from './src/components/ProductListing';
import { createBrowserRouter} from 'react-router-dom';
import ProductDetails from './src/components/ProductDetails';

export const appRouter = createBrowserRouter([
    {
         path:'/',
         element: <MainLayout />,
         children: [{
              path: '/about',
              element: <About />
         },{
              path: '/',
              element: <Main />
         },{
            path: '/category/:categoryName',
            element: <ProductListing />
       },{
          path: '/product/:prodId',
          element: <ProductDetails />
     }]
    },
    
])