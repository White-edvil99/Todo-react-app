import styles from "./Doto.module.css";
import { useContext, useRef } from "react";
import { IoBagAdd } from "react-icons/io5";
import { itemStorecontext } from "../Store/Todo-item-store";

function Doto() {

  const {addNewitem} = useContext(itemStorecontext)

  const todonameElem = useRef();
  const duedateElem = useRef();


  const handleAddbtn = (event) => {
    event.preventDefault();
    const todoname = todonameElem.current.value; 
    const duedate = duedateElem.current.value;
    todonameElem.current.value = ""
    duedateElem.current.value = ""
    addNewitem(todoname, duedate);
  
  };

  return (
    <>
      <div className="container text-center">
        <form action="" onSubmit={handleAddbtn}>
          <div className="row">
            <div className="col-6">
              <input
               
                ref={todonameElem}
                
                type="text"
                placeholder="Enter Todo"
              />
            </div>
            <div className="col-4">
              <input ref={duedateElem} type="date" />
            </div>
            <div className="col-2">
              <button
                // onClick={handleAddbtn}
                
                className="btn btn-primary"
              >
                <IoBagAdd />
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Doto;
