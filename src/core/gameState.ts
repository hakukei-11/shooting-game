export type GameState = "TITLE" | "PLAYING" | "GAME_OVER";

export class GameSession {
  state: GameState = "TITLE";
  score = 0;
  lives = 3;

  start(): void {
    if (this.state !== "TITLE") return;
    this.score = 0;
    this.lives = 3;
    this.state = "PLAYING";
  }
}
