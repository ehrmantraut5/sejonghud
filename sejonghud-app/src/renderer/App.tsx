import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Leftbar from '../component/Leftbar';
import Topbar from '../component/Topbar';
import Fullcalendar from '../component/Fullcalendar';
import MainCard from '../component/MainCard';
import {Subjects} from '../data/SubjectData';
import React, { useState } from 'react';



export default function App() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleSubjectClick = (subject) => {
    setSelectedSubject(subject);
  };

  return (
    <div className="app">
      <Topbar />
      <main className="content">
      <Leftbar subjects={Subjects} onSubjectClick={handleSubjectClick}/>
        <Router>
          <Routes>
            {/* <Route path="/" element={<Fullcalendar />}/> */}
            <Route path="/" element={<MainCard selectedSubject={selectedSubject}/>}/>
          </Routes>
        </Router>
      </main>
    </div>
  );
}
