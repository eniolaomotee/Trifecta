import React, {useState} from 'react';
import DashHeaderDetails from './DashHeaderDetails';
import EditBids from '../modals/EditDetails/EditBids'
import generic_logo from '../../../assets/images/generic-company-logo.png'
// import DashHeader from '../dash/DashHeader';

export default function BidDetails(props) {


    const [showEdit, setShowEdit] = useState("hidden");
    const handleShowEdit = () => {
        if(showEdit === "hidden"){ setShowEdit("") }
        else{setShowEdit("hidden")}
    }

    return(
        <>
            <EditBids  show={showEdit} handleShow={handleShowEdit}/>
            <div className={`main-body bg-white ${props.show}`}>
                <DashHeaderDetails title={props.name} handleShow={props.handleShow}/>
            
                <div className='bg-white w-full'>
                    <div className='bg-white shadow flex'>
                        <span className='my-2 flex-auto mx-4'>
                            <div className='txt-greyed-out'>Tender No</div>
                            <div className='font-bold'>2359853</div>
                        </span>
                        <span className='my-2 flex-auto'>
                            <div className='txt-greyed-out'>Client</div>
                            <div className='font-bold'>Stark Industries</div>
                        </span>
                        <span className='my-2 flex-auto'>
                            <div className='txt-greyed-out'>Client Department</div>
                            <div className='font-bold'>Procurement Department</div>
                        </span>
                        <span className='my-2 flex-auto'>
                            <div className='txt-greyed-out'>Contract Sum</div>
                            <div className='font-bold'>₦6,751,214.65</div>
                        </span>
                        <span className='my-2 flex-auto'>
                            <div className='txt-greyed-out'>Winning Company</div>
                            <div className='font-bold'>Biffco Enterprises Ltd.</div>
                        </span>
                        <span className='my-2 flex-auto'>
                            <div className='txt-greyed-out'>Date Submitted</div>
                            <div className='font-bold'>22 March 2022</div>
                        </span>
                        <div className=''>
                            <button className='border-2 px-2 py-1 rounded' onClick={handleShowEdit}>
                                Edit Details
                            </button>
                        </div>
                    </div>
                    <div className='m-4 bg-white shadow grid grid-cols-7 gap-12 p-7'>
                        <div className='col-span-5 details-desc'>
                            <div className="description mt-5">
                                <div className='font-bold'>
                                    BID DESCRIPTION
                                </div>
                                <div>
                                    Accumsan nisl, amet non in id justo ultricies pharetra. Nec velit ante praesent ullamcorper accumsan, scelerisque in semper sit. Vel neque duis at gravida diam. Tristique aliquet morbi massa morbi ac adipiscing. Nisi, cras in viverra sit blandit justo nunc, rhoncus ut. Est, consequat mauris fusce eleifend eget. Dui ut molestie nulla id blandit ac mi. Ac, faucibus ridiculus proin laoreet vel quam et. Tristique ipsum blandit diam risus. Pellentesque posuere etiam tortor, lorem non, ultricies. Ullamcorper neque turpis ligula sit sed risus. Pellentesque in pellentesque sollicitudin phasellus ut. Semper nascetur egestas amet suspendisse sagittis nulla sed. 
                                </div>
                            </div>
                            <div className="description mt-5">
                                <div className='font-bold'>
                                    BID SCOPE
                                </div>
                                <div>
                                    Accumsan nisl, amet non in id justo ultricies pharetra. Nec velit ante praesent ullamcorper accumsan, scelerisque in semper sit. Vel neque duis at gravida diam. Tristique aliquet morbi massa morbi ac adipiscing. Nisi, cras in viverra sit blandit justo nunc, rhoncus ut. Est, consequat mauris fusce eleifend eget. Dui ut molestie nulla id blandit ac mi. Ac, faucibus ridiculus proin laoreet vel quam et. 
                                </div>
                            </div>
                            <div className="description mt-5">
                                <div className='font-bold'>
                                    BID REMARKS
                                </div>
                                <div>
                                    Accumsan nisl, amet non in id justo ultricies pharetra. Nec velit ante praesent ullamcorper accumsan, scelerisque in semper sit. Vel neque duis at gravida diam. Tristique aliquet morbi massa morbi ac adipiscing. Nisi, cras in viverra sit blandit justo nunc, rhoncus ut. Est, consequat mauris fusce eleifend eget. Dui ut molestie nulla id blandit ac mi. Ac, faucibus ridiculus proin laoreet vel quam et. 
                                </div>
                            </div>
                            <div className="description mt-5">
                                <div className='font-bold'>
                                    TAGS
                                </div>
                                <div>
                                    #construction #Abuja
                                </div>
                            </div>
                        </div>
                        <div className='side-content col-span-2'>
                            <div>
                                BIDDING COMPANIES
                                <ul>
                                    <li className='flex'><img src={generic_logo} alt="company img" width={30} className="overflow-hidden object-cover rounded-full border-2 mr-3"/>Assure Re Intermediaries Inc</li>
                                    <li className='flex'><img src={generic_logo} alt="company img" width={30} className="overflow-hidden object-cover rounded-full border-2 mr-3"/>Cyberdyne Systems Corp.</li>
                                    <li className='flex'><img src={generic_logo} alt="company img" width={30} className="overflow-hidden object-cover rounded-full border-2 mr-3"/>Wayne Enterprises</li>
                                </ul>
                            </div>
                            <div className='mt-8'>
                                FILES
                                <ul>
                                    <li className='flex'><img src={generic_logo} alt="company img" width={30} className="overflow-hidden object-cover rounded-full border-2 mr-3"/>Letter Of Award.docx</li>
                                    <li className='flex'><img src={generic_logo} alt="company img" width={30} className="overflow-hidden object-cover rounded-full border-2 mr-3"/>Purchase Order.jpeng</li>
                                    <li className='flex'><img src={generic_logo} alt="company img" width={30} className="overflow-hidden object-cover rounded-full border-2 mr-3"/>Acceptance Letter.pdf</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </>);
        }
