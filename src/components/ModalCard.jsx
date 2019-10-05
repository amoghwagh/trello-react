import React, { Component } from "react";

export default class ModalCard extends Component {
  render() {
    return (
      <div id="modal1" className={`modal + ${this.props.modalDisplayClass}`}>
        <div className="modal-content white">
          <h4>{this.props.cardDetail.name}</h4>
          <p>{this.props.cardDetail.desc}</p>
        </div>
        <div className="modal-footer">
          <a
            className="modal-close waves-effect waves-green btn-flat"
            onClick={() => {
              this.props.toggleOverlay();
              this.props.toggleModalClass();
            }}
          >
            Close
          </a>
        </div>
      </div>
    );
  }
}
