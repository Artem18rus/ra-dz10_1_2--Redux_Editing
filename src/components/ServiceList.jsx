import { useSelector, useDispatch } from "react-redux";
import { removeService, changeServiceField } from "../actions/actionCreators";
import { nanoid } from "nanoid";
import store from "../store/index";

export default function ServiceList(id) {
  let iconEdit = require("../img/png-karandash.png");
  const items = useSelector((state) => state.serviceList);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeService(id));
  };

  const handleEdit = (e, o) => {
    dispatch(
      changeServiceField(
        (store.getState().serviceAdd.name = o.name),
        (store.getState().serviceAdd.price = o.price)
      )
    );
  };

  return (
    <ul>
      {items.map((o) => (
        <li key={o.id}>
          {o.name} {o.price}
          <button onClick={(e) => handleEdit(e, o)}>
            <img className="iconCreate" alt="" src={iconEdit} />
          </button>
          <button onClick={() => handleRemove(o.id)}>✕</button>
        </li>
      ))}
    </ul>
  );
}
