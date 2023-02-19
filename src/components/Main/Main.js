import React from "react";
import "./Main.scss";
import Card from "../Card/Card";
import { data } from "../../helpers/data";

function Main() {
  return (
    <div className="main">
      {data.map((place) => {
        return <Card location={place} />;
      })}
    </div>
  );
}

export default Main;
