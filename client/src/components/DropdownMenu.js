import React from "react";

const DropdownMenu = ({ options, setOption }) => {
  return (
    <div className="option mx-5 my-3 d-flex align-items-center">
      <label className="mx-2">Choose a city:</label>
      <select
        className="form-select my-3"
        aria-label="Default select example"
        onChange={(e) => setOption(e.target.value)}
      >
        <option value="">Select a city</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
