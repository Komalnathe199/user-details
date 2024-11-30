import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserList from './pages/UserList';
import UserDetail from './pages/UserDetail';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/user/:id" element={<UserDetail />} />
    </Routes>
  );
};

export default App;
