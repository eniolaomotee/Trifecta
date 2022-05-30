import React, {useState} from 'react';
import people from '../../../../tempDb/people'


export default function AddExpense(props) {

    const [isProject, setIsProject] = useState(false);
    const handleCategoryChange = () => {
        if(document.getElementById('category').value === "project"){setIsProject(true);}
        else{setIsProject(false)}
    }
    const people_x = [];
    people.map(e=> people_x.push(e.name));
    const expense_category = ['Transportation', 'Flight', 'Project', 'Electricity', 'Welfare', 'Health', 'Stationary', 'Internet'];

  return( 
    <div className={props.show}>
        <div className="xback-board txt-dark-bluex relative">
            <div className="modal-inner">
            <div className='modal-edit-head-v2 relative'>
                    <div className="w-full" onClick={props.handleShow}>
                        <svg className="xsvg-close absolute top-2 right-2" fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
                    </div>
                    <h1 className=' p-2 pl-5 edit-modal-headr-x'>Add New Expense</h1>
                </div>
                <form className="grid grid-cols-3 gap-4 px-6 py-6">
                    <div className="col-span-3 text-left">
                        <label className='text-blue-900' htmlFor="expense_description">Expense Description</label><br></br>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Enter Expense Description" id='expense_description' name='expense_description'/>
                    </div>
                    <div className="col-span-1 text-left">
                        <label className='text-blue-900' htmlFor="amount">Amount</label><br></br>
                        <input type="number" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Enter Vendor's Address" id='amount' name='amount'/>
                    </div>
                    <div className="col-span-1 text-left">
                        <label className='text-blue-900' htmlFor="date">Date</label><br></br>
                        <input type="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id='date' name='date'/>
                    </div>
                    <div className="col-span-1 text-left"> 
                        <label className='' htmlFor="category">Category</label>
                        <select className="shadow border rounded w-full py-2 px-3 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="category" placeholder="Select Category" name='category' onChange={handleCategoryChange}>
                            {expense_category.map((e)=>{return (<option key={e.id} value={e.toLowerCase()}>{e}</option>)})}
                        </select>
                    </div>
                    {isProject ? <div className="col-span-3 text-left"> 
                        <label className='' htmlFor="project_id">Project ID</label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id='project_id' name='project_id' placeholder='Select Project ID'/>
                    </div>:<></>}
                    <div className="col-span-3 text-left"> 
                        <label className='' htmlFor="authorized_by">Authorized By</label>
                        <select className="shadow border rounded w-full py-2 px-3 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="authorized_by" placeholder="James Brown" name='authorized_by'>
                            {people.map((e)=>{return (<option key={e.id} value={e.name}>{e.name}</option>)})}
                        </select>
                    </div>
                    <input type="submit" className="md:col-start-3 col-start-2 md:col-span-1 col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-white bg-blue-800 mt-2 focus:outline-none focus:shadow-outline" id='submit-button' value='Add Expense'/>
                </form>
            </div>
        </div>
    </div>
  )}