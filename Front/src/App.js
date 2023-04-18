import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/login/Login';
import Register from './components/registro/register';
import Birds from './components/birds/Birds'
// import Plants from './components/plants/Plants';
import Thanks from './components/thanks/Thanks';
import AllBirds from './components/results/AllBirds';


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<><Home />  </>
    },
    { 
      path:"/Register",
      element:<><Register />  </>
    },
    {
      path:"/Login",
      element:<><Login /> </>
    },
    {
      path:"/Discovery",
      element:<><Birds />  </>
    },
    {
      path:"/Thanks",
      element:<><Thanks /></>
    },
    {
      path:"/Results",
      element:<><AllBirds /></>
    },
    

  ]);

  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;

