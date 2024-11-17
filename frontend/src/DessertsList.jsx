import React from "react";

function DessertsList(props) {
  // Implement the component here.
  // Filter desserts with calories < 500, sort by calories ascending
  const filteredDesserts = props.data
    .filter(dessert => dessert.calories < 500) // Exclude desserts with more than 500 calories
    .sort((a, b) => a.calories - b.calories); // Sort desserts by calories (low to high)

  return (
    <ul>
      {filteredDesserts.map(dessert => (
        <li key={dessert.name}>
          {dessert.name} - {dessert.calories} cal
        </li>
      ))}
    </ul>
  );
}

export default DessertsList;
