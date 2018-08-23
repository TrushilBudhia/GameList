import React, { Component } from "react";
import { connect } from "react-redux";
import { selectGame} from "../actions/index";
import { bindActionCreators } from "redux";

class GameList extends Component {
  renderList() {
    return this.props.games.map(game => {
      return (
        <li
          key={game.title}
          onClick={() => this.props.selectGame(game)}
          className="list-group-item"
        >
          {game.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of GameList
  return {
    games: state.games
  };
}

// Anything returned from this function will end up as props
// on the GameList container
function mapDispatchToProps(dispatch) {
  // Whenever selectGame is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({ selectGame: selectGame }, dispatch);
}

// Promote GameList from a component to a container - it needs to know
// about this new dispatch method, selectGame. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(GameList);
