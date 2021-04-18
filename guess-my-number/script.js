`use strict`;

const checkBtn = document.querySelector(`.btn-check`);
const input = document.querySelector(`.input`);
const boxNumber = document.querySelector(`.box-number`);
const textGuess = document.querySelector(`.text-guess`);
const score = document.querySelector(`.score`);
const highScore = document.querySelector(`.highScore`);
const btnStart = document.querySelector(`.btn-start`);
const lastSection = document.querySelector(`.lastSection`)

let scoreValue = 20;
const randomNumber = Math.trunc(Math.random() * 20 + 1);

const checkNumber = function () {
  const valueInput = Number(input.value);

  if (!valueInput || valueInput > 20) {
    textGuess.textContent = `🚫 Não é um numero valido`;
  } else if (valueInput === randomNumber) {
    textGuess.textContent = `🎉 Você venceu o game!`;
    boxNumber.textContent = valueInput;
    highScore.textContent = scoreValue;
    lastSection.setAttribute(`style`, `background-color: #94eb9b;`)
  } else if (valueInput !== randomNumber) {
    if (scoreValue > 1) {
      textGuess.textContent = valueInput > randomNumber ? `Ultrapassou o número` : `Está menor que o número`
      scoreValue--;
      score.textContent = scoreValue;
    } else {
      textGuess.textContent = `😭 Voce perdeu`;
      score.textContent = 0;
      checkBtn.setAttribute(`style`, `cursor: not-allowed;`);
    }
  }
};

checkBtn.addEventListener(`click`, checkNumber);

input.addEventListener(`click`, () => {
  input.value = ``;
});

btnStart.addEventListener(`click`, () => {
  location.reload();
});
