let title = "Типы данных, операторы, методы и свойства";
let screens = "Простые, Сложные, Интерактивные";
let screenPrice = 2438;
let rollback = 2;
let fullPrice = 48000;
let adaptive = false;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость верстки экранов", screenPrice, "рублей");
console.log("Стоимость разработки сайта", fullPrice, "рублей");
console.log(screens.toLowerCase().split(", "));
console.log(fullPrice * (rollback / 100));