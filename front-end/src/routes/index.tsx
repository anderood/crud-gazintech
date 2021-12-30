import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Levels from '../pages/Levels';
import Register from '../pages/Register';

const RoutesOut: React.FC = () => (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/levels" element={<Levels />} />
    </Routes>
);

export default RoutesOut;

