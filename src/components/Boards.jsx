import React, { Component } from "react";
import Board from "./Board.jsx";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";

class Boards extends Component {
  state = {
    boards: []
  };

  async componentDidMount() {
    const key = "4a0d830d67c1acd2c6e927bc368469e9";
    const token =
      "d8295327e9764268b9e8fbb0ffe5b41518a24923f873c859ef2fa0756ebe2935";

    try {
      const result = await fetch(
        `https://api.trello.com/1/members/amoghwagh1/boards?key=${key}&token=${token}`
      );
      const jsonData = await result.json();
      this.setState({
        boards: jsonData
      });
    } catch (err) {
      alert("Error in Fetching Board Data..");
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="boards container">
              <div className="board-row">
                {this.state.boards.map(board => (
                  <Link to={`/b/${board.shortLink}/${board.name}`}>
                    <Board key={board.shortLink} board={board} />
                  </Link>
                ))}
              </div>
            </div>
          </Route>

          <Route exact path="/b/:bid/:bname">
            <div>Board is opened</div>
          </Route>
          <Route render={() => <div>Wrong Route</div>} />
        </Switch>
      </Router>
    );
  }
}

export default Boards;
