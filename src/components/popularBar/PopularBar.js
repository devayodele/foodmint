import React from "react";
import { useParams } from "react-router-dom";
import "./popularBar.css";

export default function PopularBar() {
  const { mealCat } = useParams();

  return (
    <div id="popularBarDiv">
      <button id="popularBar">{`${mealCat
        .charAt(0)
        .toUpperCase()}${mealCat.slice(1)}`}</button>
    </div>
  );
}
