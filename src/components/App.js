import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {
  const [isOn, setIsOn] = useState(false);
  function handleMode(){
    return(
      setIsOn((isOn) => !isOn)
    );


  }

  const appClass = isOn ? "App dark" : "App light"
  
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode}>{isOn ? "light" : "dark"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;


