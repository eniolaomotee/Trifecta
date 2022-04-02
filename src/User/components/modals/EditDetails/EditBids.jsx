import React from 'react';
import companieslist from '../../../../tempDb/companieslist.json';
import Multiselect from 'multiselect-react-dropdown';

export default function EditBids(props) {

    // var naira_sign = '\u20a6'; z
    // var progress_style = {
    //     width: "90%"
    //   }
  return( 
    <div className={props.show}>
        <div className="xback-board txt-dark-bluex">
            <div className="modal-inner-edit-x">
                <div className='modal-edit-head'>
                    <div className="w-full cursor-pointer" onClick={props.handleShow}>
                        <svg className="xsvg-close float-right" fill="#fff" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="20px" height="20px">    <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"/></svg>
                    </div>
                    <div>
                        <h1 className=' p-2 pl-0 edit-modal-headr-x'>Renovation and Construction works at GSSS Zadawa, Yobe State </h1>
                        <div></div>
                    </div>
                </div>
                
                <form className="grid grid-cols-6 grid-row-7 gap-5 px-10 py-6">
                    <div className="col-span-7 text-left">
                        <label className='xtext-blue-900' htmlFor="stock">Stock(Quantity)</label>
                        <Multiselect
                            isObject={false}
                            onKeyPressFn={function noRefCheck(){}}
                            onRemove={function noRefCheck(){}}
                            onSearch={function noRefCheck(){}}
                            onSelect={function noRefCheck(){}}
                            options={companieslist}
                            className='rounded'
                        />
                    </div>
                    <div className="col-span-5 text-left">
                        <label className='xtext-blue-900' htmlFor="winning-company">Winning Company</label>
                        <input type="text"className="shadow appearance-none border rounded w-full py-2 px-3 xtext-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="winning-company" placeholder="Dodson Autospares" name='winning-company'/>
                    </div>
                    <div className="col-span-2 text-left">
                        <label className='xtext-blue-900' htmlFor="winning-company">Bid Status</label>
                        
                        <select type="text" className="shadow xappearance-none border rounded w-full py-2 px-3 bg-gray-200 mt-2 focus:outline-none focus:shadow-outline" id="username" name="username">
                            <option className='xpass' value="active">Active</option>
                            <option className='xwarn' value="pending">Pending</option>
                            <option className='xfail' value="completed">Completed</option>
                        </select>
                    </div>
                    <div className="col-span-7 text-left">
                        <label className='xtext-blue-900' htmlFor="bid-scope">Bid Scope</label>
                        <textarea type="date" className="shadow appearance-none border rounded w-full py-2 px-3 xtext-blue-700 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" id="bid-scope" placeholder="Ultrices mi tempus imperdiet nulla" name='bid-scope'></textarea>
                    </div>
                        <div className="md:col-span-7 col-span-4 row-span-5 text-left">
                            <label className=' w-full'>Attachment Files (PDF, .docx, jpg formats)</label><br></br>
                            <div className='grid grid-cols-3 gap-3'>
                                <div>
                                    <label className='' htmlFor="rfq-file">RFQ:</label><br></br>
                                    <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder="1/1/2021" id='rfq-file' name='rfq-file'/>
                                </div>
                                <div>
                                    <label className='' htmlFor="fin-credentials-file">Financial Credentials:</label>
                                    <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder="1/1/2021" id='fin-credentials-file' name='fin-credentials-file'/>
                                </div>
                                <div>
                                    <label className='' htmlFor="acceptance-letter">Acceptance Letter:</label>
                                    <input type="file" className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-100 mt-2 focus:outline-none focus:shadow-outline" placeholder="1/1/2021" id='acceptance-letter' name='acceptance-letter'/>
                                </div>
                            </div>
                        </div>
                
                    <input type="submit" className="md:col-start-5 col-start-4 md:col-span-2 col-span-4 shadow appearance-none py-2 px-3 button-solidx mt-2 focus:outline-none focus:shadow-outline" id='submit-button' value='Save Changes'/> 
                </form>
            </div>
        </div>
    </div>
  )}