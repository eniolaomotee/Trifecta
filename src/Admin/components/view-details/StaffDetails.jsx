import React, {useState} from 'react';
import DashHeaderDetails from './DashHeaderDetails';
import EditIcon from '../../../assets/icons/Details/EditIcon';
// import generic_logo from '../../../assets/images/generic-company-logo.png'
// import DashHeader from '../dash/DashHeader';
import user from '../../../tempDb/user';

// redux
import {useSelector} from 'react-redux';
import EditStaff from '../modals/EditDetails/EditStaff';


export default function StaffDetails(props) {
    
    const [showEdit, setShowEdit] = useState("hidden");
    const handleShowEdit = () => {
        if(showEdit === "hidden"){ setShowEdit("") }
        else{setShowEdit("hidden")}
    }
    
    // redux variables
    const currentDataStaff = useSelector(state => state.currentDataStaff);

    return(
        <>
            <EditStaff  show={showEdit} handleShow={handleShowEdit}/>
            <div className={`details-main-body bg-whitex ${props.show}`}>
                <DashHeaderDetails title={currentDataStaff.name} status={currentDataStaff.account_status} handleShow={props.handleShow}/>
            
                <div className='my-3 text-lg pl-3 font-bold txt-headr md:flex lg:hidden relative'>
                    {currentDataStaff.name}<br/> <span className={`md:block hidden flt-id xwarn`}>Pending</span>
                    <span className={`md:hidden block-inline xwarn`}>Pending</span>
                </div>

                <div className='bg-whitex w-full pr-5 txt-dark-bluex'>
                    <div className='details-summary text-center w-full mx-auto'>
                        <div className='details-summary-item'>
                            <div className='txt-greyed-out'>Contact</div>
                            <div className='font-bold'>{currentDataStaff.contact}</div>
                        </div>
                        <div className='details-summary-item'>
                            <div className='txt-greyed-out'>Email</div>
                            <div className='font-bold'>{currentDataStaff.email}</div>
                        </div>
                        <div className='details-summary-item'>
                            <div className='txt-greyed-out'>Address</div>
                            <div className='font-bold'>{currentDataStaff.address}</div>
                        </div>
                    </div>
                    <div className="grid justify-center w-full border-t border-t-gray-00 py-7 relative">
                        <span className="w-44 h-44 bg-cover rounded-md mr-0">
                            <img src={user.image} alt='' className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white" />
                        </span>
                        <button className='border-2 borderx px-2 py-1 rounded inline-block mt-2 whitespace-nowrap absolute top-5 right-5' onClick={handleShowEdit}>
                            <EditIcon classx='fill-current inline'/> Edit Details
                        </button>

                    </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-1 gap-y-10 px-10 text-center pb-10 uppercase'>
                            <div className='details-summary-item2'>
                                <div className='font-bold'>ROLE</div>
                                <div className='txt-greyed-out '>{currentDataStaff.role}</div>
                            </div>
                            <div className='details-summary-item2'>
                                <div className='font-bold'>DEPARTMENT</div>
                                <div className='txt-greyed-out'>{currentDataStaff.department}</div>
                            </div>
                            <div className='details-summary-item2'>
                                <div className='font-bold'>SALARY</div>
                                <div className='txt-greyed-out'>{currentDataStaff.salary}</div>
                            </div>
                            <div className='details-summary-item2'>
                                <div className='font-bold'>EMAIL</div>
                                <div className='txt-greyed-out'>{currentDataStaff.email}</div>
                            </div>
                            <div className='details-summary-item2'>
                                <div className='font-bold'>ADDRESS</div>
                                <div className='txt-greyed-out'>{currentDataStaff.address}</div>
                            </div>
                            <div className='details-summary-item2'>
                                <div className='font-bold'>DATE OF BIRTH</div>
                                <div className='txt-greyed-out'>{currentDataStaff.date_of_birth}</div>
                            </div>
                            <div className='details-summary-item2'>
                                <div className='font-bold'>GENDER</div>
                                <div className='txt-greyed-out'>{currentDataStaff.gender}</div>
                            </div>
                            <div className='details-summary-item2'>
                                <div className='font-bold'>ID TYPE</div>
                                <div className='txt-greyed-out'>{currentDataStaff.id_type}</div>
                            </div>
                            <div className='details-summary-item2'>
                                <div className='font-bold'>ID NUMBER</div>
                                <div className='txt-greyed-out'>{currentDataStaff.id_number}</div>
                            </div>
                            <div className='details-summary-item2'>
                                <div className='font-bold'>BANK ACCOUNT NAME</div>
                                <div className='txt-greyed-out'>{currentDataStaff.bank_account_name}</div>
                            </div>
                            <div className='details-summary-item2'>
                                <div className='font-bold'>ACCOUNT NUMBER</div>
                                <div className='txt-greyed-out'>{currentDataStaff.bank_account_number}</div>
                            </div>
                            <div className='details-summary-item2'>
                                <div className='font-bold'>BANK NAME</div>
                                <div className='txt-greyed-out'>Zenith Bank</div>
                            </div>
                        </div>
                </div>
                
            </div>
        </>);
        }
