import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import "./popup.css";
import Home from './Home/Home';
import Settings from './Settings/Settings';
import Jwt from './Jwt/Jwt';
const container = document.createElement("div");
document.body.appendChild(container);
const root = createRoot(container);
root.render(
    <Router>
        <div>
            <ul className='nav'>
                <li><a href="#/">home</a></li>
                <li><a href="#/jwt">JWT</a></li>
                <li><a href="#/settings">Settings</a></li>
            </ul>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/jwt" element={<Jwt />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    </Router>
);