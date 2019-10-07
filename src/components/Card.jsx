import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class Card extends Component {
  render() {
    return (
      <Link to={`/c/${this.props.card.shortLink}/${this.props.card.name}`}>
        <div
          className="row trello-card-row"
          onClick={() => {
            this.props.getCardDetail(this.props.card);
          }}
          draggable
          onDragStart={e => {
            return console.log(this.props.card.name);
          }}
        >
          <div className="col s6 m12">
            <div className="card trello-card">
              <div className="card-content black-text trello-card-content">
                <span className="card-title trello-card-title">
                  {this.props.card.name}
                </span>
                <i className="material-icons desc-icon">notes</i>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}
