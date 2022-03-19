import React, { useState } from 'react';
import SidePanel from '../components/dash/SidePanel';
import DashHeader from '../components/dash/DashHeader';
import {regularx, activex} from '../components/dash/SidePanel'

import AddProject from '../components/modals/add_new_project_form/AddProject';
// import {userx} from './components/DashHeader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchSvg from '../../icons/dash-projects/SearchSvg';

export default function DashProjects() {
    var active_selectr = {
        dash: regularx,
        projects: activex,
        bids: regularx,
        companies: regularx,
        tasks: regularx,
        equipments : regularx,
        expenses: regularx,
        logout: regularx,
        settings: regularx
    }
    var naira_sign = '\u20a6';    
    
     const [showP, setShowP] = useState("hidden");
    const handleShowP = () => {
        if(showP === "hidden"){ setShowP("") }
        else{setShowP("hidden")}
    }
    var projectsx = [
      { name: 'Apo Legislative Quarters Reconstruction', tag: 'construction', client: 'Ministry of Housing', statusx: 'completed', payment_balance: 20000, wallet_amount: 300000, progress: '90%'},
      { name: 'Apo Legislative Quarters Reconstruction', tag: 'construction', client: 'Ministry of Housing', statusx: 'active', payment_balance: 20000, wallet_amount: 300000, progress: '40%'},
      { name: 'Apo Legislative Quarters Reconstruction', tag: 'construction', client: 'Ministry of Education', statusx: 'not started', payment_balance: 20000, wallet_amount: 300000, progress: '45%'},
      { name: 'Apo Legislative Quarters Reconstruction', tag: 'construction', client: 'Ministry of Housing', statusx: 'completed', payment_balance: 20000, wallet_amount: 300000, progress: '68%'},
      { name: 'Apo Legislative Quarters Reconstruction', tag: 'construction', client: 'Ministry of Housing', statusx: 'completed', payment_balance: 20000, wallet_amount: 300000, progress: '50%'},
      { name: 'Apo Legislative Quarters Reconstruction', tag: 'construction', client: 'Ministry of Housing', statusx: 'not started', payment_balance: 20000, wallet_amount: 300000, progress: '80%'},
      { name: 'Apo Legislative Quarters Reconstruction', tag: 'renovation', client: 'Ministry of Housing', statusx: 'completed', payment_balance: 20000, wallet_amount: 300000, progress: '20%'}
    ]
    // const [Projectslisst]
  return (
  <div>
    <AddProject show={showP} handleShowP={handleShowP}/>
    <div className='dashboardx grid grid-cols-7'>
      <SidePanel active_selectr={active_selectr}/>
      <div className='main-body col-span-7 row-span-5 bg-colr || xgrid xgrid-rows-10 gap-2'>
        <DashHeader title='Projects'/>

        <div className="contentx">
          <div className='search-buttonx my-6 relative grid grid-cols-12 gap-2'>
            <span className='absolute bottom-5 z-10 top-3 left-4 text-lg txt-darkblue3'>
              <SearchSvg classx='stroke-current w-5 h-5'/>
            </span>
            {/* <span className='absolute bottom-5 z-10 top-2 left-4 text-lg'><FontAwesomeIcon icon={["fas", "search"]} /></span> */}
            <input type="text" className="col-span-10 shadow appearance-none border rounded xw-9/12 py-2 pl-10 text-blue-700 bg-gray-100 focus:outline-none focus:shadow-outline " placeholder="Enter Project Title" id='project-title' name='project-title'/>
            <button onClick={handleShowP} className='col-span-2 bg-bluex xml-3 py-2 text-white rounded text-sm'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2'>New Project</span></button>
          </div>
          <div className="xrow-span-9 || grid grid-cols-3 grid-rows-3 xgap-2 xgap-x-6 gap-cus-1 gap-y-cus-1">
            {projectsx.map((e)=>{
              var progress_style = {
                width: e.progress
              }
              var status_cn;
              if(e.statusx === 'completed'){status_cn = 'ml-auto capitalize bg-green-100 text-green-500 rounded-lg text-xs p-1 px-2'}
              else if(e.statusx === 'not started'){status_cn = 'ml-auto capitalize bg-red-100 text-red-500 rounded-lg text-xs p-1 px-2'}
              else{status_cn = 'ml-auto capitalize bg-amber-100 text-amber-500 rounded-lg text-xs p-1 px-2'}
              return(
                <div className=' bg-white rounded txt-darkblue2'>
                  <div className='p-3 pb-1'>
                    <div className='flex text-sm'><span>#{e.tag}</span><span className={status_cn}>{e.statusx}</span></div>
                    <div className='xtext-center text-lg py-2'>{e.name}</div>
                    <div className='flex txt-greyed-out text-xs'><span>client:</span><span className='ml-auto'>Payment Balance</span></div>
                    <div className='flex'><span>{e.client}</span><span className='ml-auto'>{naira_sign}{e.payment_balance}</span></div>
                    <div className='flex my-2'>
                      <div className='h-1 w-full bg-gray-300 mt-3'>
                        <div className='h-1 bg-bluex' style={progress_style}></div>
                      </div>
                        <span className='w-2/12 pl-2 ml-auto flex-end'>{progress_style.width}</span>
                    </div>

                  </div>
                  <div className='w-full bborder border-t-2 flex px-2'>
                    {/* <div className='py-2 text-2xl'><FontAwesomeIcon icon={['fas', 'wallet']}/><span className='pl-2 text-lg align-middle'>{naira_sign}{userx.total_amountx}</span></div> */}
                    <button className='bg-bluex text-white p-1 rounded my-2 ml-auto'>View Details</button>
                  </div>
                </div>
              );
            })}
          
          </div>


        </div>
      </div>
    </div>
  </div>
    );
}
