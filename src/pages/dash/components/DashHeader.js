import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
// import plus_image from '../../../images/plus-icon.png'


export var userx ={ 
  name:"James Ajebola", 
image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
amountx: 20000,
total_amountx: 20000
}
export default function DashHeader(props) {
  return (
    
    <div className="headr bg-white flex pr-4">
        <div className='my-auto text-lg pl-3 font-bold text-indigo-900'>
          {props.title}
        </div>
        <div className=' text-blue-900 ml-auto mr-3 flex h-full align-middle py-4'>
          <span className='pr-10'><FontAwesomeIcon icon={['fas', 'bell']}/></span>
          <div className='pr-2 pl-10 cborder border-l-2'>
            {userx.name}
          </div>
          <div className="w-8 h-8 bg-cover rounded-md mr-0">
            <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
          </div>
        </div>

    </div>
  );
}
