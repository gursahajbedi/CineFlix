// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {Routes, BrowserRouter,Route} from 'react-router-dom'
import { Login } from './components/login';
import { Authcontext} from './context/Context';
import { useContext } from 'react';
import { Content } from './components/content';
import { Search } from './components/search';
import { Movie } from './components/movie';


function App() {
  const {user}=useContext(Authcontext)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!user?<Login />:(<Content/>)}/>
        <Route path="/search" element={!user?<Login />:(<Search/>)}/>
        <Route path="/movie" element={!user?<Login />:(<Movie/>)}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
