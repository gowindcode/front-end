import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Start from './Pages/Start';
import Home from './Pages/Home';
import DietBenifits from './Pages/DietBenifits';
import DietFoods from './Pages/DietFoods';
import DietTips from './Pages/DietTips';
import Signup from './Pages/Signup';
import Aboutus from './Pages/Aboutus';
import Feedback from './Pages/Feedback';
import Login from './Pages/Login';
import Signout from './Pages/Signout';
import Products from './Pages/Products';
import FitChart from './Pages/FitChart';
import Orders from './Pages/Orders';
import Bill from './Pages/Bill';

function RoutersPath() {

    return (
        <div>
        <Routes>
            <Route exact path='/' element={<Start/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/diet-benifits' element={<DietBenifits/>}/>
            <Route path='/diet-foods' element={<DietFoods/>}/>
            <Route path='/diet-tips' element={<DietTips/>}/>
            <Route path='/all-products' element={<Products/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/aboutus' element={<Aboutus/>}/>
            <Route path='/feedback' element={<Feedback/>}/>
            <Route path='/orders' element={<Orders/>}/>
            <Route path='/bill' element={<Bill/>}/>
            <Route path='/fit-chart' element={<FitChart/>}/>
            <Route path='/signout' element={<Signout/>}/>
        </Routes>
       </div>
    )
}

export default RoutersPath