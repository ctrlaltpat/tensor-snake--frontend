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

    <label>
      <input type="radio" name="test" value="http://placehold.it/40x60/0bf/fff&text=A" checked>
      <img src="http://placehold.it/40x60/0bf/fff&text=A">
    </label>
    
    <label>
      <input type="radio" name="test" value="http://placehold.it/40x60/0bf/fff&text=A">
      <img src="http://placehold.it/40x60/b0f/fff&text=B">
    </label>


      
      <input type="submit">
      </form>
      <pre id="log">
      </pre>
    `
    this.addListeners()
  }

  static addListeners() {
    const formEl = document.querySelector('#setup-form')
    const formName = document.querySelector('#name')
    const  form = document.querySelector("form");
    const log = document.querySelector("#log");

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
  }

}

SetupScreen.init()
