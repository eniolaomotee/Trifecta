import React from 'react';
import SidePanel from '../components/dash/SidePanel';
import DashHeader from '../components/dash/DashHeader';
import {regularx, activex} from '../components/dash/SidePanel'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchSvg from '../../../icons/dash-projects/SearchSvg';
import tasks from '../../../tempDb/tasks';
import TasksTable from '../components/tables/TasksTable';

export default function DashTasks() {
    var active_selectr = {
        dash: regularx,
        projects: regularx,
        bids: regularx,
        companies: regularx,
        tasks: activex,
        equipments : regularx,
        expenses: regularx,
        logout: regularx,
        settings: regularx
    }    
    
  return (
    <div className='dashboardx grid md:grid-cols-7 grid-cols-5 overflow-hidden'>
    <SidePanel active_selectr={active_selectr}/>
    <div className='main-body col-span-7 row-span-5 bg-white || xgrid xgrid-rows-10 xgap-2'>
      <DashHeader title='Tasks'/>

      <div className="contenty px-2 pr-5">
        <div className='search-buttonx xpx-2 my-2 relative grid grid-cols-10 gap-2'>
          <span className='absolute bottom-5 z-10 top-3 left-4 text-lg txt-darkblue3'>
            <SearchSvg classx='stroke-current w-5 h-5'/>
          </span>
          <input type="text" className="col-span-8 shadow appearance-none border rounded xw-9/12 py-2 pl-10 text-blue-700 bg-gray-100 focus:outline-none focus:shadow-outline " placeholder="Enter Comapny Name" id='project-title' name='project-title'/>
          <button className='col-span-2 button-solidx xpy-2 text-sm'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2'>New Task</span></button>
        </div>
        
        {/* <div className='bg-white table-holdr sub-contenty'>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden xborder-b xborder-gray-200 xsm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 xtable-auto">
                          <thead className="table-hd-bg text-sm font-medium">
                              <tr>
                                  <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 xtracking-wider" >
                                      Tasks
                                  </th>
                                  <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                                      Initiated by
                                  </th>
                                  <th scope="col" className="px-3 py-3 text-center font-medium text-gray-500 tracking-wider">
                                      Assigned to
                                  </th>
                                  <th scope="col" className="px-6 py-3 xtext-center whitespace-nowrap font-medium text-gray-500 tracking-wider" >
                                      Due Date
                                  </th>
                                  <th scope="col" className="text-center px-6 py-3 font-medium text-gray-500">
                                      Status
                                  </th>
                              </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                              {tasks.map((e) => {
                              return (
                              <tr key={e.namex}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div>{e.task_name}</div>
                                    <div className='txt-greyed-out text-sm'>{e.project}</div>
                                  </td>
                                  <td className="px-6 py-4 xwhitespace-nowrap">{e.initiator}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{e.assigned_to}</td>
                                  <td className="px-3 py-4 whitespace-nowrap text-center">{e.due_date}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm"><div>{e.statux}</div></td>
                              </tr>
                              )})}
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
        </div> */}
        <TasksTable data={tasks} rowsPerPage={10}/>

      </div>
    </div>
  </div>
    );
}
