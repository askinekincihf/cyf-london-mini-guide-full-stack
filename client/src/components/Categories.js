import React from "react";

const Categories = ({ handleClick, categoryNames }) => {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
      onChange={handleClick}
    >
      {categoryNames.map(name => {
        return (<div key={name}>
          <input
            type="radio"
            className="btn-check"
            id={name}
            name="categories"
            autoComplete="off"
          />
          <label className="btn btn-outline-primary m-2" htmlFor={name}>
            {name}
          </label>
        </div>)
      })}
    </div>
  );
};

export default Categories;
