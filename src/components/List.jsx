import React, { Component } from "react";
import Cards from "./Cards.jsx";
import { baseUrl, key, token } from "../include-files/trello-details";

export default class List extends Component {
  state = {
    cards: []
  };
  async componentDidMount() {
    try {
      const result = await fetch(
        `${baseUrl}/1/lists/${this.props.list.id}/cards?key=${key}&token=${token}`
      );
      const jsonData = await result.json();
      this.setState({
        cards: jsonData
      });
    } catch (err) {
      alert("Error in Fetching Cards Data from the List..");
    }
  }
  render() {
    return (
      <div className="col s4 m4">
        <div className="card list">
          <div className="card-content black-text">
            <span className="card-title list-title">
              {this.props.list.name}
              <div className="cards-section">
                <Cards cards={this.state.cards} />
              </div>
            </span>
          </div>
        </div>
      </div>
    );
  }
}
