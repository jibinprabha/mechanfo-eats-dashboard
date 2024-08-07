import { lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';

import RouteWrapper from './components/RouteWrapper';
import './index.css'

const SendOtp = lazy(() => import('./pages/Login/SendOtp')) ;
const VerifyOtp = lazy(() => import('./pages/Login/VerifyOtp')) ;
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
 

  return (
    
    <Router basename='/mechanfo-eats-dashboard/'>
      <Routes>
        <Route path="/send-otp" element={<RouteWrapper><SendOtp /></RouteWrapper>} />
        <Route path="/verify-otp" element={<RouteWrapper><VerifyOtp /></RouteWrapper>} />
        <Route element={<DashboardLayout/>}  >
            <Route exact path='/' element={<Dashboard/>} />
            <Route exact path='/alert' element={<Dashboard/>} />
            <Route exact path='/sample' element={<Dashboard/>} />
            <Route exact path='/dashboard2' element={<Dashboard/>} />
            
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
