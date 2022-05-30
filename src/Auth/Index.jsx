import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../assets/images/logo.png';
// import LogoDark from '../../images/logo-dark.png';
import CurrentAuth from './CurrentAuth';

// redux
import {useSelector, useDispatch} from 'react-redux'
import {setAuthSignUp} from '../redux/actions/setCurrentAuthPage'


export default function AuthPage() {

  //   redux variables
  const currentAuthPage = useSelector(state => state.currentAuthPage);
  const dispatch = useDispatch();

  return( 
  <div className='grid grid-cols-3 dashboardx txt-dark-bluex  bg-whitex'>
    <div className='col-span-1 md:flex hidden bg-dark-bluex justify-center items-center h-screen'>
      <img src={Logo} alt='Logo'/>
      {/* <div className='m-auto mt-auto h-12 w-40 text-center py-2 bg-blue-900 text-white'>Logo</div> */}
    </div>

        <CurrentAuth/>
      
  </div>
  );
}
