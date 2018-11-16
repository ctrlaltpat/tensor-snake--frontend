class SetupScreen {
  static init () {
    this.main = document.getElementById('main')
  }

  static render() {
    main.innerHTML = `
    <div id="userSettings">

      <form id='setup-form'>
        <p>Enter your name:</p>
        <input type="text" id="name">
        <p>Choose an Avatar:</p>

        ${
          avatars.map((avatarUrl, i) => {
            return `
            <div class="box">
            <label>
              <input type="radio" class="radio" name="test" value="${i}" checked>
              <img class="avatar" src="${avatarUrl}">
            </label>
            </div>
            `
          })
          .join('')
        }
        <br><br><br>
        <input type="submit" value="Start Game">
        </form>
    

      <button id="tensor-setup">Setup Camera</button>
      <button id="back">Go Back</button>
    </div>
    `
    
    this.addListeners()
  }

  

  static addListeners() {
    const formEl = document.querySelector('#setup-form')
    const formName = document.querySelector('#name')
    const form = document.querySelector("form");
    const back = document.querySelector("#back")
  
    formEl.addEventListener('submit', event => {
      event.preventDefault()
      let data = new FormData(form);
      let output = "";
      for (const entry of data) {
        output = entry[1] + "\r";
      };
      const newUser = {
        name: formName.value,
        avatar: output
      }
      if (newUser.name !== "") {
        API.createPlayer(newUser)
           .then(playerData => {
             Game.init(playerData.id, 1)
           })
           .then(() => {

             Game.render()
           })
      }
    })


    back.addEventListener('click', event => {
      TitleScreen.render()
    })
  }
}

SetupScreen.init()
