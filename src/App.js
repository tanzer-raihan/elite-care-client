import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Pages/Shared/Navigation/Navigation';
import HomeMain from './Pages/Home/HomeMain/HomeMain';
import AppointmentMain from './Pages/Appoinment/AppointmentMain/AppointmentMain';
import Footer from './Pages/Shared/Footer/Footer';
import SignIn from './Pages/Authentication/SignIn/SignIn';
import Register from './Pages/Authentication/Register/Register';
import AuthProvider from './Hooks/Auth/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import DashBoard from './Pages/DashBoard/DashBoard';
import AddDoctor from './Pages/DashBoard/NestedRoute/AddDoctor/AddDoctor';
import MakeAdmin from './Pages/DashBoard/NestedRoute/MakeAdmin/MakeAdmin';
import MyAppointment from './Pages/DashBoard/NestedRoute/My Appointment/MyAppointment';
import AdminRoute from './Pages/DashBoard/AdminRoute/AdminRoute';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <AuthProvider>
          <Navigation></Navigation>
          <Routes>
            <Route path='/' element={<HomeMain></HomeMain>}></Route>
            <Route path='/home' element={<HomeMain></HomeMain>}></Route>
            <Route path='/appointment' element={<PrivateRoute><AppointmentMain></AppointmentMain></PrivateRoute>}></Route>
            <Route path='/signin' element={<SignIn></SignIn>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/dashboard' element={<PrivateRoute><DashBoard></DashBoard></PrivateRoute>}>
              <Route index element={<MyAppointment></MyAppointment>}></Route>
              <Route path='myappointment' element={<MyAppointment></MyAppointment>}></Route>
              <Route path='adddoctor' element={<AdminRoute><AddDoctor></AddDoctor></AdminRoute>}></Route>
              <Route path='makeadmin' element={<AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>}></Route>

            </Route>
          </Routes>
          <Footer></Footer>
        </AuthProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
