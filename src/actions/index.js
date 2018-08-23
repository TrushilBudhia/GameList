export function selectGame(game) {
  // selectGame is an ActionCreator, it needs to return an action,
  // an object with a type property.
  return {
    type: "GAME_SELECTED",
    payload: game
  };
}
