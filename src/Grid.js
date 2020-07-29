import React, { useRef } from "react";
import "./grid.css";

export default function Grid() {
  function makeGrid() {
    let rows = 20;
    let cols = 20;
    let myGrid = new Array(rows);
    for (let row = 0; row < rows; row++) {
      myGrid[row] = new Array(cols);
      for (let col = 0; col < cols; col++) {
        myGrid[row][col] = Math.floor(Math.random() * 2);
      }
    }
    return myGrid;
  }
  let grid = makeGrid();

  return (
    <section className="container">
      <p component="p">Generations: ###</p>
      <div className="grid-container">
        {grid.map((rows, row) =>
          grid.map((cols, col) => (
            <button
              className={
                grid[row][col] ? " grid-cell cell-on" : "grid-cell cell-off"
              }
              key={col}
            >
              {grid[row][col]}
            </button>
          ))
        )}
      </div>
    </section>
  );
}
