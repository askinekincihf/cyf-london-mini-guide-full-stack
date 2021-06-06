import React from 'react'

const TableRow = ({item ,index}) => {

    return (
        <tr>
            <th scope="row">{index}</th>
            <td>{item.name}</td>
            <td>{item.phone}</td>
            <td>{item.address}</td>
            <td>{item.website}</td>
        </tr>
    )
}

export default TableRow;
