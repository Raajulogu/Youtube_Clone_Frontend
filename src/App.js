import './App.css';
import { Route, Routes } from 'react-router';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ResetPassword from './Pages/ResetPassword';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='login' element={<Login/>}/>
        <Route path='signup' element={<SignUp/>}/>
        <Route path='reset-password' element={<ResetPassword/>}/>
      </Routes>
    </div>
  );
}

export default App;
