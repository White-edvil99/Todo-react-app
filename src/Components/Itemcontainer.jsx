import { itemStorecontext } from "../Store/Todo-item-store";
import { useContext } from "react";
import Item from "./item";

const Itemcontainer = ({onDeleteclick }) => {
  const {todoItems} = useContext(itemStorecontext);
  
  return (
    <>
      <div className="Itemholder">
        {todoItems.map((itm) => (
          <Item
            key={itm.name}
            todoname={itm.name}
            toddate={itm.duedate}
          ></Item>
        ))}
      </div>
    </>
  );
};

export default Itemcontainer;
