import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <div className="col s4 m4">
        <div className="card list">
          <div className="card-content black-text">
            <span className="card-title list-title">
              {this.props.list.name}
            </span>
          </div>
        </div>
      </div>
    );
  }
}
