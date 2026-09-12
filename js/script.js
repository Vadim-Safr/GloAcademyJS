'use strict';

const bookList = document.querySelectorAll('.book')
const bgImage = document.querySelector('body')
const bookText = bookList[4].querySelector('a')
const adBanner = document.querySelector('.adv')

const book2 = bookList[0].querySelectorAll('li')
const book5 = bookList[5].querySelectorAll('li')
const book6 = bookList[2].querySelectorAll('li')

// добавление главы
const newElem = document.createElement('li')
newElem.textContent = 'Глава 8: За пределами ES6'
book6[book6.length - 1].after(newElem)

// восстановление порядка книг
bookList[1].after(bookList[0])
bookList[5].after(bookList[2])
bookList[4].after(bookList[3])

// замена заднего фона
bgImage.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'

// исправление опечатки
bookText.textContent = bookText.textContent.replaceAll('Пропопипы', 'Прототипы')

//удаление рекламы
adBanner.remove()

//сортировка глав в книгах
const chapterSorter = (book) => {
    let startOrigin;
    let chapterNumber = [];
    let appendixList = [];

    const addElement = (list) => {
        for (let elem = 0; elem < list.length; elem++) {
            currentPlace.after(list[elem])
            currentPlace = list[elem]
        }
    }

    for (let chapter = 0; chapter < book.length; chapter++) {
        for (let i = 0; i < book.length; i++) {
            if (book[chapter].textContent.includes(`Глава ${i}`)) {
                chapterNumber.push(book[chapter])
                if (i === 1) {
                    startOrigin = chapter
                }
                break
            }

            if (/Приложение [A-Z]/.test(book[chapter].textContent) && !appendixList.includes(book[chapter])) {
                appendixList.push(book[chapter])
            }
        }
    }

    chapterNumber.sort((a, b) => {
        const chap1 = parseInt(a.textContent.match(/\d+/))
        const chap2 = parseInt(b.textContent.match(/\d+/))

        return chap1 - chap2
    })

    appendixList.sort((a, b) => {
        const lett1 = a.textContent.match(/Приложение ([A-Z])/)[1]
        const lett2 = b.textContent.match(/Приложение ([A-Z])/)[1]

        return lett1.localeCompare(lett2);
    })

    let currentPlace = book[startOrigin];

    addElement(chapterNumber)
    addElement(appendixList)
}

chapterSorter(book2)
chapterSorter(book5)