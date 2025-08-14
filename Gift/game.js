function startGame() {
  player.y = groundY - player.h;
  requestAnimationFrame(loop);
}
