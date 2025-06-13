// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Protected from './components/Protected';


const App = () => {
  const token = localStorage.getItem('token');

  return (
    <Router>
      <Routes>
        {/* <Route path="/" 
        element={<Login />}
         />
        <Route
          path="/protected"
          element={token ? <Protected /> : <Login />}
        /> */}
        <Route path="/" element={<Login />} />
        <Route path="/protected" element={<Protected />} />

      </Routes>
    </Router>
  );
};

export default App;
