import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Pages/Home';
import Main from '../LayOut/Main';

    const router = createBrowserRouter([
        {
          path : '/',
          element : <Main/>,
          children : [
            {path : '/', element : <Home/>},
            {path : 'home', element : <Home/>},
            // {path : 'service', element : <Service/>},
            // {path : 'experience', element : <Experience/>},
            // {path : 'contact', element : <Contact/>},
            // {path : 'about', element : <About/>},
            // {path : 'sing-in', element : <SingIn/>},
            // {path : 'sing-up', element : <SingUp />},
          ],
          errorElement :'error pages',
        }
      ])

export default router;