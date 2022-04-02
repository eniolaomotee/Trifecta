import React, {useState} from 'react';
import SidePanel from '../../components/dash/SidePanel';
import DashHeader from '../../components/dash/DashHeader';
import {regularx, activex} from '../../components/dash/SidePanel';
import AddEquipment from '../../components/modals/Add/AddEquipment';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchSvg from '../../../assets/icons/dash-projects/SearchSvg';
import EquipmentsTable from '../../components/tables/Eqiupmentstable';


import equipments from '../../../tempDb/equipments';
import EditEquipment from '../../components/modals/EditDetails/EditEquipment';

export default function DashEquipments() {
    var active_selectr = {
        dash: regularx,
        projects: regularx,
        bids: regularx,
        companies: regularx,
        tasks: regularx,
        equipments : activex,
        expenses: regularx,
        logout: regularx,
        settings: regularx
    }    

    const [show, setShow] = useState("hidden");
    const handleShow = () => {
        if(show === "hidden"){ setShow("") }
        else{setShow("hidden")}
    }
    const [showEdit, setShowEdit] = useState("hidden");
    const handleShowEdit = () => {
        if(showEdit === "hidden"){ setShowEdit("") }
        else{setShowEdit("hidden")}
    }

  return (
  <>
    <AddEquipment show={show} handleShow={handleShow}/>
    <EditEquipment show={showEdit} handleShow={handleShowEdit}/>
    <div className='dashboardx'>
      <SidePanel active_selectr={active_selectr}/>
      <div className='main-body bg-white'>
        <DashHeader title='Equipments'/>

        <div className="contenty px-2 pr-5">
          <div className='search-buttonx xpx-2 my-2 relative grid grid-cols-12 gap-2'>
            <span className='absolute bottom-5 z-10 top-3 left-4 text-lg txt-darkblue3'>
              <SearchSvg classx='stroke-current w-5 h-5'/>
            </span>
            {/* <span className='absolute bottom-5 z-10 top-2 left-4 text-lg'><FontAwesomeIcon icon={["fas", "search"]} /></span> */}
            <input type="text" className="col-span-10 shadow appearance-none border rounded xw-9/12 py-2 pl-10 text-blue-700 bg-gray-100 focus:outline-none focus:shadow-outline " placeholder="Enter Comapny Name" id='project-title' name='project-title'/>
            <button onClick={handleShowEdit} className='col-span-2 button-solidx py-2 text-sm'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2'>New Equipment</span></button>
            {/* <button className='col-span-2 button-inversex py-2 text-sm'>Request Equipment</button> */}
          </div>
          
          <EquipmentsTable data={equipments} rowsPerPage={10}/>


        </div>
      </div>
    </div>
  </>
    );
}
