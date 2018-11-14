class ScoreBoard {
  static init() {
    this.scores = []
    this.main = document.getElementById('main')
  }

  static render() {
    API.getScores().then(scores => {
      this.scores = scores
      let scoreList = document.createElement('ul')
      scoreList.id = "score-list"
      scoreList.innerHTML = `
        ${this.scores.map(score =>
         '<li class="score-li">' + score.user_id + ': ' + score.points + '</li>'
        ).join("")}
      `
      this.main.innerHTML = ""
      this.main.appendChild(scoreList)
    }).then(() => this.addListeners())
  }

  static addListeners() {
    let list = document.getElementById('score-list')
    list.addEventListener('click', event => {
      if(event.target.classList.contains('score-li')) {
        console.log('li')
      }
    })
  }
}

ScoreBoard.init()