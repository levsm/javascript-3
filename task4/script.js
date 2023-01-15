// 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два
// числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение
// console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
// сложения в данном примере, ваши названия функций могут отличаться).
// Округлять значения, которые возвращают функции не нужно, однако, обратите
// внимание на разность, функция должна вычесть из большего числа меньшее, либо
// вернуть 0, если числа равны.
// Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
// не нужно.

alert('1. Сложение')

const paramA = Number(prompt('Введите число A'));
const paramB = Number(prompt('Введите число B'));
// const summary = (paramA, paramB) => {
//     return Number(paramA) + Number(paramB);
// }
// console.log(summary(paramA, paramB));

const summary = (paramA, paramB) => paramA + paramB

alert(`${paramA + paramB}`)
console.log(summary(paramA, paramB));



// alert('2. Разность')

// function numDiff(a, b) {
//     if (a > b) {
//         return a - b;
//     }
//     return b - a;
//     {
//         return (a === b) === 0;
//     }
// }
// console.log(numDiff(a, b));


// alert('3. Умножение')

// const a = Number(prompt('Введите число A'));
// const b = Number(prompt('Введите число B'));

// const numMulti = (a, b) => {
//     return Number(a) * Number(b);
// }
// alert(`${a * b}`)
// console.log(numMulti(a, b));


// alert('4. Деление')

// const a = Number(prompt('Введите число A'));
// const b = Number(prompt('Введите число B'));

// const numMulti = (a, b) => {
//     return Number(a) / Number(b);
// }
// alert(`${a / b}`)
// console.log(numMulti(a, b));
