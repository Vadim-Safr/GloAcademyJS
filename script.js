'use strict';

let title = prompt("Как называется наш проект?");
let screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");
let screenPrice = +prompt("Сколько будет стоить данная работа?", 12000);
let adaptive = confirm("Нужен ли адаптив на сайте?");
let service1 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice1 = +prompt("Сколько это будет стоить?");
let service2 = prompt("Какой дополнительный тип услуги нужен?");
let servicePrice2 = +prompt("Сколько это будет стоить?");
let fullPrice = screenPrice + servicePrice1 + servicePrice2;
let rollback = fullPrice * (2 / 100); // откат посреднику в 2%
let servicePercentPrice = Math.ceil(fullPrice - rollback);

console.log("Итоговая стоимость за вычетом отката посреднику:", servicePercentPrice);

switch (true) {
    case fullPrice >= 30000:
        console.log("Даем скидку в 10%");
        break
    case fullPrice >= 15000 && fullPrice < 30000:
        console.log("Даем скидку в 5%");
        break
    case fullPrice < 15000 && fullPrice > 0:
        console.log("Скидка не предусмотрена");
        break
    default:
        console.log("Что то пошло не так");
}