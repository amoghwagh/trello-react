import React, { Component } from "react";
import Lists from "./Lists.jsx";

import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch,
  Link
} from "react-router-dom";

import { baseUrl, key, token } from "../include-files/trello-details";

export default class CurrentBoard extends Component {
  state = {
    lists: []
  };

  async componentDidMount() {
    try {
      const result = await fetch(
        `${baseUrl}/1/boards/${this.props.url.params.bid}/lists?key=${key}&token=${token}`
      );
      const jsonData = await result.json();
      this.setState({
        lists: jsonData
      });
    } catch (err) {
      alert("Error in Fetching Lists Data from the Board..");
    }
  }
  render() {
    const bgImage = this.props.boards
      .map(board => {
        return board.shortLink === this.props.url.params.bid
          ? board.prefs.backgroundImage
          : null;
      })
      .filter(item => item !== null);

    const boardStyle = {
      backgroundImage: `url(${bgImage[0]})`
    };
    return (
      <Router>
        <Switch>
          <Route
            path="/b/:bid/:bname"
            render={() => {
              return (
                <Lists
                  url={this.props.url}
                  boardStyle={boardStyle}
                  lists={this.state.lists}
                />
              );
            }}
          ></Route>
          <Route
            path="/c/:shortLink/:name"
            render={() => {
              return (
                <React.Fragment>
                  <Lists
                    url={this.props.url}
                    boardStyle={boardStyle}
                    lists={this.state.lists}
                  />
                </React.Fragment>
              );
            }}
          ></Route>
        </Switch>
      </Router>
    );
  }
}
