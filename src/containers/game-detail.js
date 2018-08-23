import React, { Component } from "react";
import { connect } from "react-redux";

class GameDetail extends Component {
  render() {
    if (!this.props.game) {
      return <div>Select a game for more information.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div><h5>Title:</h5> <p>{this.props.game.title}</p></div>
        <div><h5>Genre:</h5> <p>{this.props.game.genre}</p></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    game: state.activeGame
  };
}

export default connect(mapStateToProps)(GameDetail);
