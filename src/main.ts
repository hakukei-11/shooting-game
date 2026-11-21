import "./style.css";
import { GameSession } from "./core/gameState";
import { render } from "./render/canvasRenderer";

const canvas = document.querySelector<HTMLCanvasElement>("#game");
const startButton = document.querySelector<HTMLButtonElement>("#start-button");
if (!canvas || !startButton) throw new Error("Required game elements are missing");
const ctx = canvas.getContext("2d");
if (!ctx) throw new Error("Canvas 2D is unavailable");

const game = new GameSession();
const begin = (): void => {
  game.start();
  startButton.hidden = game.state !== "TITLE";
};
startButton.addEventListener("click", begin);
window.addEventListener("keydown", (event: KeyboardEvent) => {
  if (event.key === "Enter" && game.state === "TITLE") {
    event.preventDefault();
    begin();
  }
});
function frame(): void {
  render(ctx!, game);
  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
