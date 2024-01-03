import { useContext } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { itemStorecontext } from "../Store/Todo-item-store";
function Item({ todoname, toddate }) {

  const {deleteitem} = useContext(itemStorecontext)

  return (
    <>
      <div className="container">
        <div className="row my-2">
          <div className="col-6">{todoname}</div>
          <div className="col-4">{toddate}</div>
          <div className="col-2">
            <button
              onClick={()=> deleteitem(todoname)}
              type="button"
              className="btn btn-danger"
            >
              <MdDeleteSweep />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Item;
