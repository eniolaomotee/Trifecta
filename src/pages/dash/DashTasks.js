import React from 'react';
import SidePanel from './components/SidePanel';
import DashHeader from './components/DashHeader';
import {regularx, activex} from './components/SidePanel'

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
    <div className='main-body col-span-7 row-span-5 bg-colr || grid grid-rows-10 gap-2'>
      <DashHeader title='Tasks'/>

      {/* <div className="row-span-9 ||  grid grid-rows-10 gap-2">
       


      </div> */}
    </div>
  </div>
    );
}
