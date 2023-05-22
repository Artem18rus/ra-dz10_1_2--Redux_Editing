import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";


function MainPage() {
  const [field, setField] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();
    // console.log('dsfsdf')
  }

  const handlerChangeService = (event) => {
    setField(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input onChange={handlerChangeService} type="text" placeholder="service"/>
        {/* <input onChange={handlerChangePrice} type="text" placeholder="price"/> */}
        <button className="button" name="button" type="submit">Save</button>
      </form>
      <div>{field}</div>
    </div>
  )
}

export default MainPage;