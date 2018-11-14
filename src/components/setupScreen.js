class SetupScreen {
  static init () {
    this.main = document.getElementById('main')
  }

  static render() {
    main.innerHTML = `
    <p>Sign up</p><br>
    <form id='setup-form'>
      Name: <input type="text" id="name">
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

      
      <br><input type="submit">
      </form>
  

    <button id="back">Go Back</button>
    `
    this.addListeners()
  }

  

  static addListeners() {
    const formEl = document.querySelector('#setup-form')
    const formName = document.querySelector('#name')
    const  form = document.querySelector("form");
    const back = document.querySelector("#back")
  
    formEl.addEventListener('submit', event => {
      event.preventDefault()
      var data = new FormData(form);
      var output = "";
      for (const entry of data) {
        output = entry[1] + "\r";
      };
      console.log(output);
      const newUser = {
        name: formName.value,
        avatar: output
      }


      console.log(newUser)
      API.createPlayer(newUser)
      Game.render()
    })


    back.addEventListener('click', event => {
      TitleScreen.render()
    })
  }
}

SetupScreen.init()
