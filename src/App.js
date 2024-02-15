import './App.css';
import { Route, Routes } from 'react-router';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ResetPassword from './Pages/ResetPassword';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
       <Route exact path='/' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/reset-password' element={<ResetPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
