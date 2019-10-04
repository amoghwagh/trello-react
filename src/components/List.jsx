import React, { Component } from "react";

export default class List extends Component {
  render() {
    return (
      <div className="col s4 m4">
        <div className="card blue-grey darken-1 list">
          <div className="card-content white-text">
            <span className="card-title">Card Title</span>
            <p>
              I am a very simple card. I am good at containing small bits of
              information. I am convenient because I require little markup to
              use effectively.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
