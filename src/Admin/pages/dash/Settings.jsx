import React, {useEffect, useState} from 'react';
import EditIcon from '../../../assets/icons/Details/EditIcon';
import DashHeader from '../../components/header/DashHeader';
import {regularx, activex, closeNav} from '../../components/menu/SidePanel'
import EditSettings from '../../components/modals/EditDetails/EditSettings';

import user from '../../../tempDb/user'
import LoadingScreen from './LoadingScreen';

// redux
import MiniSidePanel from '../../components/menu/MiniSidePanel';

export default function Settings(props) {
    
    var active_selectr = {
        dash: regularx,
        projects: regularx,
        bids: regularx,
        companies: regularx,
        tasks: regularx,
        equipments : regularx,
        meetings : regularx,
        vendors : regularx,
        staff : regularx,
        expenses: regularx,

        settings: activex,
        logout: regularx,
    } 
     
    // loading screen after fetch
    const [isLoading, setIsLoading] = useState(true);
    useEffect( ()=> {
        fetch(`https://api.publicapis.org/entries`)
        .then(res => res.json())
        .then(data => {
            setIsLoading(false);
        })
        .catch(err => console.log(err));
    }, []);  
    //  
   
    const [showEdit, setShowEdit] = useState("hidden");
    const handleShowEdit = () => {
        if(showEdit === "hidden"){ setShowEdit("") }
        else{setShowEdit("hidden")}
    }
    
    // redux variables
    // const currentDataTasks = useSelector(state => state.currentDataTasks);

    return(
        <>
            {isLoading ? <LoadingScreen/> : 
            <>
                <EditSettings  show={showEdit} handleShow={handleShowEdit}/>
                <MiniSidePanel active_selectr={active_selectr}/>
                <div className={`details-main-body bg-whitex ${props.show}`} onClick={closeNav}>
                    <DashHeader title={'Settings'} handleShow={props.handleShow}/>
                
                    <div className='my-3 text-lg pl-3 font-bold txt-headr md:flex lg:hidden relative'>
                        {'Settings'}<br/> <span className={`md:block hidden flt-id xwarn`}>Pending</span>
                        <span className={`md:hidden block-inline xwarn`}>Pending</span>
                    </div>

                    <div className='bg-whitex w-full pr-5 txt-dark-bluex relative'>
                        <div className="grid justify-center w-full border-t border-t-blue-800 py-7">
                            <span className="w-44 h-44 bg-cover rounded-md mr-0">
                                <img src={user.image} alt='' className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white" />
                            </span>
                            <button className='border-2 border px-2 py-1 rounded inline-block mt-2 whitespace-nowrap absolute top-5 right-5' onClick={handleShowEdit}>
                                <EditIcon classx='fill-current inline'/> Edit Details
                            </button>
                            <div className='text-center font-bold text-lg'>{user.name}</div>

                        </div>

                        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-3] gap-y-10 px-10 text-center pb-10'>
                            <div className='details-summary-item'>
                                <div className='txt-greyed-out'>CONTACT</div>
                                <div className='font-bold'>{user.contact}</div>
                            </div>
                            <div className='details-summary-item'>
                                <div className='txt-greyed-out'>EMAIL</div>
                                <div className='font-bold'>{user.email}</div>
                            </div>
                            <div className='details-summary-item'>
                                <div className='txt-greyed-out'>ADDRESS</div>
                                <div className='font-bold'>{user.address}</div>
                            </div>
                            <div className='details-summary-item'>
                                <div className='txt-greyed-out'>DATE OF BIRTH</div>
                                <div className='font-bold'>{user.date_of_birth}</div>
                            </div>
                            <div className='details-summary-item'>
                                <div className='txt-greyed-out'>GENDER</div>
                                <div className='font-bold'>{user.gender}</div>
                            </div>
                            <div className='details-summary-item'>
                                <div className='txt-greyed-out'>ID TYPE</div>
                                <div className='font-bold'>{user.id_type}</div>
                            </div>
                            <div className='details-summary-item'>
                                <div className='txt-greyed-out'>ROLE</div>
                                <div className='font-bold'>{user.role}</div>
                            </div>
                            <div className='details-summary-item'>
                                <div className='txt-greyed-out'>DEPARTMENT</div>
                                <div className='font-bold'>{user.department}</div>
                            </div>
                            <div className='details-summary-item'>
                                <div className='txt-greyed-out'>ID NUMBER</div>
                                <div className='font-bold'>{user.id_number}</div>
                            </div>
                            <div className='details-summary-item'>
                                <div className='txt-greyed-out'>BANK ACCOUNT NAME</div>
                                <div className='font-bold'>{user.bank_account_name}</div>
                            </div>
                            <div className='details-summary-item'>
                                <div className='txt-greyed-out'>ACCOUNT NUMBER</div>
                                <div className='font-bold'>{user.account_number}</div>
                            </div>
                            <div className='details-summary-item'>
                                <div className='txt-greyed-out'>BANK NAME</div>
                                <div className='font-bold'>{user.bank_name}</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </>}
        </>
    );
}
