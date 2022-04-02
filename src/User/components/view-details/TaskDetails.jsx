import React, {useState} from 'react';
import DashHeaderDetails from './DashHeaderDetails';
import EditBids from '../modals/EditDetails/EditBids'
// import generic_logo from '../../../assets/images/generic-company-logo.png'
// import DashHeader from '../dash/DashHeader';

export default function TaskDetails(props) {


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
                            <div className='txt-greyed-out'>Initiated By</div>
                            <div className='font-bold'>James Brown</div>
                        </span>
                        <span className='my-2 flex-auto'>
                            <div className='txt-greyed-out'>Assigned To </div>
                            <div className='font-bold'>Emmanuel Fayemi</div>
                        </span>
                        <span className='my-2 flex-auto'>
                            <div className='txt-greyed-out'>Date Created</div>
                            <div className='font-bold'>22 March 2022</div>
                        </span>
                        <span className='my-2 flex-auto'>
                            <div className='txt-greyed-out'>Due Date</div>
                            <div className='font-bold'>22 April 2022</div>
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
                                    TASK DESCRIPTION
                                </div>
                                <div>
                                    Accumsan nisl, amet non in id justo ultricies pharetra. Nec velit ante praesent ullamcorper accumsan, scelerisque in semper sit. Vel neque duis at gravida diam. Tristique aliquet morbi massa morbi ac adipiscing. Nisi, cras in viverra sit blandit justo nunc, rhoncus ut. Est, consequat mauris fusce eleifend eget. Dui ut molestie nulla id blandit ac mi. Ac, faucibus ridiculus proin laoreet vel quam et. Tristique ipsum blandit diam risus. Pellentesque posuere etiam tortor, lorem non, ultricies. Ullamcorper neque turpis ligula sit sed risus. Pellentesque in pellentesque sollicitudin phasellus ut. Semper nascetur egestas amet suspendisse sagittis nulla sed. 
                                </div>
                            </div>
                            <div className="description mt-5">
                                <div className='font-bold'>
                                    TASK SCOPE
                                </div>
                                <div>
                                    Accumsan nisl, amet non in id justo ultricies pharetra. Nec velit ante praesent ullamcorper accumsan, scelerisque in semper sit. Vel neque duis at gravida diam. Tristique aliquet morbi massa morbi ac adipiscing. Nisi, cras in viverra sit blandit justo nunc, rhoncus ut. Est, consequat mauris fusce eleifend eget. Dui ut molestie nulla id blandit ac mi. Ac, faucibus ridiculus proin laoreet vel quam et. 
                                </div>
                            </div>
                            <div className="description mt-5">
                                <div className='font-bold'>
                                    TASK REMARKS
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
                                PEOPLE INVOLVED
                                <ul>
                                    <li className='flex'> Gbenga Durotimo</li>
                                    <li className='flex'> Osita Buhari</li>
                                    <li className='flex'> Khadijah Olawale</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>
        </>);
        }
