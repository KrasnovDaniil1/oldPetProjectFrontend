/*Если выписать все натуральные числа меньше 10, кратные 3 или 5, то получим 3, 5, 6 и 9. Сумма этих чисел равна 23. Найдите сумму всех чисел меньше 1000, кратных 3 или 5.*/

const { performance } = require('perf_hooks');
let time = performance.now();
function sumNaturalNumbers(num) {
    try {
        if (typeof num !== 'number') {
            throw new Error('Введены некорректные данные');
        }
        let sumNum = 0;
        for (let i = 0; i < num; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                sumNum += i;
            }
        }
        return sumNum;
    } catch (err) {
        console.log(err);
    }
}
time = performance.now() - time;
console.log('Сумма всех чисел:', sumNaturalNumbers(1000));
console.log('Время выполнения:', time);
