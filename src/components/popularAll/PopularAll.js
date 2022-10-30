import React from "react";
import { Link, useParams } from "react-router-dom";
import "./popularAll.css";

export default function PopularAll() {
  const { mealCat } = useParams();

  return (
    <div className="popularNallBar">
      <button className="popular">{`Popular ${mealCat
        .charAt(0)
        .toUpperCase()}${mealCat.slice(1)}`}</button>

      <button className="viewAll">
        <Link to={`/menu/${mealCat}/viewall`} className="menuLink">
          View All
        </Link>
      </button>
    </div>
  );
}
