import React from 'react';
// import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// redux
import {useDispatch} from 'react-redux';
import {setAuthLogin} from '../redux/actions/setCurrentAuthPage';


export default function SignUp(props) {

  //   redux variables
  const dispatch = useDispatch();

  return (

      <div className={`col-span-3 md:col-span-2 md:px-28 px-10 my-auto ${props.show}`}>
          <h1 className='p-2 pl-0 text-3xl text-left'>Welcome to <span classNAme="text-blue-600">TERP</span></h1>
          <h4 className='pl-0 text-left'>Create an account to gain access into the Trifecta Enterprise Resource software (TERP)</h4>
          <form className='grid grid-cols-2 gap-6 mt-10'>
                <div className="col-span-1 text-left">
                    <label className='text-sm' htmlFor="f-name">First Name</label><br></br>
                    <span className='absolute z-10 py-4 pl-3'><FontAwesomeIcon icon={["far", "user"]} /></span>
                    <input type="text" className="pl-10 appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="James" id='f-name' name='f-name'/>
                </div>
                <div className="col-span-1 text-left">
                    <label className='text-sm' htmlFor="l-name">Last Name</label><br></br>
                    <span className='absolute z-10 py-4 pl-3'><FontAwesomeIcon icon={["far", "user"]} /></span>
                    <input type="text" className="pl-10 appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Adebola" id='l-name' name='l-name'/>
                </div>
                <div className="col-span-1 text-left">
                    <label className='text-sm' htmlFor="phone-no">Phone Number</label><br></br>
                    <span className='absolute z-10 py-4 pl-3'><FontAwesomeIcon icon={["fas", "phone-alt"]} /></span>
                    <input type="number" className="pl-10 appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="0908765432" id='phone-no' name='phone-no'/>
                </div>
                <div className="col-span-1 text-left">
                    <label className='text-sm' htmlFor="login-email">Email Address</label><br></br>
                    <span className='absolute z-10 py-4 pl-3'><FontAwesomeIcon icon={["far", "envelope"]} /></span>
                    <input type="email" className="pl-10 appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="james@trifectaintegrated.com" id='login-email' name='login-email'/>
                    <div className='w-full text-right text-xs text-blue-800'>Please use work email preferably</div>
                </div>
                <div className="col-span-1 text-left">
                    <label className='text-sm' htmlFor="job-role">Job Role</label><br></br>
                    <span className='absolute z-10 py-4 pl-3'><FontAwesomeIcon icon={["fas", "archive"]} /></span>
                    <input type="text" className="pl-10 appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="HR Manager" id='HR Manager' name='job-role'/>
                </div>
                <div className="col-span-1 text-left">
                    <label className='text-sm' htmlFor="address">Address</label><br></br>
                    <span className='absolute z-10 py-4 pl-3'><FontAwesomeIcon icon={["fas", "map-marker-alt"]} /></span>
                    <input type="email" className="pl-10 appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="No, 4 Martin Luther King Road, Abuja" id='address' name='address'/>
                </div>
                <div className="col-span-1 text-left">
                    <label className='text-sm' htmlFor="password">Password</label><br></br>
                    <span className='absolute z-10 py-4 pl-3'><FontAwesomeIcon icon={["fas", "shield-alt"]} /></span>
                    <input type="email" className="pl-10 appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Password" id='password' name='password'/>
                </div>
                <div className="col-span-1 text-left">
                    <label className='text-sm' htmlFor="login-email">Confirm Password</label><br></br>
                    <span className='absolute z-10 py-4 pl-3'><FontAwesomeIcon icon={["fas", "shield-alt"]} /></span>
                    <input type="email" className="pl-10 appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Confirm Password" id='login-email' name='login-email'/>
                </div>
                <button name="login-btn" id="login-btn" className="p-3 bg-blue-500 text-white rounded" href="#" role="submit">Sign Up</button>
                <a name="signin-btn" id="signin-btn" className="border border-blue-900 text-center p-2" href="#"  onClick={()=>{dispatch(setAuthLogin())}}>Log In</a>
          </form>
      </div>
  );
}
