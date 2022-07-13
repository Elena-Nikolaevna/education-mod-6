//================Найти  Среднее
const nambers = [2, 3, 11, 15, 20, 3, 5, 8, 10, 16, 2, 11, 14, 15, 18];
// Сначала находим сумму чисел
const getSum = nambers.reduce((total, namber) => {
    return total + namber;
}, 0);
// сумму чисел делим на длину массива
const getAverage = getSum / nambers.length;
//console.log(getAverage)

//============ Посчитать количество джедаев в массиве===============================================
const users = [
    {
        username: "lando12",
        jedi: false,
    },
    {
        username: "kvaigan99",
        jedi: true,
    },
    {
        username: "anakin sqalker",
        jedi: false, // dark side isnt jedi wey!!
    },
    {
        username: "littlegrinpag",
        jedi: true,
    },
    {
        username: "ray",
        jedi: true,
    },
    {
        username: "padamestqaanever",
        jedi: false,
    },
];
//создаем функцию countJedi, она будет получать users
const countJedi = users => {
    return users.reduce((count, user) => {
        if (user.jedi) {
            count += 1;
        }
        return count;
    }, 0); // count это 0
};

//console.log(countJedi(users));
/// теперь нужно получить массив имен джедаев===================

const getArrayOnlyJedi = users => {
    return users.reduce((names, user) => {
        if (user.jedi) {
            names.push(user.username);
        }
        return names;
    }, []);
};
//console.log(getArrayOnlyJedi(users));

//=====================================Склеить
// Склеить все документы в один
// отобразить всех авторов
// Взять дату последнего документа

const documents = [
    {
        content: "Ты был мне как брат! Я любил тебя!",
        author: "ObiWan Kenobi",
        date: "2017-01-17 07:13:07",
    },
    {
        content: "База повстанцев находится в Даунтауре",
        author: "Leya Organa",
        date: "2020-01-17 07:13:56",
    },
    {
        content: "Страх открывает доступ к темной стороне",
        author: "Yoda",
        date: "2006-01-17 07:13:11",
    },
];
const composeDocuments = documents => {
    return documents.reduce(
        (generalDocument, document) => {
            generalDocument.content =
                generalDocument.content + " " + document.content; // склеить все названия в один массив
            generalDocument.authors.push(document.author); // отобразить всех авторов
            /// а теерь получаем самую большую дату из всех что указаны
            if (
                !generalDocument.date ||
                new Date(generalDocument.date).valueOf() <=
                    new Date(document.date)
            ) {
                generalDocument.date = document.date;
            }
            return generalDocument;
        },
        {
            content: "",
            authors: [],
            data: null,
        },
    ); //возвращаем обьект
};
console.log(composeDocuments(documents));
