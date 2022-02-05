import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

export var regularx = "my-0 p-3 w-full text-gray-600 block px-6";
export var activex = "shadow-lg my-0 p-4 w-full text-blue-800 bg-blue-100 block px-6";
export default function SidePanel({active_selectr}) {
    
  return (
  <div className="col-span-1 row-span-5 bg-white sidepanel z-10 shadow-lg xfixed">
        <div className=" mb-10 pb-6 pt-1 px-3">
          <div className='bg-blue-900 p-3'>Logo</div>
          </div>
        <div className="text-left">
          <Link to="/dash" className={active_selectr.dash}><FontAwesomeIcon icon={['far', 'folder']} className='mr-3'/>Dashboard</Link>
          <Link to="/dash_projects" className={active_selectr.projects}><FontAwesomeIcon icon={['far', 'folder-open']} className='mr-3'/>Projects</Link>
          <Link to="/dash_bids" className={active_selectr.bids}><FontAwesomeIcon icon={['fas', 'money-check-alt']} className='mr-3'/>Bids</Link>
          <Link to="/dash_companies" className={active_selectr.companies}><FontAwesomeIcon icon={['far', 'building']} className='mr-3'/>Companies</Link>
          <Link to="/dash_tasks" className={active_selectr.tasks}><FontAwesomeIcon icon={['fas', 'tasks']} className='mr-3'/>Tasks</Link>
          <Link to="/dash_equipments" className={active_selectr.equipments}><FontAwesomeIcon icon={['fas', 'tractor']} className='mr-3'/>Equipments</Link>
          <Link to="/dash_expenses" className={active_selectr.expenses}><FontAwesomeIcon icon={['fas', 'wallet']} className='mr-3'/>Expenses</Link>
        </div>
        <div className='mt-8'>
          <Link to="/dash" className={active_selectr.logout}><FontAwesomeIcon icon={['fas', 'cog']} className='mr-3'/>Settings</Link>
          <Link to="/dash" className={active_selectr.settings}><FontAwesomeIcon icon={['fas', 'sign-out-alt']} className='mr-3'/>Log Out</Link>
        </div>
  </div>
  );
}
