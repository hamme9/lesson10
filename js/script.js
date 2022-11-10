'use strict';

const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const bookTitle = books.querySelectorAll('[target="_blank"]');
const background = document.querySelector('body');
const adv = document.querySelector('.adv');
const chaptersBookTwo = book[0].querySelectorAll('li');
const chaptersBookFive = book[5].querySelectorAll('li');
const chaptersBookSix = book[2].querySelectorAll('li');
const cloneChapterBookSix = chaptersBookSix[8].cloneNode(true);

books.append(book[1]);
books.append(book[0]);
books.append(book[4]);
books.append(book[3]);
books.append(book[5]);
books.append(book[2]);

background.style = 'background-image: url(./image/you-dont-know-js.jpg)';

bookTitle[4].textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

chaptersBookTwo[1].after(chaptersBookTwo[3]);
chaptersBookTwo[3].after(chaptersBookTwo[6]);
chaptersBookTwo[9].after(chaptersBookTwo[2]);
chaptersBookTwo[6].after(chaptersBookTwo[8]);

chaptersBookFive[1].after(chaptersBookFive[9]);
chaptersBookFive[4].after(chaptersBookFive[2]);
chaptersBookFive[8].before(chaptersBookFive[5]);

cloneChapterBookSix.textContent = ('Глава 8: За пределами ES6');
chaptersBookSix[8].after(cloneChapterBookSix);