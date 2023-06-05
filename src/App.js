import React from "react";
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";
import ServiceFilter from "./components/ServiceFilter";
import "./css/App.css";

export default function App() {
  return (
    <>
      <ServiceAdd />
      <ServiceList />
      <ServiceFilter />
    </>
  );
}
