import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import SidePanel from './components/SidePanel';
import DashHeader from './components/DashHeader';
import {regularx, activex} from './components/SidePanel'
import './DashHomeStyle.css'

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
  // datasets: [
  //   {
  //     label: 'Rainfall',
  //     backgroundColor: 'rgba(75,192,192,1)',
  //     borderColor: 'rgba(0,0,0,1)',
  //     borderWidth: 2,
  //     data: [65, 59, 80, 81, 59, 80, 81, 59, 80, 81, 56]
  //   }
  // ]
  datasets: [
    {
        label: "Blue",
        fillColor: "blue",
        data: [2,8,5,4.3,7]
    },
    {
        label: "Red",
        fillColor: "red",
        data: [3,7,2,8,5,4]
    },
    {
        label: "Green",
        fillColor: "green",
        data: [2,8,5,3,7,4]
    }
]
}
  return (
  <div className='dashboardx grid md:grid-cols-7 grid-cols-5'>
    <SidePanel active_selectr={active_selectr}/>
    <div className='col-span-4 md:col-span-6 row-span-5 bg-blue-100 || grid grid-rows-10 gap-2'>
      <DashHeader/>
      <div className="row-span-9 || grid grid-cols-3  gap-2 px-2">
        <div className="col-span-2 || grid grid-row-7 gap-2">
          <div className="row-span-1 || grid grid-cols-3 gap-2">
            <div className='bg-white col-span-1 rounded'>3-group</div>
            <div className='bg-white col-span-1 rounded'>3-group</div>
            <div className='bg-white col-span-1 rounded'>3-group</div>
          </div>
          <div className="row-span-6 || grid grid-rows-2 gap-2">
            <Bar className='row-span-1 bg-white rounded'
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

            <div className='row-span-1 bg-white'>
              table
            </div>
            
          </div>
        </div>
        <div className='col-span-1 || grid grid-rows-2 gap-2'>
          <div className=' bg-white'>
            date and Projects chart
          </div>
          <div className=' bg-white'>
            schedule
          </div>
        </div>

      </div>
    </div>
  </div>
  );
}
