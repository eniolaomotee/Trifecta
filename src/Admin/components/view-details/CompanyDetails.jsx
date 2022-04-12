import React, {useState} from 'react';
import DashHeaderDetails from './DashHeaderDetails';
import EditBids from '../modals/EditDetails/EditBids'
import generic_logo from '../../../assets/images/generic-company-logo.png'
import EditIcon from '../../../assets/icons/Details/EditIcon';
import EditCompany from '../modals/EditDetails/EditCompany';
import DocumentCopyIcon from '../../../assets/icons/Details/DocumentCopyIcon';
// import DashHeader from '../dash/DashHeader';

export default function CompanyDetails(props) {


    const [showEdit, setShowEdit] = useState("hidden");
    const handleShowEdit = () => {
        if(showEdit === "hidden"){ setShowEdit("") }
        else{setShowEdit("hidden")}
    }

    return(
        <>
            <EditCompany  show={showEdit} handleShow={handleShowEdit}/>
            <div className={`details-main-body bg-white ${props.show}`}>
                <DashHeaderDetails title={props.name} handleShow={props.handleShow}/>
            
                <div className='bg-white w-full pr-5'>
                    <div className='bg-white shadow flex'>
                        <span className='my-2 flex-auto mx-4'>
                            <div className='txt-greyed-out'>RC Number</div>
                            <div className='font-bold'>TRF/NIG/31/2021</div>
                        </span>
                        <span className='my-2 flex-auto'>
                            <div className='txt-greyed-out'>Address</div>
                            <div className='font-bold'>592 Harvest Path, Abuja</div>
                        </span>
                        <span className='my-2 flex-auto'>
                            <div className='txt-greyed-out'>Email</div>
                            <div className='font-bold'>teremaxe@gmail.com</div>
                        </span>
                        <span className='my-2 flex-auto'>
                            <div className='txt-greyed-out'>Contact</div>
                            <div className='font-bold'>090653254286</div>
                        </span>
                        <div className=''>
                            <button className='border-2 border- px-2 py-1 rounded inline-block mt-2' onClick={handleShowEdit}>
                                <EditIcon classx='fill-current inline'/> Edit Details
                            </button>
                        </div>
                    </div>
                    <div className='m-4 bg-white shadowp-7'>
                        <div className='col-span-5 details-desc grid grid-cols-3 gap-12 '>
                            <div className=" mt-5">
                                <div className='font-bold'>
                                    BANK ACCOUNT NAME
                                </div>
                                <div>
                                    OLIVIA POPE AND ASSOCIATES
                                </div>
                            </div>
                            <div className=" mt-5">
                                <div className='font-bold'>
                                    BANK ACCOUNT NUMBER
                                </div>
                                <div>
                                    31132312021
                                </div>
                            </div>
                            <div className="description mt-5">
                                <div className='font-bold'>
                                    TAX IDENTIFICATION NUMBERS
                                </div>
                                <div>
                                    FIRS/TIN/32312021
                                </div>
                            </div>
                            <div className="description mt-5">
                                <div className='font-bold'>
                                    BANK NAME
                                </div>
                                <div>
                                    ZENITH BANK PLC
                                </div>
                            </div>
                            <div className="description mt-5">
                                <div className='font-bold'>
                                    ACCOUNT SORT CODE
                                </div>
                                <div>
                                    32312021
                                </div>
                            </div>
                            <div className="description mt-5 row-span-2">
                                <div className='font-bold'>
                                    FILES
                                </div>
                                <ul>
                                    <li className='flex'><DocumentCopyIcon classx="fill-current txt-bluex mr-3"/>TCC.docx</li>
                                    <li className='flex'><DocumentCopyIcon classx="fill-current txt-bluex mr-3"/>ITF.jpeng</li>
                                    <li className='flex'><DocumentCopyIcon classx="fill-current txt-bluex mr-3"/>NSITF.pdf</li>
                                    <li className='flex'><DocumentCopyIcon classx="fill-current txt-bluex mr-3"/>BPP.pdf</li>
                                    <li className='flex'><DocumentCopyIcon classx="fill-current txt-bluex mr-3"/>PENCOM.pdf</li>
                                    <li className='flex'><DocumentCopyIcon classx="fill-current txt-bluex mr-3"/>Sworn Affidavit.pdf</li>
                                    <li className='flex'><DocumentCopyIcon classx="fill-current txt-bluex mr-3"/>Bank Reference Letter.pdf</li>
                                    <li className='flex'><DocumentCopyIcon classx="fill-current txt-bluex mr-3"/>Company Profile .pdf</li>
                                    <li className='flex'><DocumentCopyIcon classx="fill-current txt-bluex mr-3"/>Signature.pdf</li>
                                </ul>
                            </div>
                            <div className="description mt-5 col-span-2">
                                <div className='font-bold'>
                                    COMPANY REMARKS
                                </div>
                                <div>
                                    Accumsan nisl, amet non in id justo ultricies pharetra. Nec velit ante praesent ullamcorper accumsan, scelerisque in semper sit. Vel neque duis at gravida diam. Tristique aliquet morbi massa morbi ac adipiscing. Nisi, cras in viverra sit blandit justo nunc, rhoncus ut. Est, consequat mauris fusce eleifend eget. Dui ut molestie nulla id blandit ac mi. Ac, faucibus ridiculus proin laoreet vel quam et. 
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
                
            </div>
        </>);
        }
