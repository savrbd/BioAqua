import React from "react";
import ProductCard from "./productCard";
import SortCost from "./sortCost";

const TableBody = ({ products, onSort, iconsSort }) => {
  
  
  return (
    <div className="container">
      <div className="flex-grow-1 m-2">
      <SortCost onSort={onSort} iconsSort={iconsSort}/>
        <div className="d-flex  flex-wrap">
          {products.map((item) => (
              <ProductCard
                name={item.name}
                cost={item.cost}
                imageProduct={item.imageProduct}
                countProduct={item.countProduct}
                id={item._id}
                description = {item.description}
                key={item._id}
              />
          ))}
        </div>
      </div>
    </div>
    
  );
};

export default TableBody;
