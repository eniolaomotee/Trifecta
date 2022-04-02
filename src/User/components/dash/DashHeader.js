import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import dummy_user from'../../../assets/images/dummy.jpg'
// import plus_image from '../../../images/plus-icon.png'


export var userx ={ 
  name:"James Ajebola", 
image: dummy_user,
amountx: 20000,
total_amountx: 20000
}
export default function DashHeader(props) {
  return (
    
    <div className="headr bg-white flex pr-4">
        <div className='my-auto text-lg pl-3 font-bold txt-headr'>
          {props.title}
        </div>
        <div className=' text-blue-900 ml-auto mr-3 my-auto xflex h-full align-middle py-4'>
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
