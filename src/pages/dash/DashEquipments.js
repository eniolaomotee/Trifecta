import React from 'react';
import SidePanel from './components/SidePanel';
import DashHeader from './components/DashHeader';
import {userx} from './components/DashHeader';
import {regularx, activex} from './components/SidePanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DashEquipments() {
    var active_selectr = {
        dash: regularx,
        projects: regularx,
        bids: regularx,
        companies: regularx,
        tasks: regularx,
        equipments : activex,
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
          <input type="text" className="shadow appearance-none border rounded w-7/12 py-2 pl-10 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Enter Project Title" id='project-title' name='project-title'/>
          <button className='w-2/12 bg-blue-800 ml-2 py-2 text-white'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2'>Add New Equipment</span></button>
          <button className='w-2/12 bg-white border border-blue-700 text-blue-700 ml-2 py-2'>Request Equipment</button>
        </div>
        <table className="row-span-9 px-20 ml-4 table-auto">
          <thead className='bg-blue-200 py-5'>
            <tr>
              <td className=' pl-10'>Equipment</td>
              <td>Description</td>
              <td>Lastes Price</td>
              <td>Stock (Quality)</td>
              <td>Last Purchase Price</td>
            </tr>
          </thead>
          <tbody className='bg-white'>
         
            <tr className='hover:bg-gray-300'>
              <td className=' pl-10'>
                <span className=''>
                  Grinding Tool Dynamometer
                </span>
                <div className='text-gray-400 text-sm'>Equipment No 585854</div>
              </td>
              <td>this is a discription about discription based on the description</td>
              <td>N454515.00</td>
              <td className="pl-10">45</td>
              <td><span className='p-3 mr-3'>Feb 20, 2008</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-10'>
                <span className=''>
                  Grinding Tool Dynamometer
                </span>
                <div className='text-gray-400 text-sm'>Equipment No 585854</div>
              </td>
              <td>this is a discription about discription based on the description</td>
              <td>N454515.00</td>
              <td className="pl-10">45</td>
              <td><span className='p-3 mr-3'>Feb 20, 2008</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-10'>
                <span className=''>
                  Grinding Tool Dynamometer
                </span>
                <div className='text-gray-400 text-sm'>Equipment No 585854</div>
              </td>
              <td>this is a discription about discription based on the description</td>
              <td>N454515.00</td>
              <td className="pl-10">45</td>
              <td><span className='p-3 mr-3'>Feb 20, 2008</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-10'>
                <span className=''>
                  Grinding Tool Dynamometer
                </span>
                <div className='text-gray-400 text-sm'>Equipment No 585854</div>
              </td>
              <td>this is a discription about discription based on the description</td>
              <td>N454515.00</td>
              <td className="pl-10">45</td>
              <td><span className='p-3 mr-3'>Feb 20, 2008</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-10'>
                <span className=''>
                  Grinding Tool Dynamometer
                </span>
                <div className='text-gray-400 text-sm'>Equipment No 585854</div>
              </td>
              <td>this is a discription about discription based on the description</td>
              <td>N454515.00</td>
              <td className="pl-10">45</td>
              <td><span className='p-3 mr-3'>Feb 20, 2008</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-10'>
                <span className=''>
                  Grinding Tool Dynamometer
                </span>
                <div className='text-gray-400 text-sm'>Equipment No 585854</div>
              </td>
              <td>this is a discription about discription based on the description</td>
              <td>N454515.00</td>
              <td className="pl-10">45</td>
              <td><span className='p-3 mr-3'>Feb 20, 2008</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-10'>
                <span className=''>
                  Grinding Tool Dynamometer
                </span>
                <div className='text-gray-400 text-sm'>Equipment No 585854</div>
              </td>
              <td>this is a discription about discription based on the description</td>
              <td>N454515.00</td>
              <td className="pl-10">45</td>
              <td><span className='p-3 mr-3'>Feb 20, 2008</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-10'>
                <span className=''>
                  Grinding Tool Dynamometer
                </span>
                <div className='text-gray-400 text-sm'>Equipment No 585854</div>
              </td>
              <td>this is a discription about discription based on the description</td>
              <td>N454515.00</td>
              <td className="pl-10">45</td>
              <td><span className='p-3 mr-3'>Feb 20, 2008</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-10'>
                <span className=''>
                  Grinding Tool Dynamometer
                </span>
                <div className='text-gray-400 text-sm'>Equipment No 585854</div>
              </td>
              <td>this is a discription about discription based on the description</td>
              <td>N454515.00</td>
              <td className="pl-10">45</td>
              <td><span className='p-3 mr-3'>Feb 20, 2008</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
            <tr className='hover:bg-gray-300'>
              <td className=' pl-10'>
                <span className=''>
                  Grinding Tool Dynamometer
                </span>
                <div className='text-gray-400 text-sm'>Equipment No 585854</div>
              </td>
              <td>this is a discription about discription based on the description</td>
              <td>N454515.00</td>
              <td className="pl-10">45</td>
              <td><span className='p-3 mr-3'>Feb 20, 2008</span><span><FontAwesomeIcon icon={['fas','ellipsis-v']}/></span></td>
            </tr>
           
            
          </tbody>
         
        </table>


      </div>
    </div>
  </div>
    );
}
