'use strict';

const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    service1: '',
    service2: '',
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    isNumber: (num) => {
        return !isNaN(parseFloat(num)) && isFinite(num) // parseFloat возвращает NaN если первый символ не число, isFinite проверяет, является ли занчение конечным числом
    },
    asking: () => {
        appData.title = prompt("Как называется наш проект?", "Калькулятор верстки") || "";
        appData.screens = prompt("Какие типы экранов нужно разработать?", "Простые, Сложные, Интерактивные");

        do {
            appData.screenPrice = prompt("Сколько будет стоить данная работа?");
        } while (!appData.isNumber(appData.screenPrice))

        appData.screenPrice = +appData.screenPrice

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    getTitle: () => {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase()
    },
    getAllServicePrices: () => {
        let num;
        let sum = 0;

        for (let i = 0; i < 2; i++) {

            if (i === 0) {
                appData.service1 = prompt("Какой дополнительный тип услуги нужен?");
            } else if (i === 1) {
                appData.service2 = prompt("Какой дополнительный тип услуги нужен?");
            }

            do {
                num = prompt("Сколько будет стоить данная работа?");
            } while (!appData.isNumber(num))

            sum += +num
        }

        return sum
    },
    getFullPrice: () => {
        return appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrices: () => {
        return appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
    },
    getRollbackMessage: (price) => {
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
    },
    logger: () => {
        console.log(appData.fullPrice)
        console.log(appData.getRollbackMessage(appData.fullPrice))
        console.log(appData.servicePercentPrice)

        for (let key in appData) {
            console.log(key)
        }
    },
    start: () => {
        appData.asking()

        appData.title = appData.getTitle()
        appData.allServicePrices = appData.getAllServicePrices()
        appData.fullPrice = appData.getFullPrice()
        appData.servicePercentPrice = appData.getServicePercentPrices()

        appData.logger()
    }
}

appData.start() 
