import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SidePanel from './components/SidePanel';
import DashHeader from './components/DashHeader';
import {userx} from './components/DashHeader';
import {regularx, activex} from './components/SidePanel'
import AddBid from '../add_new_bid_form/AddBid';

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
  return (
  <div>

    <AddBid show={show} handleShow={handleShow}/>
    <div className='dashboardx grid md:grid-cols-7 grid-cols-5'>
      <SidePanel active_selectr={active_selectr}/>
      <div className='col-span-4 md:col-span-6 row-span-5 bg-blue-100 || grid grid-rows-10 gap-2'>
        <DashHeader/>

        <div className="row-span-9 ||  grid grid-rows-10 gap-2">
          <div className='row-span-1 px-3 flex'>
            <span className='absolute z-10 py-4 pl-3 pt-6 text-lg'><FontAwesomeIcon icon={["fas", "search"]} /></span>
            <input type="text" className="shadow appearance-none border rounded w-9/12 py-2 pl-10 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Enter Project Title" id='project-title' name='project-title'/>
            <button onClick={handleShow} className='w-3/12 bg-blue-800 ml-2 py-2 text-white'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2'>New Project</span></button>
          </div>
          <div className="row-span-9 || grid grid-cols-3 grid-rows-3 gap-2 px-2">
            <div className=' bg-white rounded'>
              <div className='p-3'>
                <div className='flex'><span>TRF/NIG/49/2021</span><span className='ml-auto bg-green-100 text-green-500 rounded-lg text-xs p-1 px-2'>Approved</span></div>
                <div className=' text-lg py-3 text-justifyx'>Renovation and Construction works at GSSS Zadawa, Yobe State</div>
                <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>Winning Company:</span></div>
                <div className='flex'><span>United Nations </span><span className='ml-auto'>Acme Corporation</span></div>
              </div>
              <div className='w-full bborder border-t-2 flex px-2'>
                <div className='py-2 pr-2'><span className='pl-2 text-sm text-gray-400'>Submited</span>May 31, 2019</div>
                <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
              </div>
            </div>
            <div className=' bg-white rounded'>
              <div className='p-3'>
                <div className='flex'><span>TRF/NIG/49/2021</span><span className='ml-auto bg-green-100 text-green-500 rounded-lg text-xs p-1 px-2'>Approved</span></div>
                <div className=' text-lg py-3 text-justifyx'>Renovation and Construction works at GSSS Zadawa, Yobe State</div>
                <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>Winning Company:</span></div>
                <div className='flex'><span>United Nations </span><span className='ml-auto'>Acme Corporation</span></div>
              </div>
              <div className='w-full bborder border-t-2 flex px-2'>
                <div className='py-2 pr-2'><span className='pl-2 text-sm text-gray-400'>Submited</span>May 31, 2019</div>
                <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
              </div>
            </div>
            <div className=' bg-white rounded'>
              <div className='p-3'>
                <div className='flex'><span>TRF/NIG/49/2021</span><span className='ml-auto bg-red-100 text-red-500 rounded-lg text-xs p-1 px-2'>Rejected</span></div>
                <div className=' text-lg py-3 text-justifyx'>Renovation and Construction works at GSSS Zadawa, Yobe State</div>
                <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>Winning Company:</span></div>
                <div className='flex'><span>United Nations </span><span className='ml-auto'>Acme Corporation</span></div>
              </div>
              <div className='w-full bborder border-t-2 flex px-2'>
                <div className='py-2 pr-2'><span className='pl-2 text-sm text-gray-400'>Submited</span>May 31, 2019</div>
                <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
              </div>
            </div>
            <div className=' bg-white rounded'>
              <div className='p-3'>
                <div className='flex'><span>TRF/NIG/49/2021</span><span className='ml-auto bg-green-100 text-green-500 rounded-lg text-xs p-1 px-2'>Approved</span></div>
                <div className=' text-lg py-3 text-justifyx'>Renovation and Construction works at GSSS Zadawa, Yobe State</div>
                <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>Winning Company:</span></div>
                <div className='flex'><span>United Nations </span><span className='ml-auto'>Acme Corporation</span></div>
              </div>
              <div className='w-full bborder border-t-2 flex px-2'>
                <div className='py-2 pr-2'><span className='pl-2 text-sm text-gray-400'>Submited</span>May 31, 2019</div>
                <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
              </div>
            </div>
            <div className=' bg-white rounded'>
              <div className='p-3'>
                <div className='flex'><span>TRF/NIG/49/2021</span><span className='ml-auto bg-green-100 text-green-500 rounded-lg text-xs p-1 px-2'>Approved</span></div>
                <div className=' text-lg py-3 text-justifyx'>Renovation and Construction works at GSSS Zadawa, Yobe State</div>
                <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>Winning Company:</span></div>
                <div className='flex'><span>United Nations </span><span className='ml-auto'>Acme Corporation</span></div>
              </div>
              <div className='w-full bborder border-t-2 flex px-2'>
                <div className='py-2 pr-2'><span className='pl-2 text-sm text-gray-400'>Submited</span>May 31, 2019</div>
                <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
              </div>
            </div>
            <div className=' bg-white rounded'>
              <div className='p-3'>
                <div className='flex'><span>TRF/NIG/49/2021</span><span className='ml-auto bg-green-100 text-green-500 rounded-lg text-xs p-1 px-2'>Approved</span></div>
                <div className=' text-lg py-3 text-justifyx'>Renovation and Construction works at GSSS Zadawa, Yobe State</div>
                <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>Winning Company:</span></div>
                <div className='flex'><span>United Nations </span><span className='ml-auto'>Acme Corporation</span></div>
              </div>
              <div className='w-full bborder border-t-2 flex px-2'>
                <div className='py-2 pr-2'><span className='pl-2 text-sm text-gray-400'>Submited</span>May 31, 2019</div>
                <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
              </div>
            </div>
            <div className=' bg-white rounded'>
              <div className='p-3'>
                <div className='flex'><span>TRF/NIG/49/2021</span><span className='ml-auto bg-green-100 text-green-500 rounded-lg text-xs p-1 px-2'>Approved</span></div>
                <div className=' text-lg py-3 text-justifyx'>Renovation and Construction works at GSSS Zadawa, Yobe State</div>
                <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>Winning Company:</span></div>
                <div className='flex'><span>United Nations </span><span className='ml-auto'>Acme Corporation</span></div>
              </div>
              <div className='w-full bborder border-t-2 flex px-2'>
                <div className='py-2 pr-2'><span className='pl-2 text-sm text-gray-400'>Submited</span>May 31, 2019</div>
                <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
              </div>
            </div>
            <div className=' bg-white rounded'>
              <div className='p-3'>
                <div className='flex'><span>TRF/NIG/49/2021</span><span className='ml-auto bg-yellow-100 text-yellow-500 rounded-lg text-xs p-1 px-2'>pending</span></div>
                <div className=' text-lg py-3 text-justifyx'>Renovation and Construction works at GSSS Zadawa, Yobe State</div>
                <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>Winning Company:</span></div>
                <div className='flex'><span>United Nations </span><span className='ml-auto'>Acme Corporation</span></div>
              </div>
              <div className='w-full bborder border-t-2 flex px-2'>
                <div className='py-2 pr-2'><span className='pl-2 text-sm text-gray-400'>Submited</span>May 31, 2019</div>
                <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
              </div>
            </div>



          </div>


        </div>
      </div>
    </div>
  </div>
    );
}
