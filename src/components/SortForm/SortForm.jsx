import React from "react";
import  "./SortForm.css";

const SortForm = () => {
  return (
    <div>
      <select className="form-control">
        <option>Sort Employees Name</option>
        <option>Email</option>
        <option>Age</option>
      </select>
    </div>
  );
};

export default SortForm;