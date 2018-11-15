class TitleScreen {

  static init () {
    this.main = document.getElementById('main')
  }

  static render() {
    this.main.innerHTML = `
      <div class="titleScreen">
        <button class="playBtn">Play</button>
        <button class="scoreBoardBtn">View Scoreboard</button>
      </div>
    `
    this.addListeners()
  }

  static addListeners() {
    const container = this.main.querySelector(".titleScreen")
    container.addEventListener('click', (e) => {
      if (e.target.classList.contains('playBtn')) {
        SetupScreen.render()
        Game.init(4, 1)
      } else if (e.target.classList.contains('scoreBoardBtn')) {
        ScoreBoard.render()
      }
    })
  }
}

TitleScreen.init()
