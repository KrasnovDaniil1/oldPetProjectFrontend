let house = document.getElementById('house');
let score = document.getElementById('score');
let btn = document.getElementById('btn');
let popup = document.getElementById('popup');

let countLightWindow = 0;
let numLight = [];
let userLight = [];
let scoreGame = 0;
let gameGenerate = true;

btn.onclick = function () {
    popup.style.display = 'none';
    startGame();
};

/*генерирует окна */
function generateWindow(col) {
    for (let i = 0; i < col; i++) {
        house.innerHTML += `<div class='window ${i}' ></div>`;
    }
}

function startGame() {
    if (window.innerWidth > 1368) {
        countLightWindow = 24;
    } else {
        countLightWindow = 20;
    }
    generateWindow(countLightWindow);
    house.addEventListener('click', (e) => {
        if (gameGenerate) {
            userLight.push(e.target.classList[1]);
            if (e.target.classList.contains('window-light')) {
                e.target.classList.remove('window-light');
            }
            setTimeout(() => {
                e.target.classList.add('window-light');
            }, 10);
            for (let i = 0; i < userLight.length; i++) {
                if (userLight[i] != numLight[i]) {
                    stopGame();
                    gameGenerate = false;
                }
            }
            if (userLight.length == numLight.length) {
                gameGenerate = false;
                scoreGameUp();
                generatePlay(scoreGame);
                lightWindow();
            }
        }
    });
    generatePlay(scoreGame);
    lightWindow();
}

function scoreGameUp() {
    scoreGame += 1;
    score.innerHTML = `Счёт: ${scoreGame}`;
}

/*останавливает игру */
function stopGame() {
    window.location.reload();
}

/*генерирует окна которые нужно включить и запускает их*/
function generatePlay(score) {
    numLight = [];
    userLight = [];
    for (let i = 0; i < score + 1; i++) {
        numLight.push(Math.floor(Math.random() * countLightWindow));
    }
    numLight = Array.from(new Set(numLight));
}

/* анимация запуска окон */
function lightWindow() {
    let idx = 0;
    clearClass();
    const timer = setInterval(() => {
        house.children[numLight[idx]].classList.add('window-light');
        idx += 1;
        if (idx >= numLight.length) {
            clearInterval(timer);
            gameGenerate = true;
        }
    }, 1000);
}
/*очищает элемент от класса */
function clearClass() {
    for (const elem of house.childNodes) {
        if (elem.classList.contains('window-light')) {
            elem.classList.remove('window-light');
        }
    }
}
