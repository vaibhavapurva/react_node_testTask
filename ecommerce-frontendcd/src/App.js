import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ProductManagement from './components/ProductManagement';
import OrderManagement from './components/OrderManagement';
import AuthService from './services/authService';
import './App.css'; // Import the CSS file

const PrivateRoute = ({ component: Component, roles }) => {
  const currentUser = AuthService.getCurrentUser();

  return currentUser && roles.includes(currentUser.role) ? (
    <Component />
  ) : (
    <Navigate to="/login" />
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products" element={<PrivateRoute component={ProductManagement} roles={['admin', 'superadmin']} />} />
          <Route path="/orders" element={<PrivateRoute component={OrderManagement} roles={['customer', 'admin', 'superadmin']} />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
