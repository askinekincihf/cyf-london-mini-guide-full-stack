import React from "react";
import TableRow from "./TableRow";

const Table = ({ data = [], columns }) => {
  console.log(data);
  console.log(columns);
  return (
    <div className="m-5 table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index} info={item} index={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
