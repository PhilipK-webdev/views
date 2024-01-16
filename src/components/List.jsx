import React from "react";

function List({ item }) {
  return (
    <div>
      {" "}
      <span className="title">{item.category_name}</span>
      {item.Products.map((p, index) => {
        return (
          <ul key={index}>
            <li>{p.product_value}</li>
          </ul>
        );
      })}
    </div>
  );
}

export default List;
