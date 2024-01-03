import { createContext } from "react";
import { useReducer } from "react";
export const itemStorecontext = createContext({
  todoItems: [],
  addNewitem: () => {},
  deleteitem: () => {},
});

const todoItemsReducer = (currentValue, action) => {
    let newtodoItems = currentValue;
    if (action.type === "NEW_ITEM") {
      newtodoItems = [
        ...currentValue,
        {
          name: action.payload.itemname,
          duedate: action.payload.itemduedate,
        },
      ];
    } else if (action.type === "DELETE_ITEM") {
      newtodoItems = currentValue.filter(
        (itm) => itm.name !== action.payload.itemname
      );
    }
    return newtodoItems;
  };

const TodoSeniorContextProvider = ({children}) => {
  const [todoItems, dispatchtodoItems] = useReducer(todoItemsReducer, []);

  const addNewitem = (itemname, itemduedate) => {
    const newitemAction = {
      type: "NEW_ITEM",
      payload: {
        itemname,
        itemduedate,
      },
    };
    dispatchtodoItems(newitemAction);
  };

  const deleteitem = (itemname) => {
    const deleteitemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemname,
      },
    };
    dispatchtodoItems(deleteitemAction);
  };

  return (
    <itemStorecontext.Provider
      value={{
        todoItems,
        addNewitem,
        deleteitem,
      }}
    >
        {children}
    </itemStorecontext.Provider>
  );
};
export default TodoSeniorContextProvider;
