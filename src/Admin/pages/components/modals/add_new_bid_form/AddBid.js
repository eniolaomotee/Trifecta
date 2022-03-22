import React from 'react';
import "./LoginModalStyle.css";
// import React, { useState } from 'react';
// import { colourOptions } from './multiSelect/data';
// import { default as ReactSelect } from "react-select";
// import ProjectMembersAvatar from './ProjectMembersAvatar';
// import Multiselectr from './multiSelect/MultiSelectr';

export default function AddBid(props) {

  return( 
    <div className={props.show}>
        <div className="xback-board">
            <div className="modal-inner">
                <div className="w-full" onClick={props.handleShow}>
                        <svg className="xsvg-close float-right" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
                </div>
                        <h1 className=' p-2 pl-0 text-3xl text-blue-900 text-left'>Add New Bid</h1>
                <form className="grid grid-cols-4 xgrid-row-7 gap-4">
                        <div className="col-span-4 text-left">
                            <label className='text-blue-900' htmlFor="project-title">Tender Title</label><br></br>
                            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Enter Tender Title" id='tender-title' name='tender-title'/>
                        </div>

                        <div className="col-span-2 text-left">
                            <label className='text-blue-900' htmlFor="client-name">Client</label>
                            <input type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="client-name" placeholder="Enter Client Name" name='client-name'/>
                        </div>
                        <div className="col-span-2 text-left"> 
                            <label className='text-blue-900' htmlFor="client-department">Client Department</label>
                            <input type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="client-department" placeholder="Enter Client Department" name='client-department'/>
                        </div>
                        <div className="col-span-2 text-left"> 
                            <label className='text-blue-900' htmlFor="contract-sum">Contract Sum</label>
                            <input type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="contract-sum" placeholder="Ten Million, Two Hundred and Seven Thousand Naira " name='contract-sum'/>
                        </div>
                        <div className="col-span-1 text-left"> 
                            <label className='text-blue-900' htmlFor="tender-number">Tender Number</label>
                            <input type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="tender-number" placeholder="TRF/NIG/31/2021" name='tender-number'/>
                        </div>
                        <div className="col-span-1 text-left"> 
                            <label className='text-blue-900' htmlFor="date-submittd">Date Submitted</label>
                            <input type="date"className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="date-submittd" placeholder="2/3/2021" name='date-submittd'/>
                        </div>
                        {/* issue yet to be fixed */}
                        <div className="col-span-4 text-left">
                            <label className='text-blue-900' htmlFor="clent-name">Bidding Companies</label>
                            <input type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="username" placeholder="Enter Client Name"/>
                            
                        </div>

                        <div className="md:col-span-2 col-span-4 text-left">
                            <label className='text-blue-900' htmlFor="winning-company">Winning Company</label><br></br>
                            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder="Enter Winning Company" id='winning-company' name='winning-company'/>
                        </div>
                        <div className="md:col-span-2 col-span-3 text-left">
                            <label className='text-blue-900' htmlFor="bid-scope">Bid Scope</label><br></br>
                            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder="Enter bid Scope" id='bid-scope' name='bid-scope'/>
                        </div>
                        {/* <div className="md:col-span-1 col-span-4 text-left">
                            <label className='text-blue-900' htmlFor="reference-number">Reference Number</label><br></br>
                            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder="TRF/NIG/31/2021" id='reference-number' name='reference-number'/>
                        </div>
                        <div className="md:col-span-1 col-span-2 text-left">
                            <label className='text-blue-900' htmlFor="date-submitted">Date Submitted</label><br></br>
                            <input type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder="1/1/2021" id='date-submitted' name='date-submitted'/>
                        </div>
                        <div className="md:col-span-1 col-span-2 text-left">
                            <label className='text-blue-900' htmlFor="bid-status">Bid Status</label><br></br>
                            <select  className="form-control shadow border rounded w-full py-2 px-3 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" name="" id="">
                                <option className="text-yellow-300" value="pending">Pending</option>
                                <option  className="text-green-700" value="completed">Completed</option>
                                <option className="text-red-500" value="failed">Failed</option>
                            </select>
                        </div> */}

                        {/* issue */}
                        {/* <div className="md:col-span-1 col-span-4 text-left">
                            <label className='text-blue-900' htmlFor="date-submitted">Project Team</label><br></br>
                            <ProjectMembersAvatar/>
                        </div> */}

                        <div className="md:col-span-2 col-span-4 row-span-5 text-left">
                            <label className='text-blue-900 w-full'>Attachment Files (PDF, .docx, jpg formats)</label><br></br>
                            <div className='grid grid-cols-4 gap-3'>
                                <div className="col-span-4 text-left">
                                    <label className='text-blue-900' htmlFor="date-submitted">RFQ:</label><br></br>
                                    <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder="1/1/2021" id='date-submitted' name='date-submitted'/>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 text-left">
                            <label className='text-blue-900' htmlFor="date-submitted">Financial Credentials:</label><br></br><br></br>
                            <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder="1/1/2021" id='date-submitted' name='date-submitted'/>
                        </div>
                        {/* <div className="md:col-span-2 col-span-4 text-left">
                            <label className='text-blue-900' htmlFor="bid-scope">Scope</label><br></br>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder='Enter Bid Scope' name='bid-scope'/>
                        </div> */}
                        <input type="submit" className="md:col-start-4 col-start-3 md:col-span-1 col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-white bg-blue-800 mt-2 focus:outline-none focus:shadow-outline" placeholder="1/1/2021" id='date-submitted' value='Create Bid'/>
                </form>
            </div>
        </div>
    </div>
        );
}
