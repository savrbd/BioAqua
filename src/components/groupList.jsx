import React from "react";

const GroupList = ({ category, onItemSelect, selectedItem, clearFilter}) => {
  if (category) {
    return (
        <div className="d-flex justify-content-around">
          {Object.keys(category).map((item) => (
            <div
              className={
                "btn btn-outline-success btn-lg" +
                (category[item] === selectedItem ? " active" : "")
              }
              key={category[item]._id}
              onClick={() => onItemSelect(category[item])}
              role="button"
            >
              {category[item].name}
            </div>
          ))}
         <button className="btn btn-outline-success btn-lg" onClick={clearFilter}>Вся косметика</button> 
        </div>
    );
  } else {
    return <h4>loading...</h4>;
  }
};

export default GroupList;
