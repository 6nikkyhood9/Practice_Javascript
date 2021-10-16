//    <!--Задание-->
//    <!--Реализовать функцию, которая будет получать массив элементов и выводить их на страницу в виде списка.-->
//
//    <!--Технические требования:-->
//
//
//    <!--Создать функцию, которая будет принимать на вход массив.-->
//
//
//    <!--Каждый из элементов массива вывести на страницу в виде пункта списка-->
//
//
//    <!--Необходимо использовать шаблонные строки и функцию map массива для формирования контента списка перед выведением его на-->
//    <!--страницу.-->
//
//
//    <!--Примеры массивов, которые можно выводить на экран:-->
//    <!--['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv']-->
//    <!--['1', '2', '3', 'sea', 'user', 23]-->
//
//
//    <!--Можно взять любой другой массив.-->
//
//
//    <!--Не обязательное задание продвинутой сложности:-->
//
//    <!--??? Очистить страницу через 10 секунд. Показывать таймер обратного отсчета (только секунды) перед очищением страницы.-->
//    <!--Если внутри массива одним из элементов будет еще один массив или объект, выводить его как вложенный список.-->

const myArray = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];
const myArr = ['1', '2', '3', 'sea', 'user', 23];

function outputList(arr) {
    let list = "<ul>";
    myArray.forEach((item, i, arr) => {
        list += '<li>' + item + "</li>";
    });
    list += "</ul>";
}

outputList(myArray);



const myArray = ["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];

function outputList(arr) {
    let result = document.getElementById("result");
    let list = document.createElement("ul");
    myArray.forEach((item, i, arr) => {
        let li = document.createElement("li");
        li.append(item);
        list.appendChild(li);
    });
    result.appendChild(list);
}

outputList(myArray);
