import React from "react";
import { Component } from "react";

import GameList from "../containers/game-list";
import GameDetail from "../containers/game-detail";

export default class App extends Component {
  render() {
    return (
      <div>
        <GameList />
        <GameDetail />
      </div>
    );
  }
}
