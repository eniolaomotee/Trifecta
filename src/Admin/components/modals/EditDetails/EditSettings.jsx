import React from 'react';
import CustomFileUpload from '../../dash/CustomFileUpload';
import approvedBanks from '../../../../tempDb/approvedBanks'
// import ProjectMembersAvatar from './ProjectMembersAvatar';
// import CurrencyFormat from 'react-currency-format';

export default function EditSettings(props) {

    // var naira_sign = '\u20a6';
    // var progress_style = {
    //     width: "90%"
    //   }
  return( 
    <div className={props.show}>
        <div className="xback-board txt-dark-bluex">
            <div className="modal-inner">
                <div className="w-full" onClick={props.handleShow}>
                        <svg className="xsvg-close float-right fill-current" xfill="current" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
                </div>
                        <h1 className=' p-2 pl-0 text-2xl font-bold text-left'> Edit Profile</h1>
                <form className="grid grid-cols-4 grid-row-7 gap-4">
                    <div className="col-span-2 text-left">
                        <label className='xtext-blue-900' htmlFor="first_name">First Name</label><br></br>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 xtext-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline " placeholder="Enter First Name" id='first_name' name='first_name'/>
                    </div>
                    <div className="col-span-2 text-left">
                        <label className='' htmlFor="last_name">Last Name</label>
                        <input type="text"className="shadow appearance-none border rounded w-full py-2 px-3 xtext-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="last_name" placeholder="Enter Last Name" name='last_name'/>
                    </div>
                    <div className="col-span-2 md:col-span-1 text-left">
                        <label className='' htmlFor="date_of_birth">Date of Birth</label><br></br>
                        <input type="date" className="shadow appearance-none border rounded w-full py-2 px-3 xtext-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" name='date_of_birth'/>
                    </div>
                    <div className="md:col-span-1 col-span-2 text-left">
                        <label className='xtext-blue-900' htmlFor="gender">Gender</label>
                        <select type="text" className="shadow xappearance-none border rounded w-full py-2 px-3 xtext-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="gender" name="gender">
                            <option className='' value="Male">Male</option>
                            <option className='' value="Female">Female</option>
                        </select>
                    </div>
                    <div className="md:col-span-1 col-span-2 text-left">
                        <label className='xtext-blue-900' htmlFor="id_type">ID Type</label>
                        <select type="text" className="shadow xappearance-none border rounded w-full py-2 px-3 xtext-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="id_type" name="id_type">
                            <option className='' value="Voter's Card">Voter's Card</option>
                            <option className='' value="Driver's License">Driver's License</option>
                            <option className='' value="National Identity Card">National Identity Card</option>
                        </select>
                    </div>
                    <div className="col-span-2 md:col-span-1 text-left">
                        <label className='' htmlFor="id_number">ID Number</label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 xtext-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="id_number" placeholder="23475956" name='id_number'/>
                    </div>
                    <div className="md:col-span-1 col-span-2 text-left">
                        <label className='' htmlFor="email">Email Address</label>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 xtext-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="email" placeholder="teremaxe@gmail.com" name='email'/>
                    </div>
                    <div className="md:col-span-1 col-span-2 text-left">
                        <label className='' htmlFor="contact_number">Contact Number</label><br></br>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 xtext-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder="09056653909" id='contact_number' name='contact_number'/>
                    </div>
                    <div className="md:col-span-2 col-span-4 text-left">
                        <label className='' htmlFor="address">Address</label><br></br>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 xtext-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder="Number 4 Joseph Ali Street, Abuja" id='address' name='address'/>
                    </div>
                    <div className="md:col-span-2 col-span-4 text-left">
                        <label className='' htmlFor="bank_account_name">Bank Account Name</label><br></br>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 xtext-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder="Olivia Pope and Associates" id='bank_account_name' name='bank_account_name'/>
                    </div>
                    <div className="md:col-span-1 col-span-2 text-left">
                        <label className='' htmlFor="account_number"> Account Number</label><br></br>
                        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 xtext-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder="31123562021" id='account_number' name='account_number'/>
                    </div>
                    <div className="md:col-span-1 col-span-2 text-left">
                        <label className='' htmlFor="bank_name"> Bank Name</label><br></br>
                        <select type="text" className="shadow xappearance-none border rounded w-full py-2 px-3 xtext-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="bank_name" name="bank_name">
                                {approvedBanks.map(e=>{return <option key={e.id} className='' value={e.name}>{e.name}</option>})}
                        </select>
                    </div>
                    
                    <div className="col-span-4 text-left">
                        <div>Attachement File (PF, .docx, jpg formats)</div>
                        <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>
                            <div>
                                <label>Profile Picture:</label>
                                <CustomFileUpload input_id="profile_picture"/>
                            </div>
                            <div>
                                <label>MEANS OF IDENTIFICATION:</label>
                                <CustomFileUpload input_id="means_of_id"/>
                            </div>
                        </div>
                    </div>
                    <input type="submit" className="md:col-start-4 col-start-3 md:col-span-1 col-span-2 shadow appearance-none border rounded w-full py-2 px-3 text-white bg-blue-800 mt-2 focus:outline-none focus:shadow-outline" id='submit-button' value='Save Changes'/>
                </form>
            </div>
        </div>
    </div>
  )}