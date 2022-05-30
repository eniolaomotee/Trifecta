import React, { useEffect, useState } from 'react';

import SidePanel from '../../components/menu/SidePanel';
import MiniSidePanel from '../../components/menu/MiniSidePanel';
import {regularx, activex, closeNav} from '../../components/menu/SidePanel'
import DashHeader from '../../components/header/DashHeader';

import CompaniesTable from '../../components/tables/CompaniesTable';
import AddCompanies from '../../components/modals/Add/AddCompanies';
import CompanyDetails from '../../components/view-details/CompanyDetails';

import companiesx from '../../../tempDb/companiesx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchSvg from '../../../assets/icons/dash-projects/SearchSvg';
import LoadingScreen from './LoadingScreen';



export default function DashCompanies() {
    var active_selectr = {
        dash: regularx,
        projects: regularx,
        bids: regularx,
        companies: activex,
        tasks: regularx,
        equipments : regularx,
        meetings : regularx,
        vendors : regularx,
        staff : regularx,
        expenses: regularx,

        logout: regularx,
        settings: regularx
    }

    const [show, setShow] = useState("hidden");
    const [showTile, setShowTile] = useState("");
    const [showDetails, setShowDetails] = useState("hidden");
    const [Data, setData] = useState(companiesx);

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

    
    const handleShow = () => {
        if(show === "hidden"){ setShow("") }
        else{setShow("hidden")}
    }
    const handleShowDetails = () => {
      if(showDetails === "hidden"){ setShowDetails(""); setShowTile("hidden") }
      else{setShowDetails("hidden"); setShowTile("")}
  }
  
  function SearchFilter(){
    var typed_name = document.getElementById("title-search").value.toLowerCase();
    setData(companiesx.filter(e=>{
      return(e.company_name.toLowerCase().includes(typed_name))
    }))
  }


  

  function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        /* next line works with strings and numbers, 
        * and you may want to customize it to your needs
        */
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function sortingHat(sortingProperty){ 
   setData(companiesx.sort(dynamicSort(sortingProperty)));
//    useTable()
  
}

// temp
// function closeNav(){
//   let body_width = document.getElementsByTagName("body")[0].clientWidth;
//   if (body_width <= "1024"){
//     document.getElementsByClassName("sidepanel")[0].style.width = '0px';
//     document.getElementsByClassName("sidepanel")[0].style.overflow = "hidden";
//   }
//  }
//  temp-end
     
  return (
    <>
      <>
        <AddCompanies show={show} handleShow={handleShow}/>
        <div className={showDetails}>
          <MiniSidePanel active_selectr={active_selectr}/>
          <CompanyDetails show={showDetails} handleShow={handleShowDetails}/>
        </div>
        <div className={`dashboardx ${showTile}`}>
            <SidePanel active_selectr={active_selectr}/>
            <div className='main-body bg-colr'>
              <DashHeader title='Companies'/>

              {isLoading ? <LoadingScreen/> : 
              <div className="contentx px-2pr-5txt-dark-bluex" onClick={closeNav}>
                <div className='my-auto text-lg pl-3 font-bold txt-headr md:hidden block'>
                  Companies
                </div>
                <div className='search-buttonx xpx-2 my-6 relative grid grid-cols-12 gap-2'>
                  <span className='absolute bottom-5 z-10 top-3 left-4 text-lg txt-darkblue3'>
                    <SearchSvg classx='stroke-current w-5 h-5'/>
                  </span>
                  <input type="text" className="md:col-span-9 col-span-7 shadow appearance-none border rounded xw-9/12 py-2 pl-10 text-blue-700 bg-gray-100 focus:outline-none focus:shadow-outline " placeholder="Enter Comapny Name" id='title-search' name='title-search' onChange={SearchFilter}/>
                  <button onClick={handleShow} className='md:col-span-3 col-span-5 bg-bluex xml-3 py-2 text-white rounded'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2 text-sm'>New Company</span></button>
                </div>
              
                <CompaniesTable data={Data} rowsPerPage={10} handleShow={handleShowDetails} sortingHat={sortingHat}/>

              </div>}
            </div>
          </div>
      </>
    </>
    );
}
