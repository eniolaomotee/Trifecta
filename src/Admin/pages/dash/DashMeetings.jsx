import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidePanel from '../../components/dash/SidePanel';
import DashHeader from '../../components/dash/DashHeader';
import {regularx, activex} from '../../components/dash/SidePanel'

import SearchSvg from '../../../assets/icons/dash-projects/SearchSvg'
import MiniSidePanel from '../../components/dash/MiniSidePanel';
import meetings from '../../../tempDb/meetings';
import MeetingDetails from '../../components/view-details/MeetingDetails';
import AddMeeting from '../../components/modals/Add/AddMeeting';

export default function DashMeetings() {
    var active_selectr = {
        dash: regularx,
        projects: regularx,
        bids: regularx,
        companies: regularx,
        tasks: regularx,
        equipments : regularx,
        meetings : activex,
        expenses: regularx,
        logout: regularx,
        settings: regularx
    } 
    
    
    const [show, setShow] = useState("hidden");
    const [showTile, setShowTile] = useState("");
    const [showDetails, setShowDetails] = useState("hidden");
    
    const handleShow = () => {
      if(show === "hidden"){ setShow("") }
      else{setShow("hidden")}
    }
    const handleShowDetails = () => {
        if(showDetails === "hidden"){ setShowDetails(""); setShowTile("hidden") }
        else{setShowDetails("hidden"); setShowTile("")}
    }
    

  return (
  <div>

    <AddMeeting show={show} handleShow={handleShow}/>
    <div className={showDetails}>
      <MiniSidePanel active_selectr={active_selectr}/>
      <MeetingDetails name={meetings[0].name} show={showDetails} handleShow={handleShowDetails}/>
    </div>
    <div className={`dashboardx grid md:grid-cols-7 grid-cols-5 ${showTile}`}>
      <SidePanel active_selectr={active_selectr}/>
      <div className={`main-body col-span-7 row-span-5 bg-colr || xgrid xgrid-rows-10 xgap-2`}>
        <DashHeader title='Meetings'/>

        <div className="contentx">
          <div className='search-buttonx my-6 relative grid grid-cols-12 gap-2'>
            <span className='absolute bottom-5 z-10 top-3 left-4 text-lg txt-darkblue3'>
              <SearchSvg classx='stroke-current w-5 h-5'/>
            </span>
            {/* <span className='absolute bottom-5 z-10 top-2 left-4 text-lg'><FontAwesomeIcon icon={["fas", "search"]} /></span> */}
            <input type="text" className="col-span-10 shadow appearance-none border rounded xw-9/12 py-2 pl-10 text-blue-700 bg-gray-100 focus:outline-none focus:shadow-outline " placeholder="Enter Bid Title" id='project-title' name='project-title'/>
            <button onClick={handleShow} className='col-span-2 bg-bluex xml-3 py-2 text-white rounded'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2 text-sm'>New Meeting</span></button>
          </div>
          <div className="row-span-9 || grid grid-cols-3 grid-rows-3 gap-cus-1 gap-y-cus-1">
            {meetings.map(e=>{
              var status_cn;
              if(e.status === 'approved'){status_cn = 'ml-auto capitalize bg-green-100 text-green-500 rounded-lg text-xs p-1 px-2'}
              else if(e.status === 'rejected'){status_cn = 'ml-auto capitalize bg-red-100 text-red-500 rounded-lg text-xs p-1 px-2'}
              else{status_cn = 'ml-auto capitalize bg-amber-100 text-amber-500 rounded-lg text-xs p-1 px-2'}

              var stage;
              if(e.mode.toLowerCase()==='online meeting'){stage = 'Platform'}
              else{stage= 'Location'}
              
              return(
                <div className=' bg-white rounded txt-darkblue2' key={e.id}>
                  <div className='p-3'>
                    <div className='flex text-xs'><span><span className='txt-greyed-out'>Date: </span>{e.date}</span><span className={status_cn}>{e.status}</span></div>
                    <div className=' xtext-lg py-2 text-justifyx'>{e.name}</div>
                    <div className='flex txt-greyed-out'><span>Mode:</span><span className='ml-auto capitalize'>{stage}:</span></div>
                    <div className='flex capitalize'><span>{e.mode}</span><span className='ml-auto'>{e.location}</span></div>
                  </div>
                  <div className='w-full bborder border-t-2 flex px-2 text-sm'>
                    <div className='py-2 pr-2'><span className='px-2 txt-greyed-out'>Initiated by:</span>{e.initiated_by}</div>
                    <button className='bg-bluex text-white px-2 py-1 rounded my-1 ml-auto' onClick={handleShowDetails}>View Details</button>
                  </div>
                </div>
              );
              })
            }
          </div>
        </div>
      </div>


    </div>
  </div>
    );
}
