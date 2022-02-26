import React,{ useState } from 'react';
import PendingProjectsTr from './PendingProjectsTr';
import OngoingBidsTr from './OngoingBidsTr';

export default function HomeTableTab() {
    const [showOngoingProjects, setShowOngoingProjects] = useState("");
    const [showPendingBids, setShowPendingBids] = useState("hidden");
    const [OP, setOP] = useState("cursor-pointer p-5 active");
    const [PB, setPB] = useState("cursor-pointer p-5");


    const switch_to_OngoingProjects = () => {
        if(showOngoingProjects === "hidden"){ 
            setShowOngoingProjects("");
            setShowPendingBids("hidden"); 
            setOP('cursor-pointer p-5 active');
            setPB('cursor-pointer p-5');
        }
    }
    const switch_to_PendingBids = () => {
        if(showPendingBids === "hidden"){ 
            setShowPendingBids(""); 
            setShowOngoingProjects("hidden");
            setOP('cursor-pointer p-5');
            setPB('cursor-pointer p-5 active');
        }
    }


  return (
    <div className='bg-white rounded mt-2'>
        <div className='ongiong-pending-tab h-14 p-4'>
            <span onClick={switch_to_OngoingProjects} className={OP}>Ongiong Projects</span>
            <span onClick={switch_to_PendingBids} className={PB}>Pending Bids</span>
        </div>
        <PendingProjectsTr showr={showOngoingProjects}/>
        <OngoingBidsTr showr={showPendingBids}/>
    </div>
  )
}
