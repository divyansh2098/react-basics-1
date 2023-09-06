import { useState } from "react";
import { listItems } from "../common/constants";
import { List } from "./List";

export const BasicComponent = () => {
  const [items, setItems] = useState<{name: string, id: string}[]>(listItems)
  const showRealGOAT = () => {
    setItems((prevItems) => {
      if (prevItems.length === 3) {
        return prevItems
      }
      console.log(prevItems)
      return [{name: "Sachin", id: "sr10"}, ...prevItems]
    })
  }
  return (
    <>
      <div>
        <h1>List of Cricket GOATs</h1>
        <List items={items} />
        <button style={{ cursor: "pointer", marginTop: "10px" }} onClick={showRealGOAT}>
          Click to show the real GOAT
        </button>
      </div>
    </>
  )  
};
