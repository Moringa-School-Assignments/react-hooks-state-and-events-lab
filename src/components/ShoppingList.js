import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState(items);
  function handleFilter(e){
    // create new array of filtered items
    let filteredArray = selectedCategory.filter(item =>  e.target.value === item.category)
    console.log(filteredArray)
    setSelectedCategory(filteredArray)
    // setSelectedCategory(selectedCategory => filteredArray ? filteredArray : selectedCategory)
  }
  console.log(selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
