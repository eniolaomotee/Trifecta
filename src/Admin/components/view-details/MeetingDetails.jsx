import React, {useState} from 'react';
import DashHeaderDetails from './DashHeaderDetails';
import EditIcon from '../../../assets/icons/Details/EditIcon';
import EditMeeting from '../modals/EditDetails/EditMeeting';
// import generic_logo from '../../../assets/images/generic-company-logo.png'
// import DashHeader from '../dash/DashHeader';

export default function MeetingDetails(props) {


    const [showEdit, setShowEdit] = useState("hidden");
    const handleShowEdit = () => {
        if(showEdit === "hidden"){ setShowEdit("") }
        else{setShowEdit("hidden")}
    }

    return(
        <>
            <EditMeeting  show={showEdit} handleShow={handleShowEdit}/>
            <div className={`details-main-body bg-white ${props.show}`}>
                <DashHeaderDetails title={props.name} handleShow={props.handleShow}/>
            
                <div className='bg-white w-full pr-5'>
                    <div className='bg-white shadow flex'>
                        <div className="flex flex-auto ml-2">
                            <span className='my-2 flex-auto'>
                                <div className='txt-greyed-out'>Date Created</div>
                                <div className='font-bold'>22 March 2022</div>
                            </span>
                            <span className='my-2 flex-auto'>
                                <div className='txt-greyed-out'>Start Time</div>
                                <div className='font-bold'>10:00 AM</div>
                            </span>
                            <span className='my-2 flex-auto'>
                                <div className='txt-greyed-out'>End Time</div>
                                <div className='font-bold'>11:00 AM</div>
                            </span>
                            <span className='my-2 flex-auto mx-4'>
                                <div className='txt-greyed-out'>Mode</div>
                                <div className='font-bold'>Physical Meeting</div>
                            </span>
                            <span className='my-2 flex-auto'>
                                <div className='txt-greyed-out'>Location</div>
                                <div className='font-bold'>Small Meeting Room</div>
                            </span>
                        </div>
                        <div className=''>
                            <button className='border-2 border- px-2 py-1 rounded inline-block mt-2' onClick={handleShowEdit}>
                                <EditIcon classx='fill-current inline'/> Edit Details
                            </button>
                        </div>
                    </div>
                    <div className='m-4 bg-white shadow grid grid-cols-7 gap-12 p-7'>
                        <div className='col-span-5 details-desc'>
                            <div className="description mt-5">
                                <div className='font-bold'>
                                    MEETING DESCRIPTION
                                </div>
                                <div>
                                    Accumsan nisl, amet non in id justo ultricies pharetra. Nec velit ante praesent ullamcorper accumsan, scelerisque in semper sit. Vel neque duis at gravida diam. Tristique aliquet morbi massa morbi ac adipiscing. Nisi, cras in viverra sit blandit justo nunc, rhoncus ut. Est, consequat mauris fusce eleifend eget. Dui ut molestie nulla id blandit ac mi. Ac, faucibus ridiculus proin laoreet vel quam et. Tristique ipsum blandit diam risus. Pellentesque posuere etiam tortor, lorem non, ultricies. Ullamcorper neque turpis ligula sit sed risus. Pellentesque in pellentesque sollicitudin phasellus ut. Semper nascetur egestas amet suspendisse sagittis nulla sed. 
                                </div>
                            </div>
                            <div className="description mt-5">
                                <div className='font-bold'>
                                    MEETING REMARKS
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
                                INITIATED BY
                                <ul>
                                    <li className='flex'> Gbenga Durotimo</li>
                                </ul>
                            </div>
                            <div className='mt-24'>
                                INVITED PERSONNEL
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
