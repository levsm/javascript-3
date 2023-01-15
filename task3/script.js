// 3.
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию,
// которая определяет максимальное значение среди этих чисел

const num1 = Number(prompt('Введите число A'));
const num2 = Number(prompt('Введите число B'));
const num3 = Number(prompt('Введите число C'));


function maxNum(num1, num2, num3){
    if((num1 >= num2) && (num1 >= num3)) {
        max = num1;
    }
    else if((num2 >= num1) && (num2 >= num3)){
        max = num2;
    }
    else{
        max = num3;
    }
return max;
}
console.log(`Максимальное число: ${maxNum(num1, num2, num3)}`);


// alert('Максимальное число: ' + Math.max(paramA,paramB, paramC));
//console.log('Максимальное число: ' + Math.max(paramA,paramB, paramC));


