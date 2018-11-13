class Game {
  static init() {
    this.main = document.getElementById('main')
    this.state = {
      started: false,
      username: '',
      score: 0
    }
  }

  static render () {
    this.main.innerHTML = `
      <h1>I'm the Game!</h1>
    `
  }


}

Game.init()
