import React, { Component } from "react";
import SingleBoard from "./SingleBoard.jsx";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Board extends Component {
  render() {
    const backgroundStyle = {
      backgroundImage: `url(${this.props.board.prefs.backgroundImage})`
    };
    return (
      <Router>
        <Route exact path="/">
          <div className="board col s4 m2">
            <div className="card" onClick={() => alert("Hello")}>
              <div
                className="board-card card-content white-text hoverable"
                style={backgroundStyle}
              >
                <span className="card-title">{this.props.board.name}</span>
              </div>
            </div>
          </div>
        </Route>
      </Router>
    );
  }
}

export default Board;
