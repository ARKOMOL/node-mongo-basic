import logo from './logo.svg';
import './App.css';
import AddUser from './pages/AddUsers';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UpdateUser from './pages/UpdateUser';

function App() {
  return (
    <div className="App">
         <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="user/add" element={<AddUser></AddUser>}></Route>
        <Route path="/update/:id" element={<UpdateUser></UpdateUser>}></Route>
      </Routes>
    
      
    </div>
  );
}

export default App;
