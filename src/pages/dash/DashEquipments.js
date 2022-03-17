import React from 'react';
import SidePanel from '../components/dash/SidePanel';
import DashHeader from '../components/dash/DashHeader';
import {regularx, activex} from '../components/dash/SidePanel'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchSvg from '../../icons/dash-projects/SearchSvg';

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
    // var naira_sign = '\u20a6';    
    var equipmentsx = [
      {namex: 'Grinding Tool Dynamometer', equipment_number: '585854', description: 'this is a description about description based on the description', amount: 34000, quantity: 45, last_purchase: 'Feb 20, 2008'},
      {namex: 'Grinding Tool Dynamometer', equipment_number: '585854', description: 'this is a description about description based on the description', amount: 34000, quantity: 45, last_purchase: 'Feb 20, 2008'},
      {namex: 'Grinding Tool Dynamometer', equipment_number: '585854', description: 'this is a description about description based on the description', amount: 34000, quantity: 45, last_purchase: 'Feb 20, 2008'},
      {namex: 'Grinding Tool Dynamometer', equipment_number: '585854', description: 'this is a description about description based on the description', amount: 34000, quantity: 45, last_purchase: 'Feb 20, 2008'},
      {namex: 'Grinding Tool Dynamometer', equipment_number: '585854', description: 'this is a description about description based on the description', amount: 34000, quantity: 45, last_purchase: 'Feb 20, 2008'},
      {namex: 'Grinding Tool Dynamometer', equipment_number: '585854', description: 'this is a description about description based on the description', amount: 34000, quantity: 45, last_purchase: 'Feb 20, 2008'}
    ]
  return (
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
          <input type="text" className="col-span-8 shadow appearance-none border rounded xw-9/12 py-2 pl-10 text-blue-700 bg-gray-100 focus:outline-none focus:shadow-outline " placeholder="Enter Comapny Name" id='project-title' name='project-title'/>
          <button className='col-span-2 button-solidx py-2 text-sm'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2'>New Equipment</span></button>
          <button className='col-span-2 button-inversex py-2 text-sm'>Request Equipment</button>
        </div>
        
        <div className='bg-white table-holdr sub-contenty'>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden xborder-b xborder-gray-200 xsm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 xtable-auto">
                          <thead className="table-hd-bg text-sm font-medium">
                              <tr>
                                  <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 xtracking-wider" >
                                      Equipment
                                  </th>
                                  <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                                      Description
                                  </th>
                                  <th scope="col" className="px-3 py-3 text-center font-medium text-gray-500 tracking-wider">
                                      Latest Price
                                  </th>
                                  <th scope="col" className="px-6 py-3 text-center font-medium text-gray-500 tracking-wider" >
                                      Stock (Quantity)
                                  </th>
                                  <th scope="col" className="text-center px-6 py-3 font-medium text-gray-500">
                                      Last Purchase Date
                                  </th>
                              </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                              {equipmentsx.map((e) => {
                              return (
                              <tr key={e.namex}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    <div>{e.namex}</div>
                                    <div className='txt-greyed-out'>Equipment No: {e.equipment_number}</div>
                                  </td>
                                  <td className="px-6 py-4 xwhitespace-nowrap">{e.description}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{e.amount}</td>
                                  <td className="px-3 py-4 whitespace-nowrap text-center">{e.quantity}</td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm"><div>{e.last_purchase}</div></td>
                              </tr>
                              )})}
                          </tbody>
                        </table>
                    </div>
                </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
    );
}
