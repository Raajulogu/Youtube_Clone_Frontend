import './App.css';
import { Route, Routes } from 'react-router';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ResetPassword from './Pages/ResetPassword';
import Dashboard from './Components/Dashboard';
import Channel from './Components/Channel';
import History from './Components/History';
import LikedVideos from './Components/LikedVideos';
import PlayVideo from './Components/PlayVideo';
import Subscriptions from './Components/Subscriptions';
import Watchlater from './Components/Watchlater';
import YourVideos from './Components/YourVideos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/channel/:id" element={<Channel />} />
        <Route path="/history" element={<History />} />
        <Route path="/likes/:id" element={<LikedVideos />} />
        <Route path="/play" element={<PlayVideo />} />
        <Route path="/subscribs" element={<Subscriptions />} />
        <Route path="/watchlater/:id" element={<Watchlater />} />
        <Route path="/yourvideos" element={<YourVideos />} />
      </Routes>
    </div>
  );
}

export default App;
