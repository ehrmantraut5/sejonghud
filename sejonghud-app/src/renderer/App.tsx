import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Leftbar from '../component/Leftbar';
import Topbar from '../component/Topbar';
import Fullcalendar from '../component/Fullcalendar';


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
            <Route path="/" element={<Fullcalendar />}/>
          </Routes>
        </Router>
      </main>
    </div>
  );
}
