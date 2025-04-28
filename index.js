import "./styles/main.css";
import gnomeImage from "./images/goblin.png";
import Game from "./game/Game.js";

document.addEventListener("DOMContentLoaded", () => {
  const game = new Game(4, 4, gnomeImage);
  game.init();
});
