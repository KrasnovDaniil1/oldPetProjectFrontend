import { variable } from './variable.js';

import { randomEatSnake } from './eatSnake.js';
import { addSnakeBody } from './motionSnake.js';

const popupShimer = document.getElementById('popupShimer');
const popup = document.getElementById('popup');
const inputSize = document.getElementById('inputSize');
const textSize = document.getElementById('textSize');
const inputSpeed = document.getElementById('inputSpeed');
const textSpeed = document.getElementById('textSpeed');
const playground = document.getElementById('playground');
const btnRight = document.getElementById('btnRight');

function closePopup() {
    variable.size = inputSize.value;
    console.log('variable.size', variable.size);
    variable.speed = 1000 / inputSpeed.value;
    popupShimer.style.display = 'none';
    popup.style.display = 'none';
    generatePlayground();
    randomEatSnake();
    addSnakeBody(0, 0);
    btnRight.click();
}

function generatePlayground() {
    for (let i = 0; i < Math.pow(variable.size, 2); i++) {
        playground.innerHTML += `<div class="playground-block" style="width: ${
            100 / variable.size
        }vh"></div>`;
    }
}
function changeTextInputSize() {
    textSize.innerHTML = `Размер игрового поля: ${inputSize.value} кл`;
}
function changeTextInputSpeed() {
    textSpeed.innerHTML = `Скорость змейки: ${inputSpeed.value} кл/c`;
}

export { closePopup, changeTextInputSize, changeTextInputSpeed };
