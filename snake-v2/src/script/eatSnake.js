import { variable } from './variable.js';
import { addSnakeBody } from './motionSnake.js';
import { countScore } from './game.js';

function randomEatSnake() {
    const snakeEat = document.getElementById('snakeEat');
    variable.positionEat = {
        x: (Math.floor(Math.random() * variable.size) * 100) / variable.size,
        y: (Math.floor(Math.random() * variable.size) * 100) / variable.size,
    };
    snakeEat.style.left = `${variable.positionEat.x}vh`;
    snakeEat.style.top = `${variable.positionEat.y}vh`;
    snakeEat.style.width = `${100 / variable.size}vh`;
}

function checkSnakeEat(xBody, yBody) {
    for (let i = 0; i < variable.positionSnakeBody.length; i++) {
        if (
            (variable.positionEat.x == variable.positionSnakeBody[i].x) &
            (variable.positionEat.y == variable.positionSnakeBody[i].y)
        ) {
            addSnakeBody(xBody, yBody);
            randomEatSnake();
            countScore();
        }
    }
}

export { randomEatSnake, checkSnakeEat };
