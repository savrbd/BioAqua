import React from "react";
import Loading from "./loading";

const GroupList = ({ category, onItemSelect, selectedItem, clearFilter}) => {
  if (category) {
    return (
        <ul className="list-group m-md-3">
            {Object.keys(category).map((item) => (
              <li
                className={
                  "btn btn-sm btn-outline-success m-md-2" +
                  (category[item] === selectedItem ? " active" : "")
                }
                key={category[item]._id}
                onClick={() => onItemSelect(category[item])}
                role="button"
              >
                {category[item].name}
              </li>
            ))}
          <button className="btn btn-outline-success mt-3" onClick={clearFilter}>Сброс</button> 
          </ul>
    );
  } else {
    return <Loading/>;
  }
};

export default GroupList;
