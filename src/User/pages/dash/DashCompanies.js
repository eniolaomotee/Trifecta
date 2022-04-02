import React, { useState } from 'react';
import SidePanel from '../../components/dash/SidePanel';
import DashHeader from '../../components/dash/DashHeader';
import {regularx, activex} from '../../components/dash/SidePanel'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchSvg from '../../../assets/icons/dash-projects/SearchSvg';
import CompaniesTable from '../../components/tables/CompaniesTable';
import companiesx from '../../../tempDb/companiesx';
import AddCompanies from '../../components/modals/Add/AddCompanies';

export default function DashCompanies() {
    var active_selectr = {
        dash: regularx,
        projects: regularx,
        bids: regularx,
        companies: activex,
        tasks: regularx,
        equipments : regularx,
        expenses: regularx,
        logout: regularx,
        settings: regularx
    }

    const [show, setShow] = useState("hidden");
    const handleShow = () => {
        if(show === "hidden"){ setShow("") }
        else{setShow("hidden")}
    }
     
  return (
<div className='dashboardx'>
    <SidePanel active_selectr={active_selectr}/>
    <div className='main-body bg-white'>
      <DashHeader title='Companies'/>

      <AddCompanies show={show} handleShow={handleShow}/>
      <div className="contentx px-2pr-5txt-dark-bluex">
        <div className='search-buttonx xpx-2 xmy-2 relative grid grid-cols-12 gap-2'>
          <span className='absolute bottom-5 z-10 top-3 left-4 text-lg txt-darkblue3'>
            <SearchSvg classx='stroke-current w-5 h-5'/>
          </span>
          <input type="text" className="col-span-10 shadow appearance-none border rounded xw-9/12 py-2 pl-10 text-blue-700 bg-gray-100 focus:outline-none focus:shadow-outline " placeholder="Enter Comapny Name" id='project-title' name='project-title'/>
          <button onClick={handleShow} className='col-span-2 bg-bluex xml-3 py-2 text-white rounded'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2 text-sm'>New Company</span></button>
        </div>
       
        <CompaniesTable data={companiesx} rowsPerPage={10}/>


      </div>
    </div>
  </div>
    );
}
