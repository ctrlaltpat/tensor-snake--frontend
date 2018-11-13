class Game {
  constructor() {
    this.nav = document.getElementById('nav')
    this.main = document.getElementById('main')
    this.footer = document.getElementById('footer')
    this.titleScreen()
  }

  titleScreen() {
    this.main.innerHTML = `
      <div class="">
        <button class="playBtn">Play</button>
        <button class="scoreBoardBtn">View Scoreboard</button>
      </div>
    `
  }
}