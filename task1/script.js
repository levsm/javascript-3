// 1
// Создайте функцию которая возводит переданное число в куб,
// необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

const cube = (numCubA, numCubB) => {
    return Number(numCubA ** 3) + Number(numCubB ** 3);
  }

console.log(cube(Number(prompt('Введите число A, которое будет возведено в куб')),Number(prompt('Введите число B, которое будет возведено в куб'))))
// 2^3 степени + 3 ^ 3 степени = 35.
