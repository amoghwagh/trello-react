import React, { Component } from "react";
import { baseUrl, key, token } from "../include-files/trello-details";
import { browserHistory } from "react-router";

export default class ModalCard extends Component {
  async fetchBoardIdAndName(cardId) {
    try {
      const result = await fetch(
        `${baseUrl}/1/cards/${cardId}/board?key=${key}&token=${token}`
      );
      const json = await result.json();
      return {
        shortLink: json.shortLink,
        name: json.name
      };
    } catch (err) {
      alert("Error in fetching board details");
    }
  }
  render() {
    return (
      <div id="modal1" className={`modal + ${this.props.modalDisplayClass}`}>
        <div className="modal-content white">
          <h4>{this.props.cardDetail.name}</h4>
          <p>{this.props.cardDetail.desc}</p>
        </div>
        <div>{this.props.boards}</div>
        <div className="modal-footer">
          <a
            className="modal-close waves-effect waves-green btn-flat"
            onClick={async () => {
              this.props.toggleOverlay();
              this.props.toggleModalClass();
              const { shortLink, name } = await this.fetchBoardIdAndName(
                this.props.cardDetail.shortLink
              );

              console.log(browserHistory.push(`/b/${shortLink}/${name}`));
            }}
          >
            CLOSE
          </a>
        </div>
      </div>
    );
  }
}
