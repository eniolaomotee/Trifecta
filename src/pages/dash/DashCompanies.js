import React from 'react';
import SidePanel from '../components/dash/SidePanel';
import DashHeader from '../components/dash/DashHeader';
import {regularx, activex} from '../components/dash/SidePanel'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchSvg from '../../icons/dash-projects/SearchSvg';

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
      {company_name: 'Company', rc: '643478', email: 'email@gmail.com', address: '54 West Virginia rd', contact: '+030545848', reg_status: 'registered'},
      {company_name: 'Company', rc: '643478', email: 'email@gmail.com', address: '54 West Virginia rd', contact: '+030545848', reg_status: 'registered'},
      {company_name: 'Company', rc: '643478', email: 'email@gmail.com', address: '54 West Virginia rd', contact: '+030545848', reg_status: 'registered'},
      {company_name: 'Company', rc: '643478', email: 'email@gmail.com', address: '54 West Virginia rd', contact: '+030545848', reg_status: 'registered'},
      {company_name: 'Company', rc: '643478', email: 'email@gmail.com', address: '54 West Virginia rd', contact: '+030545848', reg_status: 'not registered'}
    ]  
  return (
<div className='dashboardx'>
    <SidePanel active_selectr={active_selectr}/>
    <div className='main-body bg-white'>
      <DashHeader title='Companies'/>

      <div className="contentx px-2pr-5txt-dark-bluex">
        <div className='search-buttonx xpx-2 xmy-2 relative grid grid-cols-12 gap-2'>
          <span className='absolute bottom-5 z-10 top-3 left-4 text-lg txt-darkblue3'>
            <SearchSvg classx='stroke-current w-5 h-5'/>
          </span>
          <input type="text" className="col-span-10 shadow appearance-none border rounded xw-9/12 py-2 pl-10 text-blue-700 bg-gray-100 focus:outline-none focus:shadow-outline " placeholder="Enter Comapny Name" id='project-title' name='project-title'/>
          <button className='col-span-2 bg-bluex xml-3 py-2 text-white rounded'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2 text-sm'>New Company</span></button>
        </div>
        <div className='bg-white table-holdr sub-contenty'>
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden xborder-b xborder-gray-200 xsm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 xtable-auto">
                          <thead className="table-hd-bg text-sm font-medium">
                              <tr>
                                  <th
                                      scope="col"
                                      className="px-6 py-3 text-left font-medium text-gray-500 xtracking-wider"
                                  >
                                      Companies
                                  </th>
                                  <th
                                      scope="col"
                                      className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider"
                                  >
                                      RC Number
                                  </th>
                                  <th
                                      scope="col"
                                      className="px-3 py-3 text-center font-medium text-gray-500 tracking-wider"
                                  >
                                      Address
                                  </th>
                                  <th
                                      scope="col"
                                      className="px-6 py-3 text-center font-medium text-gray-500 tracking-wider"
                                  >
                                      Email
                                  </th>
                                  <th scope="col" className="text-center px-6 py-3 font-medium text-gray-500">
                                      Contact
                                  </th>
                              </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                              {companiesx.map((e) => {
                              return (
                              <tr key={e.namex}>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                    {e.company_name}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                      RC{e.rc}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{e.address}</td>
                                  <td className="px-6 py-4 whitespace-nowrap">
                                      {e.email}
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm"><div>{e.contact}</div></td>
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
