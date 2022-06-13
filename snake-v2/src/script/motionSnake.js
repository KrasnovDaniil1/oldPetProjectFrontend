const playground = document.getElementById('playground');
import { variable } from './variable.js';
import { checkSnakeEat } from './eatSnake.js';
import { gameEnd } from './game.js';

function addSnakeBody(xSnake, ySnake) {
    variable.positionSnakeBody.push({ x: xSnake, y: ySnake });
    playground.innerHTML += `<div class="snake-body" style="
    top:${ySnake}vh;
    left:${xSnake}vh;
    width: ${100 / variable.size}vh"></div>`;
}

function deleteLastSnakeBody() {
    variable.positionSnakeBody.splice(0, 1);
    document.getElementsByClassName('snake-body')[0].remove();
}

function changePositionSnake(xCor, yCor) {
    let xCorLastBody =
        variable.positionSnakeBody[variable.positionSnakeBody.length - 1].x;
    let yCorLastBody =
        variable.positionSnakeBody[variable.positionSnakeBody.length - 1].y;
    let xCorNewBody, yCorNewBody;
    if (xCorLastBody >= 100) {
        xCorNewBody = 0;
    } else if (xCorLastBody < 0) {
        xCorNewBody = 100 - 100 / variable.size;
    } else {
        xCorNewBody = xCorLastBody + xCor;
    }
    if (yCorLastBody >= 100) {
        yCorNewBody = 0;
    } else if (yCorLastBody < 0) {
        yCorNewBody = 100 - 100 / variable.size;
    } else {
        yCorNewBody = yCorLastBody + yCor;
    }

    if (gameEnd()) {
        addSnakeBody(xCorNewBody, yCorNewBody);
        checkSnakeEat(xCorNewBody + xCor, yCorNewBody + yCor);
        deleteLastSnakeBody();
    } else {
        alert(
            'Игра закончено, вы проиграли. Для продолжения перезагрузить страницу.'
        );
    }
}

export { addSnakeBody, changePositionSnake };
