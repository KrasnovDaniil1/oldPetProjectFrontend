import {
    closePopup,
    changeTextInputSize,
    changeTextInputSpeed,
} from './popup.js';

import { variable } from './variable.js';
import { changePositionSnake } from './motionSnake.js';

const popupBtn = document.getElementById('popupBtn');
const inputSize = document.getElementById('inputSize');
const inputSpeed = document.getElementById('inputSpeed');

const btnUp = document.getElementById('btnUp');
const btnDown = document.getElementById('btnDown');
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');
// const scorePlay = document.getElementById('scorePlay');

inputSpeed.addEventListener('change', changeTextInputSpeed);
inputSize.addEventListener('change', changeTextInputSize);
popupBtn.addEventListener('click', closePopup);

btnUp.addEventListener('click', () => {
    console.log(variable);

    if (!variable.intervalDown) {
        clearTimeout(variable.intervalUp);
        clearTimeout(variable.intervalDown);
        clearTimeout(variable.intervalLeft);
        clearTimeout(variable.intervalRight);
        variable.intervalUp = 0;
        variable.intervalDown = 0;
        variable.intervalLeft = 0;
        variable.intervalRight = 0;
        variable.intervalUp = setInterval(() => {
            changePositionSnake(0, -100 / variable.size);
        }, variable.speed);
    }
});
btnDown.addEventListener('click', () => {
    console.log(variable);
    if (!variable.intervalUp) {
        clearTimeout(variable.intervalUp);
        clearTimeout(variable.intervalDown);
        clearTimeout(variable.intervalLeft);
        clearTimeout(variable.intervalRight);
        variable.intervalUp = 0;
        variable.intervalDown = 0;
        variable.intervalLeft = 0;
        variable.intervalRight = 0;
        variable.intervalDown = setInterval(() => {
            changePositionSnake(0, 100 / variable.size);
        }, variable.speed);
    }
});
btnLeft.addEventListener('click', () => {
    console.log(variable);

    if (!variable.intervalRight) {
        clearTimeout(variable.intervalUp);
        clearTimeout(variable.intervalDown);
        clearTimeout(variable.intervalLeft);
        clearTimeout(variable.intervalRight);
        variable.intervalUp = 0;
        variable.intervalDown = 0;
        variable.intervalLeft = 0;
        variable.intervalRight = 0;
        variable.intervalLeft = setInterval(() => {
            changePositionSnake(-100 / variable.size, 0);
        }, variable.speed);
    }
});
btnRight.addEventListener('click', () => {
    console.log(variable);

    if (!variable.intervalLeft) {
        clearTimeout(variable.intervalUp);
        clearTimeout(variable.intervalDown);
        clearTimeout(variable.intervalLeft);
        clearTimeout(variable.intervalRight);
        variable.intervalUp = 0;
        variable.intervalDown = 0;
        variable.intervalLeft = 0;
        variable.intervalRight = 0;
        variable.intervalRight = setInterval(() => {
            changePositionSnake(100 / variable.size, 0);
        }, variable.speed);
    }
});
