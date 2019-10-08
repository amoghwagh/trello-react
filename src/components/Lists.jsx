import React, { Component } from "react";
import List from "./List.jsx";
import ModalCard from "./ModalCard.jsx";
import { baseUrl, key, token } from "../include-files/trello-details";

export default class Lists extends Component {
  state = {
    modalCardDetails: {},
    modalOverlayClass: "",
    modalDisplayClass: ""
  };

  async componentDidMount() {
    if (this.props.url.path === "/c/:shortLink/:name") {
      try {
        const result = await fetch(
          `${baseUrl}/1/cards/${this.props.url.params.shortLink}?key=${key}&token=${token}`
        );
        const json = await result.json();
        this.setState({
          modalCardDetails: json,
          modalDisplayClass: "modal-show",
          modalOverlayClass: "modal-overlay-on"
        });
      } catch (err) {
        alert("Failed to fetch Card Details");
      }
    }
  }

  getCardDetail = card => {
    this.setState({
      modalCardDetails: card
    });
    this.toggleOverlay();
    this.toggleModalClass();
  };

  toggleOverlay = () => {
    this.state.modalOverlayClass === ""
      ? this.setState({
          modalOverlayClass: "modal-overlay-on"
        })
      : this.setState({
          modalOverlayClass: ""
        });
  };

  toggleModalClass = () => {
    this.state.modalDisplayClass === ""
      ? this.setState({
          modalDisplayClass: "modal-show"
        })
      : this.setState({
          modalDisplayClass: ""
        });
  };

  render() {
    return (
      <section className="lists-section" style={this.props.boardStyle}>
        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <a className="brand-logo board-name">
              {this.props.url.params.bname}
            </a>
          </div>
        </nav>

        <ModalCard
          cardDetail={this.state.modalCardDetails}
          modalDisplayClass={this.state.modalDisplayClass}
          toggleOverlay={this.toggleOverlay}
          toggleModalClass={this.toggleModalClass}
        />
        <div
          className={`modal-overlay  + ${this.state.modalOverlayClass}`}
          onClick={() => {
            this.toggleOverlay();
            this.toggleModalClass();
          }}
        />
        <div className="row lists">
          {this.props.lists.map(list => {
            return (
              <List
                key={list.id}
                list={list}
                getCardDetail={this.getCardDetail}
                onDragOver={e => {
                  e.preventDefault();
                  console.log("Dragged to list!");
                }}
              />
            );
          })}
        </div>
      </section>
    );
  }
}
