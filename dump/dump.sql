SET NAMES utf8mb4;
USE library;
CREATE TABLE IF NOT EXISTS books
(
    id          INT AUTO_INCREMENT,
    name        VARCHAR(150),
    year        INT,
    description VARCHAR(255),
    preview     VARCHAR(50),
    title       VARCHAR(100),
    pages       INT,
    isDeleted   boolean,
    clickCount  INT,
    views       INT,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS authors
(
    id   INT AUTO_INCREMENT,
    name VARCHAR(50),
    UNIQUE (name),
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS pairs
(
    book_id   INT,
    author_id INT,
    FOREIGN KEY (book_id) REFERENCES books (id),
    FOREIGN KEY (author_id) REFERENCES authors (id)
);
INSERT INTO books (name, year, description, preview, title, pages, isDeleted, clickCount, views)
VALUES ('СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА', 2003,
        'Опис книги \"СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА\"', '22.jpg', 'СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА', 123, false, 45, 88),
       ('Програмування на мові Go!', 2010, 'Програмування на мові Go!, напевно щось цікаве',
        '23.jpg', 'Програмування на мові Go!', 235, false, 899, 96),
       ('Толковый словарь сетевых терминов и аббревиатур', 2007,
        'Тлумачний словник мережевих термінів та аббревіатур, але чомусь русьнявою', '25.jpg',
        'Тлумачний словник мережевих термінів та аббревіатур', 366,
        false, 89, 63),
       ('Python for Data Analysis', 2011, 'Python for Data Analysis and so on', '26.jpg',
        'Python for Data Analysis', 455, false, 41, 96),
       ('Thinking in Java (4th Edition)', 2000,
        'Програмування на Java, 4 видання з блекджеком і повіями',
        '27.jpg', 'Thinking in Java (4th Edition)', 500, false, 97, 47),
       ('Introduction to Algorithms', 2005,
        'Введення в алгоритми, маст хев кожному починаючому програмісту', '29.jpg',
        'Introduction to Algorithms', 322, false, 4, 47),
       ('JavaScript Pocket Reference', 2012, 'Книга про JavaScript', '31.jpg',
        'JavaScript Pocket Reference', 315, false, 73, 78),
       ('Adaptive Code via C#', 2006,
        'Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles',
        '32.jpg', 'Adaptive Code via C#', 224, false, 45, 9),
       ('SQL', 2009, 'SQL: The Complete Reference', '33.jpg',
        'SQL: The Complete Reference', 299, false, 110, 80),
       ('PHP and MySQL Web Development', 2011, 'Розробка вебу за допомогою PHP та SQL', '34.jpg',
        'PHP and MySQL Web Development', 306, false, 230, 98),
       ('Статистический анализ и визуализация данных с помощью R', 2013,
        'Щось про якийсь R', '35.jpg',
        'Статистический анализ и визуализация данных', 111, false, 588, 98),
       ('Computer Coding for Kid', 2015, 'Програмування для дітлахів', '36.jpg',
        'Computer Coding for Kid', 696, false, 999, 11),
       ('Exploring Arduino', 2017,
        'Exploring Arduino: Tools and Techniques for Engineering Wizardry', '37.jpg',
        'Exploring Arduino', 700, false, 300, 22),
       ('Программирование микроконтроллеров для начинающих и не только', 2014,
        'Автора треба перевірити, якщо руський то не раджу', '38.jpg',
        'Программування мікроконтроллерів (є ще щось окрім ардуіно о_О)', 200, false, 235, 65),
       ('The Internet of Things', 2018, 'Всяка всячина про інтернет', '39.jpg',
        'The Internet of Things', 299, false, 145, 48),
       ('Sketching User Experiences: The Workbook', 2017,
        'Щось незрозуміле, ні про що, ні для чого, хз повний',
        '40.jpg', 'Sketching User Experiences', 965, false, 78, 78),
       ('InDesign CS6', 2013, 'Опис книги InDesign CS6', '41.jpg', 'InDesign CS6', 3, false, 858, 55),
       ('Адаптивный дизайн', 2015, 'Розробка сайтів під будь-який гаджет',
        '42.jpg', 'Адаптивный дизайн', 999, false, 96, 63),
       ('Android для разработчиков', 2019, 'Розробка додатків для Android', '43.jpg',
        'Android для разработчиков', 111, false, 1115, 69),
       ('Clean Code', 2015, 'Clean Code: A Handbook of Agile Software Craftsmanship',
        '44.jpg', 'Clean Code', 53, false, 9999, 48),
       ('Swift Pocket Reference', 2020,
        'Swift Pocket Reference: Programming for iOS and OS X', '45.jpg', 'Swift Pocket Reference', 585, false, 965,
        88),
       ('NoSQL Distilled', 2009,
        'NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence', '46.jpg', 'NoSQL Distilled',
        421, false, 9009, 89),
       ('Head First Ruby', 2019, 'Щось по Ruby, може для новачків', '47.jpg', 'Head First Ruby', 568,
        false, 999999, 99),
       ('Practical Vim', 2012,
        'Найкращій текстовий редактор евер на думку 99% програмістів по всьому світі', '48.jpg', 'Practical Vim', 311,
        false, 99999999, 78);
INSERT INTO authors (name)
VALUES ('А. Богуславський'),
       ('М. Саммерфільд'),
       ('М. Вільямс'),
       ('У. Маккінні'),
       ('Б. Еккель'),
       ('Т. Кормен'),
       ('Ч. Лейзерсон'),
       ('Р. Рівест'),
       ('К. Штайн'),
       ('Д. Фленеган'),
       ('Г. М. Холл'),
       ('Дж. Р. Грофф'),
       ('Л. Веллінг'),
       ('С. Мастицький'),
       ('Дж. Вудкок'),
       ('Дж. Блум'),
       ('А. Белов'),
       ('С. Грінгард'),
       ('С. Грінберг'),
       ('А. Сєраков'),
       ('Т. Кедлек'),
       ('П. Дейтел'),
       ('Х. Дейтел'),
       ('Р. Мартін'),
       ('Е. Грей'),
       ('М. Фаулер'),
       ('П. Дж. Садаладж'),
       ('Дж. Макгаврен'),
       ('Д. Нейл');

INSERT INTO pairs (book_id, author_id)
VALUES (1, 1),
       (2, 2),
       (3, 3),
       (4, 4),
       (5, 5),
       (6, 6),
       (6, 7),
       (6, 8),
       (6, 9),
       (7, 10),
       (8, 11),
       (9, 12),
       (10, 13),
       (11, 14),
       (12, 15),
       (13, 16),
       (14, 17),
       (15, 18),
       (16, 19),
       (17, 20),
       (18, 21),
       (19, 22),
       (19, 23),
       (20, 24),
       (21, 25),
       (22, 26),
       (22, 27),
       (23, 28),
       (24, 29);