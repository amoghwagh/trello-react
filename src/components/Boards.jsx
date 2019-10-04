import React, { Component } from "react";
import Board from "./Board.jsx";
import CurrentBoard from "./CurrentBoard.jsx";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { baseUrl, key, token } from "../include-files/trello-details";

class Boards extends Component {
  state = {
    boards: []
  };

  async componentDidMount() {
    try {
      const result = await fetch(
        `${baseUrl}/1/members/amoghwagh1/boards?key=${key}&token=${token}`
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
                  <Link
                    key={board.shortLink}
                    to={`/b/${board.shortLink}/${board.name}`}
                  >
                    <Board key={board.shortLink} board={board} />
                  </Link>
                ))}
              </div>
            </div>
          </Route>

          <Route
            exact
            path="/b/:bid/:bname"
            render={({ match }) => (
              <CurrentBoard url={match} boards={this.state.boards} />
            )}
          ></Route>
          <Route render={() => <div>Wrong Route</div>} />
        </Switch>
      </Router>
    );
  }
}

export default Boards;
