/*Каждый следующий элемент ряда Фибоначчи получается при сложении двух предыдущих. Начиная с 1 и 2, первые 10 элементов будут: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... Найдите сумму всех четных элементов ряда Фибоначчи, которые не превышают четыре миллиона. */

const { performance } = require('perf_hooks');
let time = performance.now();
let num = [1, 2];
let sumEvenNum = 0;
function evenFibonacciNumbers() {
    if (num[num.length - 1] % 2 == 0) {
        sumEvenNum += num[num.length - 1];
    }
    num.push(num[num.length - 2] + num[num.length - 1]);
    if (sumEvenNum + num[num.length - 1] < 4000000) {
        evenFibonacciNumbers();
    }
}
evenFibonacciNumbers();
time = performance.now() - time;
console.log('Сумма всех чисел:', sumEvenNum);
console.log('Время выполнения:', time);
