import React from 'react'
import TableRow from './TableRow'

const Table = ({ data }) => {

    return (
        <table className="table table-striped mx-5">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Website</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map((item, index) => (
                        <TableRow
                            key={index}
                            item={item}
                            index={index}
                        />
                    ))
                }
            </tbody>
        </table>
    )
}

export default Table
