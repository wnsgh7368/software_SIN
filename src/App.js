import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './comp/MainPage/MainPage.js';
import Introduction from './comp/Introduction/Introduction.js';
import Project from './comp/Project/Project.js';
import Contest from './comp/Contest/Contest.js';
import Volunteer from './comp/Volunteer/volunteer.js';
import Project1 from './comp/Project/Project1.js';
import Project2 from './comp/Project/Project2.js';
import Project3 from './comp/Project/Project3.js';

function App() {

  return (
    <Router>
        <Routes>

          <Route path="/" element={<MainPage />} />
          <Route path="/Introduction" element={<Introduction />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contest" element={<Contest />} />
          <Route path="/Volunteer" element={<Volunteer />} />
          <Route path="/Project1" element={<Project1 />} />
          <Route path="/Project2" element={<Project2 />} />
          <Route path="/Project3" element={<Project3 />} />
        </Routes>
    </Router>
  );
}

export default App;