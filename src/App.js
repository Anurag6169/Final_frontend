import logo from './logo.svg';
import './App.css';
import Login from "./Pages/Login";
import Register from './Pages/Register';
import UpcomingAppointment from './Pages/UpcomingAppointment';
import SelectingSchedule from './Pages/SelectingSchedule';
import Instructors from './Pages/Instructors';
import Services from './Pages/Sevices';
import Profession from './Pages/Profession';
import AppointmentDetailModal from './Modals/AppointmentDetailsModal';
import PreviousAppointment from './Pages/PreviousAppointment';
import AddService from './Pages/AddService';
import Home from './Pages/Home';
import AvailableTime from './Pages/AvailableTime';
import SelectProfession from './Pages/SelectPorfession';
import AvailableDays from './Pages/AvailableDays';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
   

    <Router>
      <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route exact path='/upcomingappointments' element={<UpcomingAppointment />} />
              <Route exact path='/previousappointments' element={<PreviousAppointment />} />
              <Route exact path='/register' element={<Register />} />
              <Route exact path='/professions' element={<Profession />} />
              <Route exact path='/instructors' element={<Instructors />} />
              <Route exact path='/selectschedule' element={<SelectingSchedule />} />              
              <Route exact path='/service' element={<Services />} />
              <Route exact path='/addservice' element={<AddService />} />
              <Route exact path='/availabletime' element={<AvailableTime />} />
              <Route exact path='/selectprofession' element={<SelectProfession />} />
              <Route exact path='/availabledays' element={<AvailableDays />} />
      </Routes>

    </Router>
  );
}

export default App;
