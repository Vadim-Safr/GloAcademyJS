'use strict';

let rollback = 2;
let title, screens, screenPrice, adaptive, service1, service2, allServicePrices, fullPrice, servicePercentPrice;

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num) // parseFloat возвращает NaN если первый символ не число, isFinite проверяет, является ли занчение конечным числом
}

const asking = function () {
    title = prompt("Как называется наш проект?", "Калькулятор верстки");
    screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

    do {
        screenPrice = prompt("Сколько будет стоить данная работа?");
    } while (!isNumber(screenPrice))

    screenPrice = +screenPrice

    adaptive = confirm("Нужен ли адаптив на сайте?");
}

const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().slice(1).toLowerCase()
}

const getAllServicePrices = function () {
    let num;
    let sum = 0;

    for (let i = 0; i < 2; i++) {

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?");
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?");
        }

        do {
            num = prompt("Сколько будет стоить данная работа?");
        } while (!isNumber(num))

        sum += +num
    }

    return sum
}

function getFullPrice() {
    return screenPrice + allServicePrices
}

const getServicePercentPrices = function () {
    return fullPrice - fullPrice * (rollback / 100)
}

const showTypeOf = function (variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function (price) {
    switch (true) {
        case price >= 30000:
            return "Даем скидку в 10%"
        case price >= 15000 && price < 30000:
            return "Даем скидку в 5%"
        case price < 15000 && price > 0:
            return "Скидка не предусмотрена"
        default:
            return "Что то пошло не так"
    }
}

asking()
title = getTitle()
allServicePrices = getAllServicePrices()
fullPrice = getFullPrice()
servicePercentPrice = getServicePercentPrices()

showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)

console.log(getRollbackMessage(fullPrice));

console.log(screens);
console.log("Итоговая стоимость за вычетом отката посреднику: " + servicePercentPrice);