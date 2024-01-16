import React from "react";

function List({ item }) {
  const productCounts = item.Products.reduce((counts, product) => {
    counts[product.product_value] = (counts[product.product_value] || 0) + 1;
    return counts;
  }, {});
  console.log(productCounts);
  return (
    <div>
      {" "}
      <span className="title">{item.category_name}</span>
      {Object.entries(productCounts).map(([key, value]) => {
        return (
          <ul key={key}>
            <li>
              {key} {value > 1 && value}
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default List;
