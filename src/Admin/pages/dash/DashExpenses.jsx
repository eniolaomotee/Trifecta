import React, {useEffect, useState} from 'react';

import SidePanel from '../../components/menu/SidePanel';
import {regularx, activex, closeNav} from '../../components/menu/SidePanel';
import DashHeader from '../../components/header/DashHeader';
import LoadingScreen from './LoadingScreen';

import AddExpense from '../../components/modals/Add/AddExpense';
import ExpensesTable from '../../components/tables/ExpensesTable';
import EditExpense from '../../components/modals/EditDetails/EditExpense';

import expenses from '../../../tempDb/expenses';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SearchSvg from '../../../assets/icons/dash-projects/SearchSvg';

  export default function DashExpenses() {
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
      expenses: activex,

      logout: regularx,
      settings: regularx
    }

    const [show, setShow] = useState("hidden");
    const [Data, setData] = useState(expenses);

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

    const handleShow = () => {
        if(show === "hidden"){ setShow("") }
        else{setShow("hidden")}
    }
    const [showEdit, setShowEdit] = useState("hidden");
    const handleShowEdit = () => {
        if(showEdit === "hidden"){ setShowEdit("") }
        else{setShowEdit("hidden")}
    }

    function SearchFilter(){
      var typed_name = document.getElementById("title-search").value.toLowerCase();
      setData(expenses.filter(e=>{
        return(e.expense_description.toLowerCase().includes(typed_name))
      }))
    }

  return (
    <>
      <AddExpense show={show} handleShow={handleShow}/>
      <EditExpense show={showEdit} handleShow={handleShowEdit}/>
      <div className='dashboardx'>
        <SidePanel active_selectr={active_selectr}/>
        <div className='main-body bg-colr'>
          <DashHeader title='Expenses'/>

          {isLoading ? <LoadingScreen/> : 
          <div className="contenty px-2 pr-5" onClick={closeNav}>
            <div className='my-auto text-lg pl-3 font-bold txt-headr md:hidden block'>
              Expenses
            </div>
            <div className='search-buttonx xpx-2 my-6 relative grid grid-cols-12 gap-2'>
              <span className='absolute bottom-5 z-10 top-3 left-4 text-lg txt-darkblue3'>
                <SearchSvg classx='stroke-current w-5 h-5'/>
              </span>
              <input type="text" className="md:col-span-10 col-span-8 shadow appearance-none border rounded xw-9/12 py-2 pl-10 text-blue-700 bg-gray-100 focus:outline-none focus:shadow-outline " placeholder="Search for Expense" id='title-search' name='title-search' onChange={SearchFilter}/>
              <button onClick={handleShow} className='md:col-span-2 col-span-4  button-solidx py-2 text-sm'><FontAwesomeIcon icon={['fas', 'plus']}/><span className='ml-2'>New Expense</span></button>
            </div>

            <ExpensesTable data={Data} rowsPerPage={10} handleShow={handleShowEdit}/>
          </div>}
        </div>
      </div>
    </>
    );
}
