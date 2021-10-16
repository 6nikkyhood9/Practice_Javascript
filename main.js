//<!--Задание-->
//<!--Реализовать функцию подсчета факториала числа.-->
//
//<!--Технические требования:-->
//
//<!--Считать с помощью модального окна браузера число, которое введет пользователь.-->
//<!--С помощью функции посчитать факториал числа, которое ввел пользователь, и вывести его на экран.-->
//<!--Использовать синтаксис ES6 для работы с перемеными и функциями.-->
//
//
//<!--Не обязательное задание продвинутой сложности:-->
//
//<!--После ввода данных добавить проверку их корректности. Если пользователь не ввел числа, либо при вводе их указал не-->
//<!--числа, - спросить оба числа заново (при этом значением по умолчанию для каждой из переменных должна быть введенная ранее-->
//<!--информация).-->

let number = +prompt("Enter the number");
while (isNaN(number) || !number) {
    number = +prompt("Enter number again");
}

function factorial(n) {
    let x = 1;
    for (let i = 1; i <= n; i++) {
        x = x * i;
    }
    return x;
}

console.log(factorial(number));