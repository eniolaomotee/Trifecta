import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

import DashHome from './dash/DashHome';
import DashProjects from './dash/DashProjects';
import DashBids from './dash/DashBids';
import DashCompanies from './dash/DashCompanies';
import DashTasks from './dash/DashTasks';
import DashEquipments from './dash/DashEquipments';
import DashExpenses from './dash/DashExpenses';
import LogIn from './login/LogIn';
import SignUp from './login/SignUp';
import '../../assets/css-styles/DashHomeStyle.css'
import '../../assets/css-styles/ModalStyle.css'
import DashMeetings from './dash/DashMeetings';

export default function Routez() {
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
        <Route path="/dash_meetings">
          <DashMeetings/>
        </Route>
        <Route path="/dash_expenses">
          <DashExpenses/>
        </Route>
      </Switch>
    </Router>
  </div>
  );
}
