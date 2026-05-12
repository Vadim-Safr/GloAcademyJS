'use strict';

let title = prompt("Как называется наш проект?").trim();
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");

let allServicePrices, fullPrice, servicePercentPrice;

const getTitle = function () {
    return title[0].toUpperCase() + title.slice(1).toLowerCase()
}

const getAllServicePrices = function () {
    return servicePrice1 + servicePrice2
}

function getFullPrice() {
    return screenPrice + allServicePrices
}

const getServicePercentPrices = function () {
    return Math.ceil(fullPrice - fullPrice * (2 / 100))
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