import React, { Component } from "react";
// const key = "4a0d830d67c1acd2c6e927bc368469e9";
// const token =
//   "d8295327e9764268b9e8fbb0ffe5b41518a24923f873c859ef2fa0756ebe2935";

class Boards extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12 m6">
          <div
            className="card"
            onClick={() => {
              alert("Hello");
            }}
          >
            <div className="board-card card-content white-text hoverable">
              <span className="card-title">Board</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Boards;
