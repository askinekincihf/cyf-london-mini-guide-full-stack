import React from "react";

const Categories = ({ setState, categories }) => {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
      onChange={(e) => setState(e.target.id)}
    >
      {categories.map((name) => {
        return (
          <div key={name}>
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
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
