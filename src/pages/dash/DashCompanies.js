import React from 'react';
import SidePanel from './components/SidePanel';
import DashHeader from './components/DashHeader';
import {userx} from './components/DashHeader';
import {regularx, activex} from './components/SidePanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
    var companiesx = [
      {company_name: 'Company', rc: '643478', email: 'email@gmail.com', address: '54 West Virginia rd', contact: '+030545848', reg_status: 'registered'},
      {company_name: 'Company', rc: '643478', email: 'email@gmail.com', address: '54 West Virginia rd', contact: '+030545848', reg_status: 'not registered'},
      {company_name: 'Company', rc: '643478', email: 'email@gmail.com', address: '54 West Virginia rd', contact: '+030545848', reg_status: 'not registered'},
      {company_name: 'Company', rc: '643478', email: 'email@gmail.com', address: '54 West Virginia rd', contact: '+030545848', reg_status: 'registered'},
      {company_name: 'Company', rc: '643478', email: 'email@gmail.com', address: '54 West Virginia rd', contact: '+030545848', reg_status: 'not registered'}
    ]  
  return (
<div className='dashboardx'>
    <SidePanel active_selectr={active_selectr}/>
    <div className='main-body bg-colr'>
      <DashHeader title='Companies'/>

      <div className="px-2 pr-5">
        <div className='search-buttonx xpx-2 my-2 relative grid grid-cols-12 gap-2'>
          <span className='absolute bottom-5 z-10 top-2 left-4 text-lg'><FontAwesomeIcon icon={["fas", "search"]} /></span>
          <input type="text" className="col-span-10 shadow appearance-none border rounded xw-9/12 py-2 pl-10 text-blue-700 bg-gray-100 focus:outline-none focus:shadow-outline " placeholder="Enter Comapny Name" id='project-title' name='project-title'/>
          <button className='col-span-2 bg-blue-800 xml-3 py-2 text-white rounded'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2'>Add New Company</span></button>
        </div>
        <div className='bg-white table-holdr'>
          <table className="xrow-span-9 xpl-20 w-full table-auto">
            {/* <thead className='bg-blue-200 py-5'>
            </thead>
            <tbody className='bg-white'> */}
            {/* </tbody> */}
              <tr className='bg-blue-200 h-14'>
                <td className='pl-10'>Company</td>
                <td>Email</td>
                <td>Address</td>
                <td>Contact</td>
                <td>NDPHC Reg Status</td>
                <td></td>
              </tr>
              {companiesx.map(e=>{
                let status_colr;
                if(e.reg_status === 'not registered'){status_colr = 'bg-red-200 text-red-800 p-3 mr-3 rounded capitalized'}
                else{status_colr = 'bg-green-200 text-green-800 p-3 mr-3 rounded capitalized'}
                return(<tr className='hover:bg-gray-300'>
                  <td className='pl-10'>
                    <span className='flex'>
                      <div className="w-8 h-8 bg-cover rounded-md mr-0">
                        <img src={userx.image} alt="" className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                      </div>
                      {e.company_name}
                    </span>
                    <div className='text-gray-400 text-sm'>RC {e.rc}</div>
                  </td>
                  <td>{e.email}</td>
                  <td>{e.address}</td>
                  <td>{e.contact}</td>
                  <td><span className={status_colr}>{e.reg_status}</span></td>
                  <td><FontAwesomeIcon icon={['fas','ellipsis-v']}/></td>
                </tr>);})
              } 
          
          </table>
        </div>


      </div>
    </div>
  </div>
    );
}
