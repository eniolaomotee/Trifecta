import React, { useState } from "react";

import useTable from "../../../hooks/useTable";
// import styles from "./Table.module.css";
import TableFooter from "./TableFooter";
import company_img from '../../../assets/images/generic-company-logo.png'

const CompaniesTable = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slice, range } = useTable(data, page, rowsPerPage);
    return (
        <>
            <div className='bg-white table-holdr sub-contenty'>
                <div className="flex flex-col">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden xborder-b xborder-gray-200 xsm:rounded-lg">
                                <table className="min-w-full divide-y divide-gray-200 xtable-auto">

                                    <thead className="table-hd-bg text-sm font-medium">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left font-medium text-gray-500 xtracking-wider"
                                            >
                                                Companies
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider"
                                            >
                                                RC Number
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-3 py-3 text-center font-medium text-gray-500 tracking-wider"
                                            >
                                                Address
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-center font-medium text-gray-500 tracking-wider"
                                            >
                                                Email
                                            </th>
                                            <th scope="col" className="text-center px-6 py-3 font-medium text-gray-500">
                                                Contact
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {slice.map((e) => (
                                            <tr key={e.namex}>
                                                <td className="px-6 py-4 whitespace-nowrap flex">
                                                    <img src={company_img} alt="company img" width={40} className="overflow-hidden object-cover rounded-full border-2 mr-3"/>
                                                    <span className="my-auto">{e.company_name}</span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    RC{e.rc}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{e.address}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {e.email}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm"><div>{e.contact}</div></td>
                                            </tr>

                            
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
        </>
    );
};

export default CompaniesTable;
