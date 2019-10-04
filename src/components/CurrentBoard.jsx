import React, { Component } from "react";
import List from "./List";

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
      <section className="lists-section" style={boardStyle}>
        <div className="row lists">
          {this.state.lists.map(list => {
            return <List key={list.id} list={list} />;
          })}
        </div>
      </section>
    );
  }
}
