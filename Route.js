import About from './src/components/About';
//import Main from './src/components/Main';
import MainLayout from './MainLayout';
import ProductListing from './src/components/ProductListing';
import { createBrowserRouter} from 'react-router-dom';
//import ProductDetails from './src/components/ProductDetails';
import { lazy, Suspense } from 'react';
import Shimmer from './src/components/Shimmer';


//Chunking
//dynamic import
//lazy loading
// dynamic bundling
// code splitting 
// all above names are different but they are trying to resolve the same problem statement which is reduce the size of bundling or create multiple bundles

const ProductDetails = lazy(function(){
     return import("./src/components/ProductDetails");
})
const Main = lazy(function(){
     return import("./src/components/Main");
})
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
          element: <Suspense fallback={<Shimmer/>}>
                    <ProductDetails />
               </Suspense>
     }]
    },
    
])