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
    title = title[0].toUpperCase() + title.slice(1).toLowerCase()
    return title
}

const getAllServicePrices = function () {
    allServicePrices = servicePrice1 + servicePrice2
    return allServicePrices
}

function getFullPrice() {
    fullPrice = screenPrice + allServicePrices
    return fullPrice
}

const getServicePercentPrices = function () {
    servicePercentPrice = Math.ceil(fullPrice - fullPrice * (2 / 100))
    return servicePercentPrice
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

getTitle()
getAllServicePrices()
getFullPrice()

showTypeOf(title)
showTypeOf(fullPrice)
showTypeOf(adaptive)

console.log(getRollbackMessage(fullPrice));

console.log(screens);
console.log("Итоговая стоимость за вычетом отката посреднику:", getServicePercentPrices());