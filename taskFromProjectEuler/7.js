/*Выписав первые шесть простых чисел, получим 2, 3, 5, 7, 11 и 13. Очевидно, что 6-е простое число - 13.

Какое число является 10001-м простым числом? */

const { performance } = require('perf_hooks');
let time = performance.now();
function largestPrimeFactor() {
    let primeNum = [1, 2, 3, 5, 7];
    for (let i = 0; ; i++) {
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
        if (primeNum.length - 1 > 10001) {
            break;
        }
    }
    return primeNum[primeNum.length - 1];
}
console.log('Результат', largestPrimeFactor());
time = performance.now() - time;
console.log('Время выполнения:', time);
