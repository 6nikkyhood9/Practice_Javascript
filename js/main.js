//<!--Задание-->
//<!--Реализовать функцию для создания объекта "пользователь".-->
//
//<!--Технические требования:-->
//
//<!--Написать функцию createNewUser(), которая будет создавать и возвращать объект newUser.-->
//<!--При вызове функция должна спросить у вызывающего имя и фамилию.-->
//<!--Используя данные, введенные пользователем, создать объект newUser со свойствами firstName и lastName.-->
//<!--Добавить в объект newUser метод getLogin(), который будет возвращать первую букву имени пользователя, соединенную с-->
//<!--фамилией пользователя, все в нижнем регистре (например, Ivan Kravchenko → ikravchenko).-->
//<!--Создать пользователя с помощью функции createNewUser(). Вызвать у пользователя функцию getLogin(). Вывести в консоль-->
//<!--результат выполнения функции.-->
//
//
//<!--Не обязательное задание продвинутой сложности:-->
//
//<!--Сделать так, чтобы свойства firstName и lastName нельзя было изменять напрямую. Создать функции-сеттеры setFirstName() и-->
//<!--setLastName(), которые позволят изменить данные свойства.-->
//
//
//<!--Технические требования:-->
//
//<!--Возьмите выполненное домашнее задание номер 4 (созданная вами функция createNewUser()) и дополните ее следующим функционалом:-->
//
//<!--При вызове функция должна спросить у вызывающего дату рождения (текст в формате dd.mm.yyyy) и сохранить ее в поле birthday.-->
//<!--Создать метод getAge() который будет возвращать сколько пользователю лет.-->
//<!--Создать метод getPassword(), который будет возвращать первую букву имени пользователя в верхнем регистре, соединенную с фамилией (в нижнем регистре) и годом рождения. (например, Ivan Kravchenko 13.03.1992 → Ikravchenko1992).-->
//
//
//<!--Вывести в консоль результат работы функции createNewUser(), а также функций getAge() и getPassword() созданного объекта.-->

function createNewUser() {
    let newUser = {};

    newUser.firstName = getName( "firstname:" );
    newUser.secondName = getName( "secondname:" );
    newUser.login = getLogin( newUser.firstName, newUser.secondName );
    newUser.birthday = getAge();
    newUser.password = getPassword( newUser.firstName, newUser.secondName, newUser.birthday.slice( -4 ) );
    return newUser;
}

function getName(text) {
    return prompt( `Enter ${text}`, "" );
}

function getLogin(firstName, secondName) {
    return firstName[0].toLowerCase() + secondName.toLowerCase();
}

function getAge() {
    return prompt( "Date:", "DD.MM.YYYY" );
}

function getPassword(firstName, secondName, year) {
    return firstName[0].toUpperCase() + secondName.toLowerCase() + year;
}

let user = createNewUser();
console.log( user );