import React from "react";
import "./FilterForm.css";

const FilterForm = ({onFilter}) => {
  return (
    <div>
      <form className="filterForm">
        <div className="form-group">
          <input
            type="text"
            name= "search"
            className="filter"
            placeholder="Filter by Employee Name"
            onChange = {onFilter}
          />
        </div>
      </form>
    </div>
  );
};

export default FilterForm;