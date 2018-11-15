class API {
  static init() {
    this.baseUrl = 'http://localhost:3000/api/v1'
    this.scoresUrl = this.baseUrl + '/scores'
    this.playersUrl = this.baseUrl + '/users'
    this.reviewsUrl = this.baseUrl + '/reviews'
  }

  static createPlayer(player) {
    fetch(this.playersUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(player)
    })
  }

  static getScores() {
    return fetch(this.scoresUrl).then(res => res.json())
  }

  static addScore(scoreObject) {
    fetch(this.scoresUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(scoreObject)
    })
  }

  static getReviews() {
    return fetch(this.reviewsUrl)
      .then(res => res.json())
  }


  static createReviews(review) {
    fetch(this.reviewsUrl, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(review)
    })

  }


}

API.init()
