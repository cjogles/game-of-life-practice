import React, { useRef } from "react";
import "./grid.css";

export default function Grid() {
  function makeGrid() {
    let cols = 10;
    let rows = 10;
    let myGrid = new Array(cols);
    for (let i = 0; i < myGrid.length; i++) {
      myGrid[i] = new Array(rows);
    }
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        myGrid[i][j] = Math.floor(Math.random() * 2);
      }
    }
    return myGrid;
  }

  let grid = makeGrid();
  let myDiv = useRef();

  return (
    <section className="container">
      <p component="p">Generations: ###</p>
      <div className="grid-container">
        {grid.map((i) =>
          grid.map((j, i) => <div className="grid-cell" key={i}></div>)
        )}
      </div>
      <div
        id="animate"
        style={{ width: "10rem", height: "5rem", background: "red" }}
        ref={myDiv}
      >
        div i want to animate
      </div>
    </section>
  );
}
