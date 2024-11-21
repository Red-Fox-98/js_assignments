/*2. FizzBuzz
Напишите функцию, которая выводит числа от 1 до 100. Но для кратных трём
выводите "Fizz" вместо числа, а для кратных пяти — "Buzz". Для чисел, кратных как
трём, так и пяти, выводите "FizzBuzz".*/


function fizzBuzz() {
    return [...Array(100).keys()].map((n) =>
        n = ((n + 1) % 3 === 0 && (n + 1) % 5 === 0) ? "FizzBuzz" : (n + 1) % 3 === 0 ? "Fizz" : (n + 1) % 5 === 0 ? "Buzz" : n + 1
    ).join(',');
}
module.exports = fizzBuzz;