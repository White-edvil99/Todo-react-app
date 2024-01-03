import { useContext } from "react";
import styles from "./Enjoyholiday.module.css";
import { itemStorecontext } from "../Store/Todo-item-store";

const Enjoyholiday = () => {
  const {todoItems} = useContext(itemStorecontext);
   
  
  
  return ( 
    <>
      {todoItems.length === 0 && (
        <p className={styles.enjoy}>Enjoy Your Day today</p>
      )}
    </>
  );
};

export default Enjoyholiday;
