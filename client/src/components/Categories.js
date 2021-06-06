import React from "react";

const Categories = ({ handleClick }) => {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic radio toggle button group"
      onChange={handleClick}
    >
      <input
        type="radio"
        className="btn-check"
        id="pharmacies"
        name="categories"
        autoComplete="off"
      />
      <label className="btn btn-outline-primary m-2" htmlFor="pharmacies">
        Pharmacies
      </label>
      <input
        type="radio"
        className="btn-check"
        id="schools"
        name="categories"
        autoComplete="off"
      />
      <label className="btn btn-outline-primary m-2" htmlFor="schools">
        Schools&Colleges
      </label>
      <input
        type="radio"
        className="btn-check"
        id="hotels"
        name="categories"
        autoComplete="off"
      />
      <label className="btn btn-outline-primary m-2" htmlFor="hotels">
        Hotels
      </label>
      <input
        type="radio"
        className="btn-check"
        name="categories"
        id="doctors"
        autoComplete="off"
      />
      <label className="btn btn-outline-primary m-2" htmlFor="doctors">
        Doctors
      </label>
    </div>
  );
};

export default Categories;
