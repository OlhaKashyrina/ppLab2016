'use strict';

//Задание1
let writers = ['Федор Достоевский', 'Михаил Булгаков', 
               'Эрих Мария Ремарк', 'Эрнест Хемингуэй', 
               'Виктор Гюго', 'Уильям Шекспир', 'Артур Конан Дойль', 
               'Джордж Оруэлл', 'Джек Лондон', 'Рэй Брэдбери', 'Марк Твен', 
               'Жюль Верн', 'Чарльз Диккенс', 'Теодор Драйзер', 
               'Клайв Стейплз Льюис', 'Джон Рональд Руэл Толкин', 
               'О.Генри', 'Астрид Линдгрен', 'Эдгар По', 'Джоан Роулинг', 
               'Вальтер Скотт', 'Дэниел Киз', 'Стивен Кинг', 
               'Кристофер Паолини', 'Диана Уинн Джонс'];

console.log('\t' + 'Задание №1:' + '\n');
console.log('Писатели художественной литературы: \n');
writers.forEach(writer => {
  console.log(writer);
});

//Задание2

function isSmallEnough(value) {
  return value.length <= 10;
};
var filtered = writers.filter(isSmallEnough);

console.log('\n' + '\t' +'Задание №2:' + '\n');
console.log('Имена не длиннее 10 букв: \n');
filtered.forEach(writer => {
  console.log(writer);
});

//Задание3

function wordsLength(a, b) {
  return a.length - b.length;
};

var sorted = writers.sort(wordsLength);

console.log('\n' + '\t' +'Задание №3:' + '\n');
console.log('Сортировка по возрастанию длины слов: \n');
sorted.forEach(writer => {
  console.log(writer);
});

//Задание4.1

function toSymbol(str) {
  var arr = [];
  for (let i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i);
  };
  return arr;
};

var writersSymbols = [];
writers.forEach(writer => {
  var subwritersSymbols = toSymbol(writer);
  writersSymbols.push(subwritersSymbols);
});

console.log('\n' + '\t' +'Задание №4:');
console.log('\n' + 'Массивы кодов символов для каждого элемента:' + '\n');
writersSymbols.forEach(writer => {
  console.dir(writer);
});

//Задание4.2

var wordsArr = [];
writers.forEach(writer => {
  var subwordsArr = writer.split(' ');
  wordsArr.push(subwordsArr);
});

console.log('\n' + 'Массивы слов в каждой строке:' + '\n');
wordsArr.forEach(writer => {
  console.log(writer);
});

//Задание5.1

Array.prototype.searchSubstring = function(s) {
  return this.filter(item => item.indexOf(s) >= 0);
};

console.log('\n' + '\t' +'Задание №5:');
console.log('\n' + 'Поиск строк в массиве по подстроке "Джо":' + '\n');
console.log(writers.searchSubstring('Джо'));

//Задание5.2

var text = 'Клайв Стейплз Льюис был английским и ирландским писателем и богословом.' + 
           '\nСлава пришла к нему вместе с циклом «Хроники Нарнии», написанным для детей.' +
	   '\nДжоан Роулинг – английская писательница, известная всему миру' +
	   '\nблагодаря серии книг про Гарри Поттера.' +
	   '\nДжордж Мартин – один из самых популярных писателей в стили фэнтези.' +
	   '\nЕго книги из серии «Песнь Льда и Пламени» расходятся огромными тиражами,' +
	   '\nа по мотивам первых книг снимается сериал «Игра Престолов».' +
	   '\nДжон Рональд Руэл Толкин по праву назван "отцом" современного фэнтези.';

Array.prototype.searchInText = function(s) {
  return this.filter(item => s.indexOf(item) >= 0);
};

console.log('\n' + 'Текст для поиска:' + '\n' + text);
console.log('\n' + 'Поиск строк массива в тексте:' + '\n');
console.log(writers.searchInText(text));