import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/login/Login';
import Register from './components/registro/register';
import Birds from './components/birds/Birds'
import Plants from './components/plants/Plants';
import Thanks from './components/thanks/Thanks';
import Map from './components/map/Map';
import Insects from './components/insects/Insects';
import AllData from './components/results/AllData';
import UsersList from './components/dashboard/usersList';


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<> <Home />  </>
    },
    { 
      path:"/register",
      element:<><Register />  </>
    },
    {
      path:"/login",
      element:<><Login /> </>
    },
    {
      path:"/map",
      element:<><Map /> </>
    },
    {
      path:"/discovery",
      element:<> <Birds /> <Plants /> <Insects />  </>
    },
    {
      path:"/thanks",
      element:<> <Thanks /></>
    },
    {
      path:"/results",
      element:<><AllData /></>
    },
    {
      path:"/userlist",
      element:<><UsersList /></>
    },
    

  ]);

  return (
    <div className="App">
          <RouterProvider router={router} />
    </div>
  );
}

export default App;

