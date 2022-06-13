/* 2520 - самое маленькое число, которое делится без остатка на все числа от 1 до 10.Какое самое маленькое число делится нацело на все числа от 1 до 20?*/

function smallestMultiple() {
    for (let num = 1; num < num + 1; num++) {
        let examination = true;
        for (let del = 1; del <= 20; del++) {
            if (num % del != 0) {
                examination = false;
                break;
            }
        }
        if (examination) {
            return num;
        }
    }
}
console.log(smallestMultiple());
