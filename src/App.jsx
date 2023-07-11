import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { CreateDhaga, Home, Navbar, StudentForm,Table } from './components'
import EditDhaga from './components/crudapp/EditDhaga';

const App = () => {


  return (
    <div className="app">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dcreate" element={<CreateDhaga />}/>
          <Route path="/edit/:id" element={<EditDhaga />}/>
        </Routes>
    </div>
  );
};

export default App;
