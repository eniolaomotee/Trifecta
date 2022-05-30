import React, {useEffect, useState} from 'react';

import SidePanel from '../../components/menu/SidePanel';
import {regularx, activex, closeNav} from '../../components/menu/SidePanel';
import DashHeader from '../../components/header/DashHeader';

import HomeTableTab from '../../components/dash/dash_home/HomeTableTab';
import MyTasksWidget from '../../components/dash/dash_home/MyTasksWidget';
import BarChartx from '../../components/dash/dash_home/Charts/BarChartx';
import RadarChartx from '../../components/dash/dash_home/Charts/RadarChartx';
import GroupSummary from '../../components/dash/dash_home/GroupSummary';
import LoadingScreen from './LoadingScreen';


export default function DashHome() {
  var active_selectr = {
    dash: activex,
    projects: regularx,
    bids: regularx,
    companies: regularx,
    tasks: regularx,
    equipments : regularx,
    meetings : regularx,
    vendors : regularx,
    staff : regularx,
    expenses: regularx,

    logout: regularx,
    settings: regularx
  }



  // loading screen after fetch
  const [isLoading, setIsLoading] = useState(true);
  useEffect( ()=> {
      fetch(`https://api.publicapis.org/entries`)
      .then(res => res.json())
      .then(data => {
          setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, []);  
  //  

  return (
    <>
      <div className='dashboardx'>
          <SidePanel active_selectr={active_selectr}/>
        <div className='main-body pr-3 bg-colr xbg-gray-200 || xgrid xgrid-rows-10 gap-2'>
          <DashHeader title='Dashboard Overview'/>
          <div className='contentx xrow-span-9 mt-3 px-2' onClick={closeNav}>
            <div className='my-auto text-lg pl-3 font-bold txt-headr md:hidden block'>
              Dashboard Overview
            </div>
      {isLoading ? <LoadingScreen/> : 
          <>
            <div className='mt-2'>
              <GroupSummary/>
            </div>
            <div className=" || grid grid-cols-3  gap-2 ">
              <div className="md:col-span-2 col-span-3  || xgrid xgrid-row-7 gap-2">
                <div className="mt-2">
                  <div className='bg-whitex rounded xchartr p-2 shadow'>
                    <BarChartx/>
                  </div>
                  <HomeTableTab/>
                </div>
              </div>
              <div className='right-column  md:col-span-1 col-span-3 || xgrid xgrid-rows-2 gap-2'>
                {/* <CalenderWidget/> */}
                <div className='radar-chartx-container bg-whitex shadow rounded mt-2 xh-52'>
                  {/* radar-chart */}
                  <h4 className=' p-2 pb-0 text-lg font-bold'>Projects</h4>
                  <div className='radar-chartx px-auto xbg-slate-800 mx-auto'>
                    <RadarChartx/>
                  </div>
                </div>
                <div className=''>
                </div>
                {/* <WeeklySchedule/> */}
                <MyTasksWidget/>
              </div>

            </div>
            </>}
          </div>
        </div>
      </div>
    </>
  );
}
