import React from "react";

const TableRow = ({ info, index }) => {
  console.log(info);
  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{info.name}</td>
      <td>ali</td>
      <td>{info.phone}</td>
      <td>{info.address}</td> 
    </tr>
  );
};

export default TableRow;
