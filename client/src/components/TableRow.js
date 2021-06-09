import React from "react";

const TableRow = ({ info, index }) => {
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{info.name}</td>
      <td>{info.phone}</td>
      <td>{info.address}</td>
      <td>{info.website}</td>
    </tr>
  );
};

export default TableRow;
