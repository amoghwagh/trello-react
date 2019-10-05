import React, { Component } from "react";

export default class ModalCard extends Component {
  render() {
    return (
      <div id="modal1" className="modal">
        <div className="modal-content">
          <h4>{this.props.cardDetail.name}</h4>
          <p>A bunch of text</p>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Agree
          </a>
        </div>
      </div>
    );
  }
}
