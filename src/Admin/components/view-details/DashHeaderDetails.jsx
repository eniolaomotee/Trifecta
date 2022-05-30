import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dummy_user from '../../../assets/images/dummy.jpg'
import ArrowleftIcon from '../../../assets/icons/tables/ArrowLeftIcon';
// import plus_image from '../../../images/plus-icon.png'


export var userx ={ 
  name:"James Ajebola", 
image: dummy_user,
amountx: 20000,
total_amountx: 20000
}
export default function DashHeaderDetails(props) {
  var status_cn;
  var pro_status;
  if(props.status !== undefined){pro_status = props.status.toLowerCase();}
  // var pro_status = props.status.toLowerCase();
  
  if(pro_status === 'activated' || pro_status === 'active' || pro_status === 'approved' || pro_status === 'completed'){status_cn = 'xpass'}
  else if(pro_status === 'deactivated' || pro_status === 'unfinished' || pro_status === 'rejected' || pro_status === 'not started'){status_cn = 'xfail'}
  else{status_cn = 'xwarn'}
  return (
    
    <div className="headr bg-whitex flex pr-4 border-b">
        <div className='my-auto text-lg pl-3 font-bold txt-headr flex'>
          <button  onClick={props.handleShow}><ArrowleftIcon classx='stroke-current xw-full xh-full mr-3' /></button>
          <span className='hidden lg:block'>{props.title}<span className={`flt-id uppercase ${status_cn}`}>{pro_status}</span></span>
        </div>
        <div className='txt-dark-bluex ml-auto mr-3 my-auto xflex h-full align-middle py-4'>
          <span className='pr-10 relative top-1'><FontAwesomeIcon icon={['fas', 'bell']}/></span>
          <span className='inline-flex'>
            <span className='pr-2 pl-10 cborder border-l-2'>
              {userx.name}
            </span>
            <span className="w-8 h-8 bg-cover rounded-md mr-0">
              <img src={userx.image} alt='' className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white" />
            </span>

          </span>
        </div>

    </div>
  );
}
