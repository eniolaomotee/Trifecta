import React, { useEffect, useState } from 'react';

export default function StaffActivationToggle(props) {

  const [checkedxM, setCheckedStaff] = useState('');
  
  function initial_theme_change(){
      if(props.data.account_status === "activated"){
        setCheckedStaff(true);
      }
      else{
        setCheckedStaff(false);
      }
  }
  function changeStatus(){
    var activation_switch = document.getElementById(`staff-activation-toggle-${props.data.id}`).checked;
    if(activation_switch){
      props.data.account_status = "activated";
      setCheckedStaff(true);
      
    }
    else{
      props.data.account_status = "deactivated";
      setCheckedStaff(false);
    }
  }

  useEffect(()=>{
    initial_theme_change()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <div onClick={changeStatus} className='flex xitems-center'>
      <span className="inline-block my-auto"><input type="checkbox" id={`staff-activation-toggle-${props.data.id}`} className='staff-activation-toggle' onChange={()=>{}} checked={checkedxM}/></span>
      <label className="pl-1 text-sm xmy-auto" htmlFor={`staff-activation-toggle-${props.data.id}`}>{props.data.account_status}</label>
    </div>
  )
}
