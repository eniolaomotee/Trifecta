import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";

import DashHome from '../Admin/pages/dash/DashHome';
import DashProjects from '../Admin/pages/dash/DashProjects';
import DashBids from '../Admin/pages/dash/DashBids';
import DashCompanies from '../Admin/pages/dash/DashCompanies';
import DashTasks from '../Admin/pages/dash/DashTasks';
import DashEquipments from '../Admin/pages/dash/DashEquipments';
import DashExpenses from '../Admin/pages/dash/DashExpenses';
import DashMeetings from '../Admin/pages/dash/DashMeetings';
import DashVendors from '../Admin/pages/dash/DashVendors';
import DashStaff from '../Admin/pages/dash/DashStaff';
import Settings from '../Admin/pages/dash/Settings';



import AuthPage from '../Auth/Index';

export default function Routez() {
  return( 
  <div>
    <Router>
      <Switch>
        <Route exact path="/">
          <AuthPage/>
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
        <Route path="/dash_staff">
          <DashStaff/>
        </Route>
        <Route path="/dash_vendors">
          <DashVendors/>
        </Route>
        <Route path="/dash_expenses">
          <DashExpenses/>
        </Route>
        <Route path="/settings">
          <Settings/>
        </Route>
      </Switch>
    </Router>
  </div>
  );
}
