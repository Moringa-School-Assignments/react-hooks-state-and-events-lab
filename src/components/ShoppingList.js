import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedItems, setSelectedItems] = useState(items);

  // selectedCategory ? selectedCategory: items
  function handleFilter(e){
    // create new array of filtered items
    const filteredArray = items.filter(item =>  e.target.value === item.category)
    setSelectedCategory(filteredArray) 
  }
  // console.log(selectedCategory);
  const newItems = selectedCategory !== "All" ? selectedCategory : items;
  console.log("new items", newItems);
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
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
