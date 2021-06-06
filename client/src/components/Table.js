import React from 'react'
import TableRow from './TableRow'

const Table = () => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <TableRow />
            </tbody>
        </table>
    )
}

export default Table
