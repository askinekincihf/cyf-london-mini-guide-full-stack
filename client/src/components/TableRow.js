import React from "react";

const TableRow = ({ info, index }) => {
  const websiteString = info.website;
  console.log(info.website, websiteString);

  return (
    <tr>
      <th scope="row">{index}</th>
      <td>{info.name}</td>
      <td>{info.phone}</td>
      <td>{info.address}</td>
      <td>{websiteString}</td>
    </tr>
  );
};

export default TableRow;
