import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

import DashHome from './Admin/pages/dash/DashHome';
import DashProjects from './Admin/pages/dash/DashProjects';
import DashBids from './Admin/pages/dash/DashBids';
import DashCompanies from './Admin/pages/dash/DashCompanies';
import DashTasks from './Admin/pages/dash/DashTasks';
import DashEquipments from './Admin/pages/dash/DashEquipments';
import DashExpenses from './Admin/pages/dash/DashExpenses';
import LogIn from './login/LogIn';
import SignUp from './login/SignUp';
import './Admin/pages/dash/DashHomeStyle.css'
import './Others/pages/dash/DashHomeStyle.css'

export default function Routez() {
  return( 
  <div>
    {/* <Routes>
      <Route exact path="/" element={<LoginModal/>}/>
      <Route path="/dash" element={<DashHome/>}/>
      <Route path="/dash_projects" element={<DashProjects/>}/>
      <Route path="/dash_bids" element={<DashBids/>}/>
      <Route path="/dash_companies" element={<DashCompanies/>}/>
      <Route path="/dash_tasks" element={<DashTasks/>}/>
      <Route path="/dash_equipments" element={<DashEquipments/>}/>
      <Route path="/dash_expenses" element={<DashExpenses/>}/>
      <Route path="/log_in" element={<LogIn/>}/>
      <Route path="/sign_up" element={<SignUp/>}/>
    </Routes> */}
    <Router>
      <Switch>
        <Route exact path="/">
          <LogIn/>
        </Route>
        <Route path="/sign_up">
          <SignUp/>
        </Route>
        <Route exact path="/dash">
          <DashHome/>
        </Route>
        <Route path="/dash_projects">
          <DashProjects/>
        </Route>
        <Route path="/dash_bids" >
          <DashBids/>
        </Route>
        <Route path="/dash_companies">
          <DashCompanies/>
        </Route>
        <Route path="/dash_tasks">
          <DashTasks/>
        </Route>
        <Route path="/dash_equipments">
          <DashEquipments/>
        </Route>
        <Route path="/dash_expenses">
          <DashExpenses/>
        </Route>
      </Switch>
    </Router>
  </div>
  );
}
