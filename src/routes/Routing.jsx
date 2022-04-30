import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Menu from '../components/Layout/MenuBar';

const Routing = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/home" />} />
      <Route
        path="/home"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
};

export default Routing;
