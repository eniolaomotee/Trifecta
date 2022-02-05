import React from 'react';
import SidePanel from './components/SidePanel';
import DashHeader from './components/DashHeader';
import {userx} from './components/DashHeader';
import {regularx, activex} from './components/SidePanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  return (
<div className='dashboardx grid md:grid-cols-7 grid-cols-5'>
    <SidePanel active_selectr={active_selectr}/>
    <div className='col-span-4 md:col-span-6 row-span-5 bg-blue-100 || grid grid-rows-10 gap-2'>
      <DashHeader/>

      <div className="row-span-9 ||  grid grid-rows-10 gap-2">
        <div className='row-span-1 px-3 xflex'>
          <span className='absolute z-10 py-4 pl-3 pt-4 text-lg'><FontAwesomeIcon icon={["fas", "search"]} /></span>
          <input type="text" className="shadow appearance-none border rounded w-9/12 py-2 pl-10 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Enter Project Title" id='project-title' name='project-title'/>
          <button className='w-2/12 bg-blue-800 ml-2 py-2 text-white'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2'>Add New Equipment</span></button>
        </div>
        <table className="row-span-9 pl-20 ml-4 table-auto">
          <thead className='bg-blue-200 py-5'>
            <tr>
              <td className=' pl-20'>Company</td>
              <td>Email</td>
              <td>Address</td>
              <td>Contact</td>
              <td>NDPHC Reg Status</td>
            </tr>
          </thead>
          <tbody className='bg-white'>
         
            <tr className='hover:bg-gray-300'>
              <td className=' pl-20'>
                <span className='flex'>
                  <div className="w-8 h-8 bg-cover rounded-md mr-0">
                    <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                  </div>
                  Company
                </span>
                <div className='text-gray-400 text-sm'>RC 643478</div>
              </td>
              <td>Email@gmail.com</td>
              <td>54 Wewst Virginia</td>
              <td>+030545848</td>
              <td><span className='bg-red-200 text-red-800 p-3 mr-3 rounded'>Not Registered</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-20'>
                <span className='flex'>
                  <div className="w-8 h-8 bg-cover rounded-md mr-0">
                    <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                  </div>
                  Company
                </span>
                <div className='text-gray-400 text-sm'>RC 643478</div>
              </td>
              <td>Email@gmail.com</td>
              <td>54 Wewst Virginia</td>
              <td>+030545848</td>
              <td><span className='bg-red-200 text-red-800 p-3 mr-3 rounded'>Not Registered</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-20'>
                <span className='flex'>
                  <div className="w-8 h-8 bg-cover rounded-md mr-0">
                    <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                  </div>
                  Company
                </span>
                <div className='text-gray-400 text-sm'>RC 643478</div>
              </td>
              <td>Email@gmail.com</td>
              <td>54 Wewst Virginia</td>
              <td>+030545848</td>
              <td><span className='bg-red-200 text-red-800 p-3 mr-3 rounded'>Not Registered</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-20'>
                <span className='flex'>
                  <div className="w-8 h-8 bg-cover rounded-md mr-0">
                    <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                  </div>
                  Company
                </span>
                <div className='text-gray-400 text-sm'>RC 643478</div>
              </td>
              <td>Email@gmail.com</td>
              <td>54 Wewst Virginia</td>
              <td>+030545848</td>
              <td><span className='bg-red-200 text-red-800 p-3 mr-3 rounded'>Not Registered</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-20'>
                <span className='flex'>
                  <div className="w-8 h-8 bg-cover rounded-md mr-0">
                    <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                  </div>
                  Company
                </span>
                <div className='text-gray-400 text-sm'>RC 643478</div>
              </td>
              <td>Email@gmail.com</td>
              <td>54 Wewst Virginia</td>
              <td>+030545848</td>
              <td><span className='bg-red-200 text-red-800 p-3 mr-3 rounded'>Not Registered</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-20'>
                <span className='flex'>
                  <div className="w-8 h-8 bg-cover rounded-md mr-0">
                    <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                  </div>
                  Company
                </span>
                <div className='text-gray-400 text-sm'>RC 643478</div>
              </td>
              <td>Email@gmail.com</td>
              <td>54 Wewst Virginia</td>
              <td>+030545848</td>
              <td><span className='bg-red-200 text-red-800 p-3 mr-3 rounded'>Not Registered</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-20'>
                <span className='flex'>
                  <div className="w-8 h-8 bg-cover rounded-md mr-0">
                    <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                  </div>
                  Company
                </span>
                <div className='text-gray-400 text-sm'>RC 643478</div>
              </td>
              <td>Email@gmail.com</td>
              <td>54 Wewst Virginia</td>
              <td>+030545848</td>
              <td><span className='bg-red-200 text-red-800 p-3 mr-3 rounded'>Not Registered</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-20'>
                <span className='flex'>
                  <div className="w-8 h-8 bg-cover rounded-md mr-0">
                    <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                  </div>
                  Company
                </span>
                <div className='text-gray-400 text-sm'>RC 643478</div>
              </td>
              <td>Email@gmail.com</td>
              <td>54 Wewst Virginia</td>
              <td>+030545848</td>
              <td><span className='bg-red-200 text-red-800 p-3 mr-3 rounded'>Not Registered</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-20'>
                <span className='flex'>
                  <div className="w-8 h-8 bg-cover rounded-md mr-0">
                    <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                  </div>
                  Company
                </span>
                <div className='text-gray-400 text-sm'>RC 643478</div>
              </td>
              <td>Email@gmail.com</td>
              <td>54 Wewst Virginia</td>
              <td>+030545848</td>
              <td><span className='bg-red-200 text-red-800 p-3 mr-3 rounded'>Not Registered</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-20'>
                <span className='flex'>
                  <div className="w-8 h-8 bg-cover rounded-md mr-0">
                    <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                  </div>
                  Company
                </span>
                <div className='text-gray-400 text-sm'>RC 643478</div>
              </td>
              <td>Email@gmail.com</td>
              <td>54 Wewst Virginia</td>
              <td>+030545848</td>
              <td><span className='bg-red-200 text-red-800 p-3 mr-3 rounded'>Not Registered</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-20'>
                <span className='flex'>
                  <div className="w-8 h-8 bg-cover rounded-md mr-0">
                    <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                  </div>
                  Company
                </span>
                <div className='text-gray-400 text-sm'>RC 643478</div>
              </td>
              <td>Email@gmail.com</td>
              <td>54 Wewst Virginia</td>
              <td>+030545848</td>
              <td><span className='bg-red-200 text-red-800 p-3 mr-3 rounded'>Not Registered</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-20'>
                <span className='flex'>
                  <div className="w-8 h-8 bg-cover rounded-md mr-0">
                    <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                  </div>
                  Company
                </span>
                <div className='text-gray-400 text-sm'>RC 643478</div>
              </td>
              <td>Email@gmail.com</td>
              <td>54 Wewst Virginia</td>
              <td>+030545848</td>
              <td><span className='bg-red-200 text-red-800 p-3 mr-3 rounded'>Not Registered</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-20'>
                <span className='flex'>
                  <div className="w-8 h-8 bg-cover rounded-md mr-0">
                    <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                  </div>
                  Company
                </span>
                <div className='text-gray-400 text-sm'>RC 643478</div>
              </td>
              <td>Email@gmail.com</td>
              <td>54 Wewst Virginia</td>
              <td>+030545848</td>
              <td><span className='bg-red-200 text-red-800 p-3 mr-3 rounded'>Not Registered</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-20'>
                <span className='flex'>
                  <div className="w-8 h-8 bg-cover rounded-md mr-0">
                    <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
                  </div>
                  Company
                </span>
                <div className='text-gray-400 text-sm'>RC 643478</div>
              </td>
              <td>Email@gmail.com</td>
              <td>54 Wewst Virginia</td>
              <td>+030545848</td>
              <td><span className='bg-red-200 text-red-800 p-3 mr-3 rounded'>Not Registered</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            
          </tbody>
         
        </table>


      </div>
    </div>
  </div>
    );
}
