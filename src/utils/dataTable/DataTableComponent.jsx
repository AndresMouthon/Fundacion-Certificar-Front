import React from 'react'
import DataTable from 'react-data-table-component'
import TableSkeleton from '../skeletons/TableSkeleton'

function DataTableComponent({ data, columns, loading }) {

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: '#3f83f8',
                color: 'white',
                fontSize: '15px',
            },
        }
    };

    return (
        <div className="border border-gray-200 rounded-lg shadow w-full dark:border-gray-700 dark:bg-gray-800">
            <DataTable
                columns={columns}
                data={data}
                noDataComponent={<div className='flex justify-center font-bold my-20 text-gray-500'>No hay datos</div>}
                progressPending={loading}
                progressComponent={<TableSkeleton />}
                customStyles={customStyles}
                pagination
            />
        </div>
    )
}

export default DataTableComponent