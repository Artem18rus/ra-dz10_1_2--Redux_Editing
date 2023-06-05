import store from "../store/index";
import { useState } from "react";

export default function ServiceFilter() {

  const inputClick = (e) => {
    const arrField = store.getState().serviceList;
    for (let i = 0; i < arrField.length; i++) {
      let liFilter = document.querySelectorAll("li");
      liFilter[i].style.opacity = 0.5;
    }
  };

  const handleChangeFilter = (e) => {
    const arrField = store.getState().serviceList;
    let mapField = arrField.map(
      (item) => item.name.toLowerCase() + " " + item.price
    );

    for (let i = 0; i < mapField.length; i++) {
      let liFilter = document.querySelectorAll("li");
      if (mapField[i].indexOf(e.target.value.toLowerCase()) !== -1) {
        liFilter[i].style.visibility = "visible";
      } else {
        liFilter[i].style.visibility = "hidden";
      }
    }
  };

  return (
    <div>
      <input
        onClick={inputClick}
        className="inputFilter"
        name="filterField"
        onChange={handleChangeFilter}
        placeholder="search"
      />
    </div>
  );
}