/* 과제 하다 만거
const numberInput = document.querySelector("#number-input input");
const numberGuess = document.querySelector("#number-guess");

const numberInputInteger = parseInt(numberInput.value);

const randomNumber = Math.ceil(Math.random() * numberInputInteger);

function onGuessSubmit(event) {
  event.preventDeault();
  document.querySelector("#print").innerHTML = `You chose: ${numberInputInteger},the machine chose: .`
}

numberGuess.addEventListener("submit", onGuessSubmit);
===여기서부터는 html====
<!DOCTYPE html>
<html>
  <head>
    <title>Vanilla Challenge</title>
    <meta charset="UTF-8" />
  </head>

  <body>
    <h1>Random Number Game</h1>
    <h2 style="display: inline;">Generate a number between 0 and</h2>
    <form id="number-input" style="display: inline;">
      <input required type="number" min="0" />
    </form>
    <h1></h1>
    <p style="display: inline;">Guess the number:</p>
    <form id="number-guess" style="display: inline;">
      <input required type="number" min="0" />
      <button>Play!</button>
    </form>
    
    <p id="print"></p>

    <script src="src/index.js"></script>
  </body>
</html>

*/
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
