import type { GameSession } from "../core/gameState";

export const WIDTH = 800;
export const HEIGHT = 450;
export const HUD_HEIGHT = 56;

export function render(ctx: CanvasRenderingContext2D, game: GameSession): void {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  ctx.fillStyle = "#071321";
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.fillStyle = "#14283e";
  ctx.fillRect(0, 0, WIDTH, HUD_HEIGHT);
  ctx.strokeStyle = "#49657e";
  ctx.beginPath(); ctx.moveTo(0, HUD_HEIGHT + 0.5); ctx.lineTo(WIDTH, HUD_HEIGHT + 0.5); ctx.stroke();
  ctx.fillStyle = "#f3f6fc";
  ctx.font = "20px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText(`SCORE ${game.score}`, 24, 36);
  ctx.textAlign = "right";
  ctx.fillText(`LIVES ${game.lives}`, WIDTH - 24, 36);
  if (game.state === "TITLE") {
    ctx.textAlign = "center";
    ctx.font = "bold 40px sans-serif";
    ctx.fillText("SHOOTING GAME", WIDTH / 2, 204);
    ctx.font = "20px sans-serif";
    ctx.fillText("Press Enter or tap START", WIDTH / 2, 254);
  }
}
