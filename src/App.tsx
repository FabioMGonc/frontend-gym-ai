import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Onboarding from './pages/Onboarding';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import Account from './pages/Account';

function App() {
  
  return (
      <Routes>
          <Route path='/' index element = {<Home />}/>
          <Route path='/onbording' element = {<Onboarding />}/>
          <Route path='/profile' element = {<Profile />}/>
          <Route path='/auth/:pathname' element = {<Auth />}/>
          <Route path='/account/:pathname' element = {<Account />}/>
      </Routes>
      
  )
}

export default App;
