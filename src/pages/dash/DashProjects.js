import React from 'react';
import SidePanel from './components/SidePanel';
import DashHeader from './components/DashHeader';
import {userx} from './components/DashHeader'
import {regularx, activex} from './components/SidePanel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function DashProjects() {
    var active_selectr = {
        dash: regularx,
        projects: activex,
        bids: regularx,
        companies: regularx,
        tasks: regularx,
        equipments : regularx,
        expenses: regularx,
        logout: regularx,
        settings: regularx
    }    
    var progress_style = {
      width: "90%"
    }
    // const [Projectslisst]
  return (
    <div className='dashboardx grid md:grid-cols-7 grid-cols-5'>
    <SidePanel active_selectr={active_selectr}/>
    <div className='col-span-4 md:col-span-6 row-span-5 bg-blue-100 || grid grid-rows-10 gap-2'>
      <DashHeader/>

      <div className="row-span-9 ||  grid grid-rows-10 gap-2">
        <div className='row-span-1 px-3 flex'>
          <span className='absolute z-10 py-4 pl-3 pt-6 text-lg'><FontAwesomeIcon icon={["fas", "search"]} /></span>
          <input type="text" className="shadow appearance-none border rounded w-9/12 py-2 pl-10 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Enter Project Title" id='project-title' name='project-title'/>
          <button className='w-3/12 bg-blue-800 ml-2 py-2 text-white'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2'>New Project</span></button>
        </div>
        <div className="row-span-9 || grid grid-cols-3 grid-rows-3 gap-2 px-2">
          <div className=' bg-white rounded'>
            <div className='p-3'>
              <div className='flex'><span>#construction</span><span className='ml-auto bg-red-100 text-red-500 rounded-lg text-xs p-1 px-2'>Not Paid</span></div>
              <div className='text-center text-lg py-3 text-justifyx'>Apo Legislative Quarters Reconstruction</div>
              <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>client:</span></div>
              <div className='flex'><span>Ministry of Housing</span><span className='ml-auto'>N666666</span></div>
              <div className='flex'>
                <div className='h-1 w-full bg-gray-300 mt-3'>
                  <div className='h-1 bg-blue-800' style={progress_style}></div>
                </div>
                  <span className='w-2/12 pl-2 ml-auto'>{progress_style.width}</span>
              </div>

            </div>
            <div className='w-full bborder border-t-2 flex px-2'>
              <div className='py-2 text-2xl'><FontAwesomeIcon icon={['fas', 'wallet']}/><span className='pl-2 text-lg align-middle'>N{userx.total_amountx}</span></div>
              <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
            </div>
          </div>
          <div className=' bg-white rounded'>
            <div className='p-3'>
              <div className='flex'><span>#construction</span><span className='ml-auto bg-green-100 text-green-500 rounded-lg text-xs p-1 px-2'>Paid</span></div>
              <div className='text-center text-lg py-3 text-justifyx'>Apo Legislative Quarters Reconstruction</div>
              <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>client:</span></div>
              <div className='flex'><span>Ministry of Housing</span><span className='ml-auto'>N666666</span></div>
              <div className='flex'>
                <div className='h-1 w-full bg-gray-300 mt-3'>
                  <div className='h-1 bg-blue-800' style={progress_style}></div>
                </div>
                  <span className='w-2/12 pl-2 ml-auto'>{progress_style.width}</span>
              </div>

            </div>
            <div className='w-full bborder border-t-2 flex px-2'>
              <div className='py-2 text-2xl'><FontAwesomeIcon icon={['fas', 'wallet']}/><span className='pl-2 text-lg align-middle'>N{userx.total_amountx}</span></div>
              <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
            </div>
          </div>
          <div className=' bg-white rounded'>
            <div className='p-3'>
              <div className='flex'><span>#construction</span><span className='ml-auto bg-red-100 text-red-500 rounded-lg text-xs p-1 px-2'>Not Paid</span></div>
              <div className='text-center text-lg py-3 text-justifyx'>Apo Legislative Quarters Reconstruction</div>
              <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>client:</span></div>
              <div className='flex'><span>Ministry of Housing</span><span className='ml-auto'>N666666</span></div>
              <div className='flex'>
                <div className='h-1 w-full bg-gray-300 mt-3'>
                  <div className='h-1 bg-blue-800' style={progress_style}></div>
                </div>
                  <span className='w-2/12 pl-2 ml-auto'>{progress_style.width}</span>
              </div>

            </div>
            <div className='w-full bborder border-t-2 flex px-2'>
              <div className='py-2 text-2xl'><FontAwesomeIcon icon={['fas', 'wallet']}/><span className='pl-2 text-lg align-middle'>N{userx.total_amountx}</span></div>
              <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
            </div>
          </div>
          <div className=' bg-white rounded'>
            <div className='p-3'>
              <div className='flex'><span>#construction</span><span className='ml-auto bg-red-100 text-red-500 rounded-lg text-xs p-1 px-2'>Not Paid</span></div>
              <div className='text-center text-lg py-3 text-justifyx'>Apo Legislative Quarters Reconstruction</div>
              <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>client:</span></div>
              <div className='flex'><span>Ministry of Housing</span><span className='ml-auto'>N666666</span></div>
              <div className='flex'>
                <div className='h-1 w-full bg-gray-300 mt-3'>
                  <div className='h-1 bg-blue-800' style={progress_style}></div>
                </div>
                  <span className='w-2/12 pl-2 ml-auto'>{progress_style.width}</span>
              </div>

            </div>
            <div className='w-full bborder border-t-2 flex px-2'>
              <div className='py-2 text-2xl'><FontAwesomeIcon icon={['fas', 'wallet']}/><span className='pl-2 text-lg align-middle'>N{userx.total_amountx}</span></div>
              <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
            </div>
          </div>
          <div className=' bg-white rounded'>
            <div className='p-3'>
              <div className='flex'><span>#construction</span><span className='ml-auto bg-red-100 text-red-500 rounded-lg text-xs p-1 px-2'>Not Paid</span></div>
              <div className='text-center text-lg py-3 text-justifyx'>Apo Legislative Quarters Reconstruction</div>
              <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>client:</span></div>
              <div className='flex'><span>Ministry of Housing</span><span className='ml-auto'>N666666</span></div>
              <div className='flex'>
                <div className='h-1 w-full bg-gray-300 mt-3'>
                  <div className='h-1 bg-blue-800' style={progress_style}></div>
                </div>
                  <span className='w-2/12 pl-2 ml-auto'>{progress_style.width}</span>
              </div>

            </div>
            <div className='w-full bborder border-t-2 flex px-2'>
              <div className='py-2 text-2xl'><FontAwesomeIcon icon={['fas', 'wallet']}/><span className='pl-2 text-lg align-middle'>N{userx.total_amountx}</span></div>
              <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
            </div>
          </div>
          <div className=' bg-white rounded'>
            <div className='p-3'>
              <div className='flex'><span>#construction</span><span className='ml-auto bg-red-100 text-red-500 rounded-lg text-xs p-1 px-2'>Not Paid</span></div>
              <div className='text-center text-lg py-3 text-justifyx'>Apo Legislative Quarters Reconstruction</div>
              <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>client:</span></div>
              <div className='flex'><span>Ministry of Housing</span><span className='ml-auto'>N666666</span></div>
              <div className='flex'>
                <div className='h-1 w-full bg-gray-300 mt-3'>
                  <div className='h-1 bg-blue-800' style={progress_style}></div>
                </div>
                  <span className='w-2/12 pl-2 ml-auto'>{progress_style.width}</span>
              </div>

            </div>
            <div className='w-full bborder border-t-2 flex px-2'>
              <div className='py-2 text-2xl'><FontAwesomeIcon icon={['fas', 'wallet']}/><span className='pl-2 text-lg align-middle'>N{userx.total_amountx}</span></div>
              <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
            </div>
          </div>
          <div className=' bg-white rounded'>
            <div className='p-3'>
              <div className='flex'><span>#construction</span><span className='ml-auto bg-red-100 text-red-500 rounded-lg text-xs p-1 px-2'>Not Paid</span></div>
              <div className='text-center text-lg py-3 text-justifyx'>Apo Legislative Quarters Reconstruction</div>
              <div className='flex text-gray-500'><span>client:</span><span className='ml-auto'>client:</span></div>
              <div className='flex'><span>Ministry of Housing</span><span className='ml-auto'>N666666</span></div>
              <div className='flex'>
                <div className='h-1 w-full bg-gray-300 mt-3'>
                  <div className='h-1 bg-blue-800' style={progress_style}></div>
                </div>
                  <span className='w-2/12 pl-2 ml-auto'>{progress_style.width}</span>
              </div>

            </div>
            <div className='w-full bborder border-t-2 flex px-2'>
              <div className='py-2 text-2xl'><FontAwesomeIcon icon={['fas', 'wallet']}/><span className='pl-2 text-lg align-middle'>N{userx.total_amountx}</span></div>
              <button className='bg-blue-800 text-white px-1 rounded my-1 ml-auto'>View Details</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  </div>
    );
}
