import React from 'react';
// import ProjectMembersAvatar from './ProjectMembersAvatar';
// import CurrencyFormat from 'react-currency-format';

export default function AddProject(props) {

    // var naira_sign = '\u20a6';
    // var progress_style = {
    //     width: "90%"
    //   }
  return( 
    <div className={props.show}>
        <div className="xback-board txt-dark-bluex">
            <div className="modal-inner">
                <div className="w-full" onClick={props.handleShow}>
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
                        <input type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="client-name" placeholder="Enter Client Name" name='client-name'/>
                    </div>
                    <div className="col-span-2 text-left">
                        <label className='text-blue-900' htmlFor="company">Company</label><br></br>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Enter Company Name" id='company' name='company'/>
                    </div>
                    <div className="col-span-2 text-left">
                        <label className='text-blue-900' htmlFor="project-location">Location</label>
                        <input type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="project-location" placeholder="Enter Project Location" name='project-location'/>
                    </div>
                    <div className="col-span-2 text-left">
                        <label className='text-blue-900' htmlFor="contract-sum">Contract Sum</label>
                        <input type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="contract-sum" placeholder="Enter Contract Sum" name='contract-sum'/>
                    </div>
                    <div className="col-span-2 text-left">
                        <label className='text-blue-900' htmlFor="cost-of-execution">Cost of Execution</label>
                        <input type="text"className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="cost-of-execution" placeholder="Enter Cost of Execution" name='cost-of-execution'/>
                    </div>
                    <div className="md:col-span-1 col-span-4 text-left">
                        <label className='text-blue-900' htmlFor="bid-id">Bid ID</label><br></br>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder="TRF/NIG/31/2021" id='bid-id' name='bid-id'/>
                    </div>
                    <div className="col-span-1 text-left">
                        <label className='text-blue-900' htmlFor="clent-name">Payment Status</label>
                        <select type="text"className="shadow xappearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="username" name="username">
                            <option className='xpass' value="full-payment">Full Payment</option>
                            <option className='xwarn' value="half-payment">Half Payment</option>
                            <option className='xfail' value="not paid">Not Paid</option>
                        </select>
                    </div>
                    <div className="md:col-span-1 col-span-4 text-left">
                        <label className='text-blue-900' htmlFor="take-off-date">Take-Off Date</label><br></br>
                        <input type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id='take-off-dater' name='take-off-dater'/>
                    </div>
                    <div className="col-span-1 text-left">
                        <label className='text-blue-900' htmlFor="payment-status">Payment Status</label>
                        <select type="text"className="shadow xappearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="payment-status" name="payment-status">
                            <option className='' value="1 month">1 Month</option>
                            <option className='' value="2 Months">2 Months</option>
                            <option className='' value="3 Months">3 Months</option>
                            <option className='' value="6 Months">6 Months</option>
                            <option className='' value="1 Year">1 Year</option>
                        </select>
                    </div>
                    <div className="md:col-span-2 col-span-4 text-left">
                        <div>Attachement File (PF, .docx, jpg formats)</div>
                        <div className='grid grid-cols-2 gap-4'>
                            <div>
                                <label>letter Of Award:</label>
                                <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id='letter-of-award' name='letter-of-award'/>
                            </div>
                            <div>
                                <label>Purchase Order:</label>
                                <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id='purchase-order' name='purchase-order'/>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <label>Remarks</label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id='purchase-order' name='purchase-order'/>
                    </div>
                    <input type="submit" className="md:col-start-4 col-start-3 md:col-span-1 col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-white bg-blue-800 mt-2 focus:outline-none focus:shadow-outline" id='submit-button' value='Create Project'/>
                </form>
            </div>
        </div>
    </div>
  )}