/*Число-палиндром с обеих сторон (справа налево и слева направо) читается одинаково. Самое большое число-палиндром, полученное умножением двух двузначных чисел – 9009 = 91 × 99. Найдите самый большой палиндром, полученный умножением двух трехзначных чисел. */
const { performance } = require('perf_hooks');
let time = performance.now();
function largestPalindrome() {
    let numPalindrom = [];
    for (let i = 100 * 100; i <= 999 * 999; i++) {
        let examination = true;
        let fullNum = i.toString(10);
        for (let num = 0; num < fullNum.length; num++) {
            if (fullNum[num] != fullNum[fullNum.length - num - 1]) {
                examination = false;
                break;
            }
        }
        if (examination) {
            numPalindrom.push(fullNum);
        }
    }
    return numPalindrom[numPalindrom.length - 1];
}
console.log('Результат', largestPalindrome(99999));
time = performance.now() - time;
console.log('Время выполнения:', time);
