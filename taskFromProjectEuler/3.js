/*Простые делители числа 13195 - это 5, 7, 13 и 29.
Каков самый большой делитель числа 600851475143, являющийся простым числом? */

const { performance } = require('perf_hooks');
let time = performance.now();
function largestPrimeFactor(num) {
    let primeNum = [1, 2, 3, 5, 7]; 
    for (let i = 0; i <= num; i++) {
        let examination = true;
        for (let primeElem of primeNum) {
            if (i % primeElem == 0 && primeElem != 1) {
                examination = false;
                break;
            }
        }
        if (examination) {
            primeNum.push(i);
        }
    }
    return primeNum[primeNum.length - 1];
}
console.log('Результат', largestPrimeFactor(99999));
time = performance.now() - time;
console.log('Время выполнения:', time);
