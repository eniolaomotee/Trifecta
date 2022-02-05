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
export default function DashHeader() {
  return (
    
    <div className="row-span-1 bg-white flex">
        <Link to="/log_in">head</Link>
        <div className=' text-blue-900 ml-auto mr-3 flex h-full align-middle py-4'>
          <span className='pr-4'><FontAwesomeIcon icon={['fas', 'bell']}/></span>
          <div className='pr-2'>
            {userx.name}
          </div>
          <div className="w-8 h-8 bg-cover rounded-md mr-0">
            <img src={userx.image} alt className="h-full w-full overflow-hidden object-cover rounded-full border-2 border-white xdark:border-gray-700" />
          </div>
        </div>

    </div>
  );
}
