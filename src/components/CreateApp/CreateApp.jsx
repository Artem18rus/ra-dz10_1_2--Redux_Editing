import { React, useState, useEffect, useParams } from "react";
import { Routes, Route, Link, NavLink, redirect } from "react-router-dom";
import { nanoid } from "nanoid";
import Redirect from "../Redirect/Redirect";


function CreateApp() {
  const [change, setChange] = useState('jhm')
  let closeIcon = require("./img/closeIcon.png");
  let url = 'http://localhost:7070/posts'

//   useEffect(() => {
  // fetch(url, {
  //   method: "post",
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json'
  //   },

  //   body: {"id": 3, "content": `${handlerChange()}`}
  // })
  // .then( (response) => {

  // });
// }, [])

  const handlerChange = (e) => {
    setChange(e.target.value)
  }
const handlerSubmit = (e) => {
  e.preventDefault();
  console.log('handlerSubmit')

    fetch(url, {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },

    body: {"id": 3, "content": `${handlerChange()}`}
  })
  .then( (response) => {
    console.log(response)
  });
}

  return (
  <>
    <div className="page-create-post">
      <div className="create-post">
        <div className="section-list">
          <NavLink to="/posts/new/" className="section">Публикация</NavLink>
          <hr />
          <NavLink to="/posts/new/" className="section">Фото/Видео</NavLink>
          <hr />
          <NavLink to="/posts/new/" className="section">Прямой эфир</NavLink>
          <hr />
          <NavLink to="/posts/new/" className="section">Ещё</NavLink>
        </div>
        <button type="button" className="btn-close"><img className='closeIcon' src={closeIcon} alt="close-icon" /></button>
      </div>
      <hr />
    </div>
      
    <form onSubmit={handlerSubmit} className="form-create-post">
      <textarea name="textarea" rows="2" placeholder="Введите свой пост" className="section-textarea" onChange={handlerChange}></textarea>
      <hr />
      
      <button><Link to="/"><div className="btnPublish"><span>Опубликовать</span></div></Link></button>
      {/* <Link to="/"></Link> */}
      {/* <Redirect /> */}
    </form>
  </>

  );
}

export default CreateApp;