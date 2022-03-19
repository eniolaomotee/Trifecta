import React from 'react';
import FolderSVG from '../../../../icons/dash-home/FolderSVG';
import BidsSVG from '../../../../icons/dash-home/BidsSVG';
import TasksSVG from '../../../../icons/dash-home/TasksSVG';

export default function Group_summary() {
  return (
    <div className="group-of-three-container || grid grid-cols-4 gap-4 mb-1">
            <div className='group-summary-inner bg-white col-span-1 rounded p-3 || grid grid-cols-5'>
              <div className='col-span-2 p-3 rounded-lg xwarn'>
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
            <div className='group-summary-inner bg-white col-span-1 rounded p-3 || grid grid-cols-5'>
              <div className='col-span-2 p-3 rounded-lg xpass'>
                <FolderSVG classx='stroke-current w-30 h-30'/>
                {/* <BidsSVG classx='stroke-current w-30 h-30'/> */}
              </div>
              <div className='col-span-3'>
                <div className='text-4xl text-right'>
                  20
                </div>
                <div className='text-sm text-right mb-0 pb-0'>
                  Completed Projects
                </div>
              </div>
            </div>
            <div className='group-summary-inner bg-white col-span-1 rounded p-3 || grid grid-cols-5'>
              <div className='col-span-2 p-3 rounded-lg xwarn'>
                {/* <BidsSVG classx='stroke-current w-30 h-30'/> */}
                <BidsSVG classx='stroke-current w-30 h-30'/>
              </div>
              <div className='col-span-3'>
                <div className='text-4xl text-right'>
                  10
                </div>
                <div className='text-sm text-right mb-0 pb-0'>
                  Pending Bids
                </div>
              </div>
            </div>
            <div className='group-summary-inner bg-white col-span-1 rounded p-3 || grid grid-cols-5'>
              <div className='col-span-2 p-3 rounded-lg xpass'>
                {/* <FontAwesomeIcon icon={['fas', 'tasks']} className='' size='3x'/> */}
                <BidsSVG classx='stroke-current w-30 h-30'/>
              </div>
              <div className='col-span-3'>
                <div className='text-4xl text-right'>
                  10
                </div>
                <div className='text-sm text-right mb-0 pb-0'>
                  Approved Bids
                </div>
              </div>
            </div>
          </div>
  )
}
