import './App.css';

import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";
import Home from './Component/Default_page/Home/Home';
import Appointment from './Component/Appointment_Page/Appointment/Appointment'; 
import React, { Fragment }  from 'react';
import LogIn from './Component/Loginn/LogIn/LogIn'; 
import Registration from './Component/Loginn/Registration/Registration'; 
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Component/Loginn/PrivateRoute/PrivateRoute'; 




                       
function App() {
  return (
   <>

        <AuthProvider> 
          <Fragment> 
        <BrowserRouter> 
        <Routes> 
        
        <Route path='/' element={<Home/>}></Route>
        <Route path='/' element={<PrivateRoute/>}>
        <Route path='/Appointment' element={<Appointment/>}></Route>
        </Route>
        {/* <PrivateRoute path='/Appointment' element={<Appointment/>}></PrivateRoute>   */}
       
        <Route path='/Login' element={<LogIn/>}></Route> 
        <Route path='/Registration' element={<Registration/>}></Route> 
        </Routes>
        </BrowserRouter>
        </Fragment>

        </AuthProvider>

   </>
  );
}

export default App;
