import React, { Component } from "react";
import List from "./List.jsx";
import ModalCard from "./ModalCard.jsx";

export default class Lists extends Component {
  state = {
    modalCardDetails: {},
    modalOverlayClass: "",
    modalDisplayClass: ""
  };
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
              />
            );
          })}
        </div>
      </section>
    );
  }
}
