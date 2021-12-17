import { 
  BrowserRouter,
  Routes,
  Route } from 'react-router-dom';

import './style/App.css';
import Nav from './features/navigation/Nav';
import Home from './features/home/components/Home';
import CreateProfile from './features/createProfile/components/CreateProfile';
import Profiles from './features/profile/components/Profiles';

function App() {

  const title = 'Proyecto React'

  return (
    <BrowserRouter>
      <Nav title={ title }/>
      <div className="container p-4">
        <Routes>
          <Route 
            path="/"
            element={ <Home/> }
          />
          <Route 
            path="/createProfile" 
            element={ <CreateProfile/> }
          />
          <Route path="/profiles" element={ <Profiles/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
