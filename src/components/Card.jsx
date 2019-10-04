import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="row trello-card-row">
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
    );
  }
}
