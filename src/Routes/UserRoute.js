import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

import DashHome from '../User/pages/dash/DashHome';
import DashProjects from '../User/pages/dash/DashProjects';
import DashBids from '../User/pages/dash/DashBids';
import DashCompanies from '../User/pages/dash/DashCompanies';
import DashTasks from '../User/pages/dash/DashTasks';
import DashEquipments from '../User/pages/dash/DashEquipments';
import DashExpenses from '../User/pages/dash/DashExpenses';
import LogIn from '../Auth/LogIn';
import SignUp from '../Auth/SignUp';
// import '../User/pages/dash/DashHomeStyle.css'

export default function UserRoutez() {
  return( 
  <div>
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
