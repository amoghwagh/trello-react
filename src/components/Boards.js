import React, { Component } from "react";

class Boards extends Component {
  state = {
    boards: []
  };

  async componentDidMount() {
    const key = "4a0d830d67c1acd2c6e927bc368469e9";
    const token =
      "d8295327e9764268b9e8fbb0ffe5b41518a24923f873c859ef2fa0756ebe2935";

    try {
      const result = await fetch(
        `https://api.trello.com/1/members/amoghwagh1/boards?key=${key}&token=${token}`
      );
      const jsonData = await result.json();
      this.setState({
        boards: jsonData
      });
    } catch (err) {
      alert("Error in Fetching Board Data..");
    }
  }

  render() {
    return (
      <div className="boards container">
        <div className="row">
          <div className="col s12 m6">
            <div
              className="card"
              onClick={() => {
                alert("Hello");
              }}
            >
              <div className="board-card card-content white-text hoverable">
                <span className="card-title">Board</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Boards;
