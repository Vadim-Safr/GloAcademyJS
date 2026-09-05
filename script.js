'use strict';

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    services: {},
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    isNumber: (num) => {
        if (num === null) {
            return false
        }
        return !isNaN(parseFloat(num)) && isFinite(num) // parseFloat возвращает NaN если первый символ не число, isFinite проверяет, является ли значение конечным числом
    },
    isString: (str) => {
        if (str === null) {
            return false
        }

        const cleanStr = str.replaceAll(' ', '')
        return isNaN(cleanStr) && cleanStr !== ''
    },
    asking: () => {
        do {
            appData.title = prompt("Как называется наш проект?", "Калькулятор верстки") || "";
        } while (!appData.isString(appData.title))

        for (let i = 0; i < 2; i++) {
            let name;
            let price = 0;
            do {
                name = prompt("Какие типы экранов нужно разработать?");
            } while (!appData.isString(name))

            do {
                price = prompt("Сколько будет стоить данная работа?");
            } while (!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price })
        }

        for (let i = 0; i < 2; i++) {
            let name;
            let price = 0;

            do {
                name = prompt("Какой дополнительный тип услуги нужен?");
            } while (!appData.isString(name))

            do {
                price = prompt("Сколько будет стоить данная работа?");
            } while (!appData.isNumber(price))

            if (name in appData.services) {
                name = `${name} ${i + 1}`
            }

            appData.services[name] = +price
        }

        appData.adaptive = confirm("Нужен ли адаптив на сайте?");
    },
    addPrices: () => {
        appData.screenPrice = appData.screens.reduce((sum, item) => {
            return sum + Number(item.price)
        }, 0)

        for (let key in appData.services) {
            appData.allServicePrices += appData.services[key]
        }
    },
    getTitle: () => {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().slice(1).toLowerCase()
    },
    getFullPrice: () => {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices
    },
    getServicePercentPrices: () => {
        appData.servicePercentPrice = appData.fullPrice - appData.fullPrice * (appData.rollback / 100)
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
        console.log(appData.screens)
        console.log(appData.services)
    },
    start: () => {
        appData.asking()
        appData.addPrices()

        appData.getTitle()
        appData.getFullPrice()
        appData.getServicePercentPrices()

        appData.logger()
    }
}

appData.start() 