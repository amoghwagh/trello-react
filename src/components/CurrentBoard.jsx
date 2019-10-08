import React, { Component } from "react";
import Lists from "./Lists.jsx";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { baseUrl, key, token } from "../include-files/trello-details";

export default class CurrentBoard extends Component {
  state = {
    boards: [],
    lists: [],
    refresh: 0,
    bgImage: ""
  };

  async componentDidMount() {
    try {
      if (this.props.fromBoard) {
        const result = await fetch(
          `${baseUrl}/1/boards/${this.props.url.params.bid}/lists?key=${key}&token=${token}`
        );
        const jsonData = await result.json();
        this.setState({
          lists: jsonData
        });
      } else {
        const result = await fetch(
          `${baseUrl}/1/cards/${this.props.url.params.shortLink}/board?fields=all&key=${key}&token=${token}`
        );

        const jsonData = await result.json();
        this.setState({
          bgImage: jsonData.prefs.backgroundImage
        });

        const boardID = jsonData.shortLink;

        this.props.url.params.bid = boardID;
        const boardResult = await fetch(
          `${baseUrl}/1/boards/${this.props.url.params.bid}/lists?key=${key}&token=${token}`
        );
        const boardJsonData = await boardResult.json();

        this.setState({
          lists: boardJsonData
        });
        this.setState({
          refresh: 1
        });
      }
    } catch (err) {
      alert("Error in Fetching Lists Data from the Board..");
    }
    if (this.state.refresh !== 1) {
      const bgImage = this.props.boards
        .map(board => {
          return board.shortLink === this.props.url.params.bid
            ? board.prefs.backgroundImage
            : null;
        })
        .filter(item => item !== null);

      this.setState({
        bgImage: bgImage[0]
      });
    }
  }
  render() {
    const boardStyle = {
      backgroundImage: `url(${this.state.bgImage})`
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
                    refresh={this.state.refresh}
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
