import React, {useState} from "react";
import Item from "./Item";



function ShoppingList({ items }) {
  const [selectedCategory,setSelectedCategory] = useState('All');

function handleFilter(e){

  setSelectedCategory(e.target.value) /* triggers re-render */

}

let filteredItems = items.filter(item => selectedCategory === 'All' ? items : item.category === selectedCategory )
/* filter all items based on selectedCategory, get all items or filter based on provided attributes */



  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleFilter} name="filter">
          <option value="All">All</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
          /* creates each item on the page, returning item componenent for each item in filter items array, changes based on category */
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
