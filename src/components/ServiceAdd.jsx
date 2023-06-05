import { useSelector, useDispatch } from "react-redux";
import {
  removeService,
  changeServiceField,
  addService
} from "../actions/actionCreators";
import store from "../store/index";

export default function ServiceAdd() {
  const item = useSelector((state) => state.serviceAdd);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    dispatch(changeServiceField(name, value));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (evt.nativeEvent.submitter.name === "buttonSave") {
      const arrField = store.getState().serviceList;
      let findField = arrField.find(
        (item) => item.name === store.getState().serviceAdd.name
      );

      if (findField) {
        dispatch(removeService(findField.id));
      }

      if (isNaN(item.name) && !isNaN(item.price)) {
        dispatch(addService(item.name, item.price));
      }
      dispatch(changeServiceField((item.name = ""), (item.price = "")));
    } else {
      dispatch(changeServiceField((item.name = ""), (item.price = "")));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        onChange={handleChange}
        value={item.name}
        placeholder="service"
      />
      <input
        name="price"
        onChange={handleChange}
        value={item.price}
        placeholder="price"
      />
      <button type="submit" name="buttonSave">
        Save
      </button>
      <button type="submit" name="buttonCancel">
        Cancel
      </button>
    </form>
  );
}
