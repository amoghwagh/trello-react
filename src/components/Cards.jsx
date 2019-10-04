import React, { Component } from "react";
import Card from "./Card.jsx";

export default class Cards extends Component {
  render() {
    return this.props.cards.map(card => <Card key={card.id} card={card} />);
  }
}
