import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from "react-redux";
import store from './Redux/store';
import Login from './Pages/Login/login';
import Home from './Pages/Home/home';
import './App.css';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path='*' element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
