import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginReg from './pages/LoginPage';
import SearchHomePage from './pages/SearchHomePage';
import UploadPage from './pages/UploadPage';
import UserAdd from './pages/UserAdd';
import UserViewPage from './pages/UserViewPage';
import DashBoard from './pages/DashBoardPage';

import './App.css';
import Notification from './pages/Notification';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginReg />} />
          <Route path='/dashboard/*' element={<DashBoard />}>
            <Route path='search' element={<SearchHomePage />} />
            <Route path='upload' element={<UploadPage/>} />
            <Route path='user' element={<UserViewPage />} />
            <Route path='user/add' element={<UserAdd />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Notification />
    </div>
  );
}

export default App;
