import React from "react";
import TableRow from "./TableRow";

const Table = ({ data = [], columns }) => {
  return (
    <div className="m-5">
      <table
        className="table table-striped"
        style={{
          tableLayout: "fixed",
          overflowWrap: "anywhere",
          width: "100%",
        }}
      >
        <colgroup>
          <col span="1" style={{ width: "5%" }} />
          <col span="2" style={{ width: "15%" }} />
          <col span="1" style={{ width: "20%" }} />
          <col span="1" style={{ width: "45%" }} />
        </colgroup>
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
