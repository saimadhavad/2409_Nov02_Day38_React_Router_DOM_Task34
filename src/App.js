import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard';
import EditProfile from './components/EditProfile';
import Leaves from './components/Leaves';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Tasks from './components/Tasks';
import PageNotFound from './components/PageNotFound';


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/tasks' element={<Tasks/>}></Route>
          <Route path='/leaves' element={<Leaves/>}></Route>
          <Route path='/editProfile' element={<EditProfile/>}></Route>
          <Route path='*' element={<PageNotFound/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
