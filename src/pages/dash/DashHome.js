import React from 'react';
import {Bar} from 'react-chartjs-2';
import Chart from 'chart.js/auto'
import {userx} from './components/DashHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

var eventsx = [
  {id: 2, name: 'Staff Meeting', date: 23, day: 'Mon', time: '11:20 AM', location: 'Conference Hall', },
  {id: 2, name: 'CI/Cd Implementation', date: 24, day: 'Tue', time: '01:34 PM',  location: 'Conference Hall', },
  {id: 2, name: 'Velocity Global Check-in', date: 25, day: 'Wed', time: '09:00 AM', location: 'Skype', },
  {id: 2, name: 'Staff Meeting', date: 26, day: 'Thurs', time: '09:00 AM', location: 'Conference Hall'}
]
var temp_table = [
  {namex: 'Bay City Expansion Project', client: 'Acme International', progress: '45%', amount: 34000},
  {namex: 'Bay City Expansion Project', client: 'Acme International', progress: '45%', amount: 34000},
  {namex: 'Bay City Expansion Project', client: 'Acme International', progress: '45%', amount: 34000},
  {namex: 'Bay City Expansion Project', client: 'Acme International', progress: '45%', amount: 34000},
  {namex: 'Bay City Expansion Project', client: 'Acme International', progress: '45%', amount: 34000},
]    
var naira_sign = '\u20a6';    

  return (
  <div className='dashboardx'>
    <SidePanel active_selectr={active_selectr}/>
    <div className='main-body pr-3 bg-colr xbg-gray-200 || xgrid xgrid-rows-10 gap-2'>
      <DashHeader title='Dashboard Overview'/>
      <div className="contentx xrow-span-9 mt-3 || grid grid-cols-3  gap-2 px-2">
        <div className="col-span-2 || grid grid-row-7 gap-2">
          <div className="group-of-three-container || grid grid-cols-3 gap-2">
            <div className='bg-white col-span-1 rounded p-3 || grid grid-cols-5'>
              <div className='col-span-2 p-3 rounded-lg text-green-500 bg-green-100'>
                <FontAwesomeIcon icon={['far', 'folder-open']} className='' size='3x'/>
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
                <FontAwesomeIcon icon={['fas', 'money-check-alt']} className='' size='3x'/>
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
              <div className='col-span-2 p-3 rounded-lg text-blue-500 bg-blue-100'>
                <FontAwesomeIcon icon={['fas', 'tasks']} className='' size='3x'/>
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
          
          <div className="row-span-6 || grid grid-rows-3 gap-2">
            <div className='bg-white rounded row-span-1 xchartr'>
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

            <div className='bg-white'>
              <table className="w-full table-auto">
                <tr className='bg-white h-14'>
                  <td className='text-blue-600 border-b-blue-600'>Ongoing Projects</td>
                  <td className='text-gray-700'>Pending Bids</td>
                </tr>
                <tr className='bg-colr h-14 text-gray-400'>
                  <td className=' pl-5'>Title</td>
                  <td>Client</td>
                  <td>Progress</td>
                  <td>Contract Sum</td>
                </tr>
                {temp_table.map(e=>{

                  return(
                    <tr className='hover:bg-gray-300 h-12'>
                      <td className='font-bold pl-5'> {e.namex}</td>
                      <td>{e.client}</td>
                      <td className="">{e.progress}</td>
                      <td>{naira_sign}{e.amount}</td>
                    </tr>)
                    })
                }
              </table>
            </div>
            
          </div>
        </div>
        <div className='right-column col-span-1 || xgrid xgrid-rows-2 gap-2'>
          <div className='weekly-calender-widget h-24 rounded p-1'>
            <div className='text-center pb-2'>
              <FontAwesomeIcon icon={['fas', 'angle-left']}/><span className='mx-5'>23 - 28 November 2021</span><FontAwesomeIcon icon={['fas', 'angle-right']}/>
            </div>
            <div className='grid grid-cols-7 gap-3 text-center'>
              <div className='text'>
                <div className='font-light text-gray-500'>M</div>
                <div className='font-bold'>22</div>
              </div>
              <div className='bg-blue-600 text-white rounded'>
                <div className=''>T</div>
                <div className=''>23</div>
              </div>
              <div>
                <div className='font-light text-gray-500'>W</div>
                <div className='font-bold'>24</div>
              </div>
              <div>
                <div className='font-light text-gray-500'>T</div>
                <div className='font-bold'>25</div>
              </div>
              <div>
                <div className='font-light text-gray-500'>F</div>
                <div className='font-bold'>26</div>
              </div>
              <div>
                <div className='font-light text-gray-500'>S</div>
                <div className='font-bold'>27</div>
              </div>
              <div>
                <div className='font-light text-gray-500'>S</div>
                <div className='font-bold'>28</div>
              </div>
            </div>
          </div>
          <div className='radar-chart bg-white rounded mt-2 h-52'>
            radar-chart
          </div>
          <div className=''>
          </div>
          <div className=' xbg-white'>
            <div className='schedule my-3 text-blue-900'>
              Weekly Schedule
            </div>
            {eventsx.map(e=>(
              <div key = {e.id} className='bg-white rounded p-2 mb-2 text-green-700 font-face-gm'>
                <div className='inline-block p-2 text-center rounded-lg bg-green-100 text-lg w-16'>
                  <div className='font-bold'>{e.date}</div>
                  <div>{e.day}</div>
                </div>
                <div className='inline-block ml-3'>
                  <div className='text-lg text-left'>
                    {e.name}
                  </div>
                  <div className='text-sm text-left text-gray-400 mt-2'>
                    <span><FontAwesomeIcon icon={['fas','map-marker-alt']} className='text-green-700'/> {e.location}</span>
                    <span className='xpl-24 absolute right-3'><FontAwesomeIcon icon={['far','clock']} className='text-green-700'/> {e.time}</span>
                  </div>
                </div>
              </div>
              
            ))}
            
          </div>
        </div>

      </div>
    </div>
  </div>
  );
}
