import React, { useState } from "react";

import useTable from "../../../../hooks/useTable";
// import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const EquipmentsTable = ({ data, rowsPerPage }) => {
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
                                            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 xtracking-wider" >
                                                Equipment
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                                                Description
                                            </th>
                                            <th scope="col" className="px-3 py-3 text-center font-medium text-gray-500 tracking-wider">
                                                Latest Price
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-center font-medium text-gray-500 tracking-wider" >
                                                Stock (Quantity)
                                            </th>
                                            <th scope="col" className="text-center px-6 py-3 font-medium text-gray-500">
                                                Last Purchase Date
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {slice.map((e) => (
                                            <tr key={e.namex}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                <div>{e.namex}</div>
                                                <div className='txt-greyed-out'>Equipment No: {e.equipment_number}</div>
                                                </td>
                                                <td className="px-6 py-4 xwhitespace-nowrap">{e.description}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{e.amount}</td>
                                                <td className="px-3 py-4 whitespace-nowrap text-center">{e.quantity}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm"><div>{e.last_purchase}</div></td>
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

export default EquipmentsTable;