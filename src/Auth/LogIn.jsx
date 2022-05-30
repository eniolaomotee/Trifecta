import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// redux
import {useDispatch} from 'react-redux'
import {setAuthSignUp, setAuthForgotPass} from '../redux/actions/setCurrentAuthPage'


export default function LogIn() {

  //   redux variables
  const dispatch = useDispatch();

  return( 
    <div className="col-span-3 md:col-span-2 p-5 md:px-28 px-10 my-auto">
      <h1 className='p-2 pl-0 text-3xl text-left'>Log In</h1>
      <h4 className='pl-0 text- left'>Log in to your TERP account</h4>
      <form className='grid grid-cols-2 gap-5 mt-10'>
        <div className="col-span-2 text-left">
            <label className='text-sm' htmlFor="login-email">Email Address</label><br></br>
            <span className='absolute z-10 py-4 pl-3'><FontAwesomeIcon icon={["far", "envelope"]} /></span>
            <input type="email" className="pl-10 appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="james@trifectaintegrated.com" id='login-email' name='login-email'/>
        </div>
        <div className="col-span-2 text-left mt-10 mb-10">
            <label className='text-sm' htmlFor="login-password">Password</label><br></br>
            <span className='absolute z-10 py-4 pl-3'><FontAwesomeIcon icon={["fas", "shield-alt"]} /></span>
            <input type="password" className="pl-10 appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="password" id='login-password' name='login-password'/>
            <div className='w-full text-right text-blue-800'><a href="#" onClick={()=>{dispatch(setAuthForgotPass())}}>Forgot Password?</a></div>
        </div>
        <Link to='/dash' name="login-btn" id="login-btn" className="p-3 bg-blue-500 text-white text-center  rounded" href="#" role="submit">Log In</Link>
        {/* <Link to='/dash' name="login-btn" id="login-btn" className="p-3 bg-blue-500 text-white rounded" href="#" role="submit">Log In</Link> */}
        <a name="signin-btn" id="signin-btn" className="border border-blue-900 text-center p-2" href="#" onClick={()=>{dispatch(setAuthSignUp())}}>Sign Up</a>
      </form>
    </div>
  );
}
