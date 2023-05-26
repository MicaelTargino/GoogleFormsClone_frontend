import React from 'react';
import Header from './components/Header/Header';
import Template from './components/MainBody/Template/template';
import Mainbody from './components/MainBody/MainBody';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPG from './components/LandingPG/LandingPG';
import FormPG from './components/FormPG/FormPG';
const App = () => {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={< LandingPG />}></Route>
                <Route path="/form/:id" element={< FormPG />}></Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
