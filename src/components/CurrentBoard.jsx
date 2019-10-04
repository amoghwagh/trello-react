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
      console.log(this.state.lists);
    } catch (err) {
      alert("Error in Fetching Lists Data from the Board..");
    }
  }
  render() {
    return this.state.lists.map(list => {
      return (
        <div class="row">
          <List />
        </div>
      );
    });
  }
}
