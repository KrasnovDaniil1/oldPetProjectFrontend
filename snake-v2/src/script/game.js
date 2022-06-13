import { variable } from './variable.js';

const scorePlay = document.getElementById('scorePlay');

function gameEnd() {
    for (let i = 0; i < variable.positionSnakeBody.length; i++) {
        for (let j = i + 1; j < variable.positionSnakeBody.length; j++) {
            if (
                variable.positionSnakeBody[i].x ==
                    variable.positionSnakeBody[j].x &&
                variable.positionSnakeBody[i].y ==
                    variable.positionSnakeBody[j].y
            ) {
                return false;
            }
        }
    }
    return true;
}
function countScore() {
    variable.countEat += 1;
    scorePlay.innerHTML = variable.countEat;
}
export { gameEnd, countScore };
