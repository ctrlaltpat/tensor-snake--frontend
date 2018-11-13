class SetupScreen {
  static init () {
    this.main = document.getElementById('main')
  }

  static render() {
    main.innerHTML = `
    <form id='setup-form'>
      Name: <input type="text" name="name">
      Choose an Avatar:
      <select>
          <option value="one">one</option>
          <option value="two">two</option>
          <option value="three">three</option>
          <option value="four">four</option>
        </select>
        <input type="submit">
      </form>
    `
    this.addListeners()
  }

  static addListeners() {
    const formEl = document.querySelector('#setup-form')
    formEl.addEventListener('submit', event => {
      event.preventDefault()
      Game.render()
    })
  }

}

SetupScreen.init()
