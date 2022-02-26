import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import {userx} from './components/DashHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidePanel from './components/SidePanel';
import DashHeader from './components/DashHeader';
import {regularx, activex} from './components/SidePanel'
import './DashHomeStyle.css'
import HomeTableTab from './components/dash_home/HomeTableTab';
// import FolderOpenSvg from '../../icons/dash-sidepanel/FolderOpenSvg';
import FolderSVG from '../../icons/dash-home/FolderSVG';
import BidsSVG from '../../icons/dash-home/BidsSVG';
import TasksSVG from '../../icons/dash-home/TasksSVG';
import CalenderWidget from './components/dash_home/CalenderWidget';
import WeeklySchedule from './components/dash_home/WeeklySchedule';


export default function DashHome() {
  var active_selectr = {
    dash: activex,
    projects: regularx,
    bids: regularx,
    companies: regularx,
    tasks: regularx,
    equipments : regularx,
    expenses: regularx,
    logout: regularx,
    settings: regularx
}

const datax = {
  labels: ['January', 'February', 'March',
           'April', 'May'],

  datasets: [
    {
        label: "Approved",
        fillColor: "blue",
        backgroundColor: 'rgba(30, 12, 255, 1)',
        data: [2,5.8,5,4.3,7]
    },
    {
      label: "Pending",
      fillColor: "red",
      backgroundColor: 'rgba(135, 106, 255, 1)',
      data: [3,7,2,8,5,4]
    },
    {
      label: "Rejected",
      fillColor: "green",
      backgroundColor: 'rgba(0, 201, 255, 1)',
      data: [2,8,5,3,7,4]
    }
]
}


// var temp_table = [
//   {namex: 'Bay City Expansion Project', client: 'Acme International', progress: '45%', amount: 34000},
//   {namex: 'Bay City Expansion Project', client: 'Acme International', progress: '45%', amount: 34000},
//   {namex: 'Bay City Expansion Project', client: 'Acme International', progress: '45%', amount: 34000},
//   {namex: 'Bay City Expansion Project', client: 'Acme International', progress: '45%', amount: 34000},
//   {namex: 'Bay City Expansion Project', client: 'Acme International', progress: '45%', amount: 34000},
// ]    
var naira_sign = '\u20a6';    

  return (
  <div className='dashboardx'>
    <SidePanel active_selectr={active_selectr}/>
    <div className='main-body pr-3 bg-colr xbg-gray-200 || xgrid xgrid-rows-10 gap-2'>
      <DashHeader title='Dashboard Overview'/>
      <div className="contentx xrow-span-9 mt-3 || grid grid-cols-3  gap-2 px-2">
        <div className="col-span-2 || xgrid xgrid-row-7 gap-2">
          <div className="group-of-three-container || grid grid-cols-3 gap-2">
            <div className='bg-white col-span-1 rounded p-3 || grid grid-cols-5'>
              <div className='col-span-2 p-3 rounded-lg text-green-500 bg-green-100'>
                {/* <FontAwesomeIcon icon={['far', 'folder-open']} className='' size='3x'/> */}
                <FolderSVG classx='stroke-current w-30 h-30'/>
              </div>
              <div className='col-span-3'>
                <div className='text-4xl text-right'>
                  30
                </div>
                <div className='text-sm text-right mb-0 pb-0'>
                  Ongoing Projects
                </div>
              </div>
            </div>
            <div className='bg-white col-span-1 rounded p-3 || grid grid-cols-5'>
              <div className='col-span-2 p-3 rounded-lg text-orange-500 bg-orange-100'>
                {/* <FontAwesomeIcon icon={['fas', 'money-check-alt']} className='' size='3x'/> */}
                <BidsSVG classx='stroke-current w-30 h-30'/>
              </div>
              <div className='col-span-3'>
                <div className='text-4xl text-right'>
                  20
                </div>
                <div className='text-sm text-right mb-0 pb-0'>
                  Pending Bids
                </div>
              </div>
            </div>
            <div className='bg-white col-span-1 rounded p-3 || grid grid-cols-5'>
              <div className='col-span-2 p-3 rounded-lg txt-purplex bg-purplex'>
                {/* <FontAwesomeIcon icon={['fas', 'tasks']} className='' size='3x'/> */}
                <TasksSVG classx='stroke-current w-30 h-30'/>
              </div>
              <div className='col-span-3'>
                <div className='text-4xl text-right'>
                  10
                </div>
                <div className='text-sm text-right mb-0 pb-0'>
                  New Tasks
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-2">
            <div className='bg-white rounded  xchartr'>
              <Bar className=''
                data={datax}
                options={{
                  title:{
                    display:true,
                    text:'Average Rainfall per month',
                    fontSize:20
                  },
                  legend:{
                    display:true,
                    position:'right'
                  }
                }}
              />
            </div>

            <HomeTableTab/>
            
          </div>
        </div>
        <div className='right-column col-span-1 || xgrid xgrid-rows-2 gap-2'>
          <CalenderWidget/>
          <div className='radar-chart bg-white rounded mt-2 h-52'>
            radar-chart
          </div>
          <div className=''>
          </div>
          <WeeklySchedule/>
        </div>

      </div>
    </div>
  </div>
  );
}
