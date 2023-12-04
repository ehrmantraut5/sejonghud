import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Leftbar from "./Leftbar.jsx";
import FullCalendar from './Fullcalendar.jsx';
import Topbar from "./Topbar.jsx";


export default function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Leftbar />}/>
    //     <Route path="/" element={<FullCalendar />}/>
    //   </Routes>
    // </Router>
    <div className="app">
      {/* sidebar */}
      <Leftbar />
      <main className="content">
        <Topbar />

        <Router>
          <Routes>
            <Route path="/" element={<FullCalendar />}/>
          </Routes>
        </Router>
      </main>
    </div>
  );
}
