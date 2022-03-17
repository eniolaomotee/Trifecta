import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../images/logo.png'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import BuildingSvg from '../../../icons/dash-projects/SearchSvg';
import BidIconSvg from '../../../icons/dash-sidepanel/BidIconSvg';
import FolderOpenSvg from '../../../icons/dash-sidepanel/FolderOpenSvg';
import DashHomeIcon from '../../../icons/dash-sidepanel/DashHomeIcon';
import CompaniesIcon from '../../../icons/dash-sidepanel/CompaniesIcon';
import EquipmentsIcon from '../../../icons/dash-sidepanel/EquipmentsIcon';
import ExpensesIcon from '../../../icons/dash-sidepanel/ExpensesIcon';
import TasksIcon from '../../../icons/dash-sidepanel/TasksIcon';
import SettingsIcon from '../../../icons/dash-sidepanel/SettingsIcon';
import LogOutIcon from '../../../icons/dash-sidepanel/LogOutIcon';

export var regularx = "my-0 p-3 w-full txt-greyx block px-8 sidepanel-item";
export var activex = "shadow-lg my-0 p-4 w-full txt-bluex bg-colr block px-8 active-panel sidepanel-item";
export default function SidePanel({active_selectr}) {
    
  return (
  <div className="fixed xcol-span-1 row-span-5 bg-white sidepanel z-10 shadow-lg xfixed">
        <div className="logo-sidepanel xmx-auto">
          {/* <div className='bg-blue-900 text-white text-center p-3'>Logo</div> */}
          <img src={Logo} alt=''/>
        </div>
        <div className="text-left">
          <Link to="/dash" className={active_selectr.dash}><DashHomeIcon classx='inline w-5 mr-3 stroke-current'/>Dashboard</Link>
          <Link to="/dash_projects" className={active_selectr.projects}><FolderOpenSvg classx='inline w-5 mr-3 stroke-current'/>Projects</Link>
          <Link to="/dash_bids" className={active_selectr.bids}><BidIconSvg classx='inline w-5 mr-3 stroke-current'/>Bids</Link>
          <Link to="/dash_companies" className={active_selectr.companies}><CompaniesIcon classx='inline w-5 mr-3 stroke-current'/>Companies</Link>
          <Link to="/dash_tasks" className={active_selectr.tasks}><TasksIcon classx='inline w-5 mr-3 stroke-current'/>Tasks</Link>
          <Link to="/dash_equipments" className={active_selectr.equipments}><EquipmentsIcon classx='inline w-5 mr-3 stroke-current'/>Equipments</Link>
          <Link to="/dash_expenses" className={active_selectr.expenses}><ExpensesIcon classx='inline w-5 mr-3 stroke-current'/>Expenses</Link>
        </div>
        <div className='xmt-8 absolute bottom-3 '>
          <Link to="/dash" className={active_selectr.logout}><SettingsIcon classx='inline w-5 mr-3 stroke-current'/>Settings</Link>
          <Link to="/" className={active_selectr.settings}><LogOutIcon classx='inline w-5 mr-3 stroke-current'/>Log Out</Link>
        </div>
  </div>
  );
}
