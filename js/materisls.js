//=====================================================================Метод reduce()
//Метод reduce(callback, initialValue) используется для последовательной обработки каждого элемента массива с сохранением промежуточного результата, как аккумулятор. Немного сложнее других в усвоении, но результат стоит того.

//массив.reduce((previousValue, element, index, array) => {
  // Тело коллбек-функции
//}, initialValue);

/* Не изменяет оригинальный массив.
Поэлементно перебирает оригинальный массив.
Возвращает что угодно.
Делает что угодно.
Легче всего представить его работу на примере подсчёта суммы элементов массива. */

const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
  return previousValue + number;
}, 0);

console.log(total); // 32

/* Первый параметр коллбек-функции (previousValue) это аккумулятор, то есть промежуточный результат. Значение которое вернёт коллбек-функция на текущей итерации, будет значением этого параметра на следующей.

Вторым аргументом для reduce() можно передать необязательное начальное значение аккумулятора - параметр initialValue.

# Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
# присваивает ей значение параметра initialValue или первого элемента
# перебираемого массива, если initialValue не задан.
previousValue = 0

# Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
# параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

# После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
Результат - 32

То есть метод reduce() используется когда необходимо взять «много» и привести к «одному». В повседневных задачах его применение сводится к работе с числами.

Массив объектов
При работе с массивом объектов выполняется редуцирование по значению какого-то свойства. Например, есть массив студентов с баллами за тест. Необходимо получить средний бал. */

const students = [
  { name: "Манго", score: 83 },
  { name: "Поли", score: 59 },
  { name: "Аякс", score: 37 },
  { name: "Киви", score: 94 },
  { name: "Хьюстон", score: 64 },
];

// Название аккумулятора может быть произвольным, это просто параметр функции
const totalScore = students.reduce((total, student) => {
  return total + student.score;
}, 0);

const averageScore = totalScore / students.length;

//============================================Продвинутый reduce
//Допустим у нас есть следующая задача: из массива постов твиттера отдельного пользователя необходимо посчитать сумму всех лайков. Можно перебрать циклом for или forEach, каждое из этих решений потребует дополнительного кода. А можно использовать reduce.

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

// Пройдем по всем элементам коллекции и прибавим значения свойства likes
// к аккумулятору, начальное значение которого укажем 0.
const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(likes); // 32

// Наверное подсчет лайков не одиночная операция, поэтому напишем функцию
// для подсчета лайков из коллекции
const countLikes = tweets => {
  return tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);
};

console.log(countLikes(tweets)); // 32

//Заметили свойство tags у каждого поста? Продолжая тему reduce, мы соберем в массив все теги, которые встречаются в постах.

/* const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
 */
// Пройдем по всем элементам коллекции и добавим значения свойства tags
// к аккумулятору, начальное значение которого укажем пустым массивом [].
// На каждой итерации пушим в аккумулятор все элементы tweet.tags и возвращаем его.
const tags = tweets.reduce((allTags, tweet) => {
  allTags.push(...tweet.tags);

  return allTags;
}, []);

console.log(tags);

// Наверное сбор тегов не одиночная операция, поэтому напишем функцию
// для сбора тегов из коллекции
const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

console.log(getTags(tweets));

//После того, как мы собрали все теги из постов, хорошо бы было посчитать количество уникальных тегов в массиве. И снова reduce тут как тут.

/* const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
]; */

/* const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

const tags = getTags(tweets); */

// Вынесем callback-функцию отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе acc нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Начальное значение аккумулятора это пустой объект {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);