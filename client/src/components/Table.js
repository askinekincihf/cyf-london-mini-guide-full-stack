import React from 'react'
import TableRow from './TableRow'

const Table = ({ data, option }) => {

    return (
        <div className="table-responsive">
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
                    {!option &&
                        <tr>
                            <th scope="row"></th>
                            <td colSpan="4">Choose a city and category first</td>
                        </tr>
                    }
                    {option ? data?.map((item, index) => (
                        <TableRow
                            key={index}
                            item={item}
                            index={index}
                        />
                    )) : null
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table
