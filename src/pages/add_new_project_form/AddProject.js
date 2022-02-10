import React, { useState } from 'react';
import ProjectMembersAvatar from './ProjectMembersAvatar';
// import CurrencyFormat from 'react-currency-format';

export default function AddProject(props) {

    var naira_sign = '\u20a6';
    var progress_style = {
        width: "90%"
      }
  return( 
    <div className={props.show}>
        <div className="xback-board">
            <div className="bg-white rounded-lg p-8 w-4/5 mt-10 mx-auto">
                <div className="w-full" onClick={props.handleShowP}>
                        <svg className="xsvg-close float-right" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
                </div>
                        <h1 className=' p-2 pl-0 text-3xl text-blue-900 text-left'>Add New Project</h1>
                <form className="grid grid-cols-4 grid-row-7 gap-4">
                        <div className="col-span-2 text-left">
                            <label className='text-blue-900' htmlFor="project-title">Project Title</label><br></br>
                            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Enter Project Title" id='project-title' name='project-title'/>
                        </div>
                        <div className="col-span-2 text-left">
                            <label className='text-blue-900' htmlFor="client-name">Client</label>
                            <input type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="client-name" type="text" placeholder="Enter Client Name" name='client-name'/>
                        </div>
                        <div className="col-span-2 text-left">
                            <label className='text-blue-900' htmlFor="company">Company</label><br></br>
                            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Enter Company Name" id='company' name='company'/>
                        </div>
                        <div className="col-span-2 text-left">
                            <label className='text-blue-900' htmlFor="project-location">Location</label>
                            <input type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="project-location" type="text" placeholder="Enter Project Location" name='project-location'/>
                        </div>
                        <div className='col-span-4 grid grid-cols-9 gap-4'>
                            <div className="col-span-3 text-left">
                                <label className='text-blue-900' htmlFor="contract-sum">Contract Sum</label>
                                <input type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="contract-sum" type="text" placeholder="Enter Contract Sum" name='contract-sum'/>
                            </div>
                            <div className='col-span-6 grid grid-cols-6 gap-4'>
                                <div className="col-span-2 text-left">
                                    <label className='text-blue-900' htmlFor="clent-name">Payment Status</label>
                                    <select type="text"className="shadow xappearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="username">
                                        <option className='bg-red-200 text-red-700' value="half-payment">Half Payment</option>
                                    </select>
                                </div>
                                <div className="col-span-2 text-left">
                                    <label className='text-blue-900' htmlFor="winning-company">Amount Paid</label><br></br>
                                    <span className='absolute z-10 py-4 pl-3 text-green-500'>{naira_sign}</span>
                                    <input type="text" className="pl-10 text-green-500 shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" datatype='currency' placeholder="300,000" pattern='^\$\d{1,3}(,\d{3})*(\.\d+)?$' id='winning-company' name='winning-company'/>
                                </div>
                                <div className="col-span-2 text-left">
                                    <label className='text-blue-900' htmlFor="winning-company">Balanced Owed</label><br></br>
                                    <span className='absolute z-10 py-4 pl-3 text-orange-500'>{naira_sign}</span>
                                    <input type="text" className="pl-10 text-orange-500 shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" datatype='currency' placeholder="300,000" pattern='^\$\d{1,3}(,\d{3})*(\.\d+)?$' id='winning-company' name='winning-company'/>
                                </div>
                            </div>
                        </div>
                        {/* issue */}
                        <div className='col-span-4 grid grid-cols-8 gap-4'>

                            <div className="xmd:col-span-1 col-span-3 text-left">
                                <label className='text-blue-900' htmlFor="date-submitted">Project Team</label><br></br>
                                <ProjectMembersAvatar/>
                            </div>
                            <div className="col-span-2 text-left">
                                <label className='text-blue-900' htmlFor="project-status">Project Status</label>
                                <select type="text"className="shadow xappearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="username">
                                    <option className='bg-red-200 text-red-700' value="active">Active</option>
                                </select>
                            </div>
                            <div className="xmd:col-span-1 col-span-3 text-left">
                                <label className='text-blue-900' htmlFor="date-submitted">Project Team</label><br></br>
                                <div className='flex'>
                                    <div className='h-3 w-full bg-gray-300 mt-3 rounded-lg'>
                                        <div className='h-3 bg-blue-800 rounded-lg' style={progress_style}></div>
                                    </div>
                                        <span className='w-2/12 pl-2 ml-auto'>{progress_style.width}</span>
                                    </div>
                            </div>
                        </div>
                        <div className="col-span-1 text-left">
                            <label className='text-blue-900' htmlFor="x">letter of Award:</label><br></br>
                            <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " id='x' name='project-title'/>
                        </div>
                        <div className="col-span-1 text-left">
                            <label className='text-blue-900' htmlFor="x">Puurchase Order:</label><br></br>
                            <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " id='x' name='project-title'/>
                        </div>
                        <div className="col-span-1 text-left">
                            <label className='text-blue-900' htmlFor="x">Invoice:</label><br></br>
                            <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " id='x' name='project-title'/>
                        </div>
                        <div className="col-span-1 text-left">
                            <label className='text-blue-900' htmlFor="x">Certificate of Completion:</label><br></br>
                            <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " id='x' name='project-title'/>
                        </div>
                        <div className="col-span-4 text-left">
                            <label className='text-blue-900' htmlFor="x">Remarks</label><br></br>
                            <textarea placeholder='Enter Projects Remarks' className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " id='x'>
                            </textarea>
                            <te  name='project-title'/>
                        </div>

                        <input type="submit" className="md:col-start-4 col-start-3 md:col-span-1 col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-white bg-blue-800 mt-2 focus:outline-none focus:shadow-outline" placeholder="1/1/2021" id='date-submitted' value='Create Project'/>
                </form>
            </div>
        </div>
    </div>
        );
}
