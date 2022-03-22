import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidePanel from '../components/dash/SidePanel';
import DashHeader from '../components/dash/DashHeader';
import {regularx, activex} from '../components/dash/SidePanel'

import AddBid from '../components/modals/add_new_bid_form/AddBid';
import SearchSvg from '../../../icons/dash-projects/SearchSvg';

export default function DashBids() {
    var active_selectr = {
        dash: regularx,
        projects: regularx,
        bids: activex,
        companies: regularx,
        tasks: regularx,
        equipments : regularx,
        expenses: regularx,
        logout: regularx,
        settings: regularx
    }    
    const [show, setShow] = useState("hidden");
    const handleShow = () => {
        if(show === "hidden"){ setShow("") }
        else{setShow("hidden")}
    }
    
    var  bids_temp = [
          {name: 'Renovation and Construction works at GSSS Zadawa, Yobe State', TRF: 'TRF/NIG/49/2021', client: 'United Nations', winning_company: 'Acme Corporation', statusx: 'approved', date_submitted: 'May 31, 2019'},
          {name: 'Renovation and Construction works at GSSS Zadawa, Yobe State', TRF: 'TRF/NIG/49/2021', client: 'United Nations', winning_company: 'Acme Corporation', statusx: 'approved', date_submitted: 'May 31, 2019'},
          {name: 'Renovation and Construction works at GSSS Zadawa, Yobe State', TRF: 'TRF/NIG/49/2021', client: 'United Nations', winning_company: 'Acme Corporation', statusx: 'rejected', date_submitted: 'May 31, 2019'},
          {name: 'Renovation and Construction works at GSSS Zadawa, Yobe State', TRF: 'TRF/NIG/49/2021', client: 'United Nations', winning_company: 'Acme Corporation', statusx: 'approved', date_submitted: 'May 31, 2019'},
          {name: 'Renovation and Construction works at GSSS Zadawa, Yobe State', TRF: 'TRF/NIG/49/2021', client: 'United Nations', winning_company: 'Acme Corporation', statusx: 'pending', date_submitted: 'May 31, 2019'},
          {name: 'Renovation and Construction works at GSSS Zadawa, Yobe State', TRF: 'TRF/NIG/49/2021', client: 'United Nations', winning_company: 'Acme Corporation', statusx: 'approved', date_submitted: 'May 31, 2019'},
          {name: 'Renovation and Construction works at GSSS Zadawa, Yobe State', TRF: 'TRF/NIG/49/2021', client: 'United Nations', winning_company: 'Acme Corporation', statusx: 'approved', date_submitted: 'May 31, 2019'}
        ]
  return (
  <div>

    <AddBid show={show} handleShow={handleShow}/>
    <div className='dashboardx grid md:grid-cols-7 grid-cols-5'>
      <SidePanel active_selectr={active_selectr}/>
      <div className='main-body col-span-7 row-span-5 bg-colr || xgrid xgrid-rows-10 xgap-2'>
        <DashHeader title='Bids'/>

        <div className="contentx">
          <div className='search-buttonx my-6 relative grid grid-cols-12 gap-2'>
            <span className='absolute bottom-5 z-10 top-3 left-4 text-lg txt-darkblue3'>
              <SearchSvg classx='stroke-current w-5 h-5'/>
            </span>
            {/* <span className='absolute bottom-5 z-10 top-2 left-4 text-lg'><FontAwesomeIcon icon={["fas", "search"]} /></span> */}
            <input type="text" className="col-span-10 shadow appearance-none border rounded xw-9/12 py-2 pl-10 text-blue-700 bg-gray-100 focus:outline-none focus:shadow-outline " placeholder="Enter Project Title" id='project-title' name='project-title'/>
            <button onClick={handleShow} className='col-span-2 bg-bluex xml-3 py-2 text-white rounded'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2 text-sm'>New Bid</span></button>
          </div>
          <div className="row-span-9 || grid grid-cols-3 grid-rows-3 gap-cus-1 gap-y-cus-1">
            {bids_temp.map(e=>{
              var status_cn;
              if(e.statusx === 'approved'){status_cn = 'ml-auto capitalize bg-green-100 text-green-500 rounded-lg text-xs p-1 px-2'}
              else if(e.statusx === 'rejected'){status_cn = 'ml-auto capitalize bg-red-100 text-red-500 rounded-lg text-xs p-1 px-2'}
              else{status_cn = 'ml-auto capitalize bg-amber-100 text-amber-500 rounded-lg text-xs p-1 px-2'}
              
              return(
                <div className=' bg-white rounded txt-darkblue2' key={e.name}>
                  <div className='p-3'>
                    <div className='flex text-xs'><span>{e.TRF}</span><span className={status_cn}>{e.statusx}</span></div>
                    <div className=' xtext-lg py-2 text-justifyx'>{e.name}</div>
                    <div className='flex txt-greyed-out'><span>Client:</span><span className='ml-auto'>Winning Company:</span></div>
                    <div className='flex'><span>{e.client}</span><span className='ml-auto'>{e.winning_company}</span></div>
                  </div>
                  <div className='w-full bborder border-t-2 flex px-2'>
                    <div className='py-2 pr-2'><span className='px-2 text-sm txt-greyed-out'>Submited</span>{e.date_submitted}</div>
                    <button className='bg-bluex text-white px-1 rounded my-1 ml-auto'>View Details</button>
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
