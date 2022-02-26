import React from 'react'

export default function OngoingBidsTr(props) {
    var naira_sign = '\u20a6';    
    var temp_table = [
        {namex: 'Bids', client: 'Acme International', progress: '45%', amount: 34000},
        {namex: 'Bids', client: 'Acme International', progress: '45%', amount: 34000},
        {namex: 'Bids', client: 'Acme International', progress: '45%', amount: 34000},
        {namex: 'Bids', client: 'Acme International', progress: '45%', amount: 34000},
        {namex: 'Bids', client: 'Acme International', progress: '45%', amount: 34000},
      ]    
  return (
    <div className={props.showr}>
        <table className="w-full table-auto">
            {/* <tr className='bg-white h-14'>
                <td className='text-blue-600 border-b-blue-600'>Ongoing Projects</td>
                <td className='text-gray-700'>Pending Bids</td>
            </tr> */}
            <tr className='bg-colr h-14 text-gray-400'>
                <td className=' pl-5'>Title</td>
                <td>Client</td>
                <td>Progress</td>
                <td>Contract Sum</td>
            </tr>
            {temp_table.map(e=>{

                return(
                <tr className='hover:bg-gray-300 h-12'>
                    <td className='font-bold pl-5'> {e.namex}</td>
                    <td>{e.client}</td>
                    <td className="">{e.progress}</td>
                    <td>{naira_sign}{e.amount}</td>
                </tr>)
                })
            }
        </table>
    </div>
  )
}
