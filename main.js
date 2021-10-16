//<!--Задание-->
//<!--Реализовать функцию, которая будет производить математические операции с введеными пользователем числами.-->
//
//<!--Технические требования:-->
//
//<!--Считать с помощью модального окна браузера два числа.-->
//<!--Считать с помощью модального окна браузера математическую операцию, которую нужно совершить. Сюда может быть введено +,-->
//<!-- -, *, /.-->
//<!--Создать функцию, в которую передать два значения и операцию.-->
//<!--Вывести в консоль результат выполнения функции.-->
//
//
//<!--Не обязательное задание продвинутой сложности:-->
//
//<!--После ввода данных добавить проверку их корректности. Если пользователь не ввел числа, либо при вводе указал не числа, - -->
//<!--спросить оба числа заново (при этом значением по умолчанию для каждой из переменных должна быть введенная ранее-->
//<!--информация)-->

let number = +prompt("Enter the number ");
number = checkNumbers(number);

let operation = prompt("Enter operation");

let anotherNumber = +prompt("Enter another number");
anotherNumber = checkNumbers(anotherNumber);

const result = mathOperation(number, anotherNumber, operation);

if (result) {
    console.log(result);
} else {
    console.log("!!Error of operation!!");
}

function mathOperation(number1, number2, operator) {
    switch (operator) {
        case "+" :
            return number1 + number2;
        case "-" :
            return number1 - number2;
        case "*" :
            return number1 * number2;
        case "/" :
            return number1 / number2;
        default:
            return false;
    }
}

function checkNumbers(number) {
    while (isNaN(number)) {
        number = +prompt("Enter the number ");
    }
    return number;
}

alert(result);
