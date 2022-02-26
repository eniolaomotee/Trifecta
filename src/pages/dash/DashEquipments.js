import React from 'react';
import SidePanel from './components/SidePanel';
import DashHeader from './components/DashHeader';
import {userx} from './components/DashHeader';
import {regularx, activex} from './components/SidePanel'
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
    var naira_sign = '\u20a6';    
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
    <div className='main-body bg-colr'>
      <DashHeader title='Equipments'/>

      <div className="px-2 pr-5">
        <div className='search-buttonx xpx-2 my-2 relative grid grid-cols-12 gap-2'>
          <span className='absolute bottom-5 z-10 top-3 left-4 text-lg txt-darkblue3'>
            <SearchSvg classx='stroke-current w-5 h-5'/>
          </span>
          {/* <span className='absolute bottom-5 z-10 top-2 left-4 text-lg'><FontAwesomeIcon icon={["fas", "search"]} /></span> */}
          <input type="text" className="col-span-8 shadow appearance-none border rounded xw-9/12 py-2 pl-10 text-blue-700 bg-gray-100 focus:outline-none focus:shadow-outline " placeholder="Enter Comapny Name" id='project-title' name='project-title'/>
          <button className='col-span-2 bg-blue-800 py-2 text-white text-sm'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2'>Add New Equipment</span></button>
          <button className='col-span-2 bg-white border border-blue-700 text-blue-700 py-2 text-sm'>Request Equipment</button>
        </div>
        {/* <div className='row-span-1 px-3 xflex'>
          <input type="text" className="shadow appearance-none border rounded w-7/12 py-2 pl-10 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Enter Project Title" id='project-title' name='project-title'/>
          <button className='w-2/12 bg-blue-800 ml-2 py-2 text-white'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2'>Add New Equipment</span></button>
          <button className='w-2/12 bg-white border border-blue-700 text-blue-700 ml-2 py-2'>Request Equipment</button>
        </div> */}
        <div className='bg-white table-holdr'>
          <table className="w-full table-auto">
              <tr className='bg-blue-200 h-14'>
                <td className=' pl-5'>Equipment</td>
                <td>Description</td>
                <td className='w-5 px-5 text-center'>Lastest Price</td>
                <td>Stock (Quantity)</td>
                <td >Last Purchase Date</td>
                <td></td>
              </tr>
          {equipmentsx.map(e=>{

            return(
              <tr className='hover:bg-gray-300'>
                <td className=' pl-5'>
                  <span className=''>
                    {e.namex}
                  </span>
                  <div className='text-gray-400 text-sm'>Equipment No {e.equipment_number}</div>
                </td>
                <td className='text-center'>{e.description}</td>
                <td className='w-5 text-center'>{naira_sign}{e.amount}</td>
                <td className="pl-10">{e.quantity}</td>
                <td><span className='p-3 mr-3 text-center bg-blue-200'>{e.last_purchase}</span></td>
                <td><FontAwesomeIcon icon={['fas','ellipsis-v']}/></td>
              </tr>)
            })
          }
          </table>
        </div>


      </div>
    </div>
  </div>
    );
}
