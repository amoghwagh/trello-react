import React, { Component } from "react";

class Board extends Component {
  render() {
    const backgroundStyle = {
      backgroundImage: `url(${this.props.board.prefs.backgroundImage})`
    };
    return (
      <div className="board col s4 m2">
        <div className="card">
          <div
            className="board-card card-content white-text hoverable"
            style={backgroundStyle}
          >
            <span className="card-title">{this.props.board.name}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
