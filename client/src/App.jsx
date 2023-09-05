import './app.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import Auth from './pages/auth/Auth';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Watch from './pages/watch/Watch';

function App() {
  const user = true;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={user ? <Home /> : <Navigate to="/register" />} />
          <Route path="/register" element={!user ? <Auth /> : <Home />} />
          <Route path="/login" element={!user ? <Login /> : <Home />} />
          {user && (
            <>
              <Route path="/movies" element={<Home type="movies" />} />
              <Route path="/series" element={<Home type="series" />} />
              <Route path="/watch" element={<Watch />} />
            </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
