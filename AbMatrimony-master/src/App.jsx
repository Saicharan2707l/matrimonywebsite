import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing';
import UserDetail from './components/userDetail';

import {BrowserRouter, Routes, Route} from "react-router-dom";
function App() {
  return (
    <div style={{marginTop : '-3.5rem'}}>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Landing />} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/userDetail" element ={<UserDetail/>} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
