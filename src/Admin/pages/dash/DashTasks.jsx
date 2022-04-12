import React, {useState} from 'react';
import SidePanel from '../../components/dash/SidePanel';
import DashHeader from '../../components/dash/DashHeader';
import {regularx, activex} from '../../components/dash/SidePanel'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchSvg from '../../../assets/icons/dash-projects/SearchSvg';
import tasks from '../../../tempDb/tasks';
import TasksTable from '../../components/tables/TasksTable';
import AddTask from '../../components/modals/Add/AddTask';
import TaskDetails from '../../components/view-details/TaskDetails';
import MiniSidePanel from '../../components/dash/MiniSidePanel';

export default function DashTasks() {
    var active_selectr = {
        dash: regularx,
        projects: regularx,
        bids: regularx,
        companies: regularx,
        tasks: activex,
        equipments : regularx,
        meetings : regularx,
        expenses: regularx,
        logout: regularx,
        settings: regularx
    }

    const [show, setShow] = useState("hidden");
    const [showTile, setShowTile] = useState("");
    const [showDetails, setShowDetails] = useState("hidden");
    
    const handleShow = () => {
      if(show === "hidden"){ setShow("") }
      else{setShow("hidden")}
    }
    const handleShowDetails = () => {
        if(showDetails === "hidden"){ setShowDetails(""); setShowTile("hidden") }
        else{setShowDetails("hidden"); setShowTile("")}
    } 
    
  return (
  <>
    <AddTask show={show} handleShow={handleShow}/>
    <div>
      <MiniSidePanel active_selectr={active_selectr}/>
      <TaskDetails  name={tasks[0].task_name} show={showDetails} handleShow={handleShowDetails}/>
    </div>
    <div className={`dashboardx grid md:grid-cols-7 grid-cols-5 overflow-hidden ${showTile}`}>
      <SidePanel active_selectr={active_selectr}/>
      <div className={`main-body bg-colr`}>
        <DashHeader title='Tasks'/>

        <div className="contenty px-2 pr-5">
          <div className='search-buttonx xpx-2 my-2 relative grid grid-cols-10 gap-2'>
            <span className='absolute bottom-5 z-10 top-3 left-4 text-lg txt-darkblue3'>
              <SearchSvg classx='stroke-current w-5 h-5'/>
            </span>
            <input type="text" className="col-span-8 shadow appearance-none border rounded xw-9/12 py-2 pl-10 text-blue-700 bg-gray-100 focus:outline-none focus:shadow-outline " placeholder="Enter Task Name" id='project-title' name='project-title'/>
            <button onClick={handleShow} className='col-span-2 button-solidx xpy-2 text-sm'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2'>New Task</span></button>
          </div>
          
          <TasksTable data={tasks} rowsPerPage={10} handleShow={handleShowDetails}/>

        </div>
      </div>
    </div>
  </>
    );
}
