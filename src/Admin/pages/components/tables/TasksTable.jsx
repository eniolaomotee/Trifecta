import React, { useState } from "react";

import useTable from "../../../../hooks/useTable";
// import styles from "./Table.module.css";
import TableFooter from "./TableFooter";

const TasksTable = ({ data, rowsPerPage }) => {
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
                                                Tasks
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left font-medium text-gray-500 tracking-wider">
                                                Initiated by
                                            </th>
                                            <th scope="col" className="px-3 py-3 text-center font-medium text-gray-500 tracking-wider">
                                                Assigned to
                                            </th>
                                            <th scope="col" className="px-6 py-3 xtext-center whitespace-nowrap font-medium text-gray-500 tracking-wider" >
                                                Due Date
                                            </th>
                                            <th scope="col" className="text-center px-6 py-3 font-medium text-gray-500">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {slice.map((e) => (
                                            <tr key={e.namex}>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                <div>{e.task_name}</div>
                                                <div className='txt-greyed-out text-sm'>{e.project}</div>
                                                </td>
                                                <td className="px-6 py-4 xwhitespace-nowrap">{e.initiator}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center">{e.assigned_to}</td>
                                                <td className="px-3 py-4 whitespace-nowrap text-center">{e.due_date}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm"><div>{e.statux}</div></td>
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

export default TasksTable;
