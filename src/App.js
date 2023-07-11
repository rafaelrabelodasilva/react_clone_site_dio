import { Home } from './pages/home'
import { Login } from './pages/login'
import { Feed } from './pages/feed'
import { Teste } from './pages/exemplo_hooks'
import { SignIn } from './pages/signIn'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/login' element={ <Login /> }/>
        <Route path='/feed' element={ <Feed /> }/>
        <Route path='/teste' element={ <Teste /> }/>
        <Route path='/signin' element={ <SignIn /> }/>
      </Routes>
    </Router>
  );
}

export default App;
