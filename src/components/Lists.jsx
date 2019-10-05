import React, { Component } from "react";
import List from "./List.jsx";
import ModalCard from "./ModalCard.jsx";

export default class Lists extends Component {
  state = {
    modalCardDetails: {},
    modalClass: ""
  };
  getCardDetail = card => {
    this.setState({
      modalCardDetails: card
    });
    this.addOverlay();
  };

  addOverlay = () => {
    this.state.modalClass === ""
      ? this.setState({
          modalClass: "modal-overlay-on"
        })
      : this.setState({
          modalClass: ""
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

        <ModalCard cardDetail={this.state.modalCardDetails} />
        <div
          className={`modal-overlay  + ${this.state.modalClass}`}
          onClick={() => {
            this.addOverlay();
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
        <button data-target="modal1" className="btn modal-trigger">
          Modal
        </button>
      </section>
    );
  }
}
