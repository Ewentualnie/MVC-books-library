import mysql from "mysql";
import {Request, Response} from "express";

const database = mysql.createConnection({
    user: 'admin',
    password: 'root',
    database: 'library'
});

const sqlQuery = 'CREATE TABLE IF NOT EXISTS books (id int AUTO_INCREMENT, name VARCHAR(50), year int, author VARCHAR(50), description VARCHAR(255), preview VARCHAR(50), title VARCHAR(100), PRIMARY KEY(id));';
const queryAll = 'SELECT * FROM books;'
const addAll = `
INSERT INTO books (name, year, author, description, preview, title) VALUES
('СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА',2003,'Андрей Богуславский','Лекции и практикум по программированию на Си++','22.jpg','СИ++ И КОМПЬЮТЕРНАЯ ГРАФИКА'),
('Программирование на языке Go!',2010,'Марк Саммерфильд','Лекции и практикум по программированию на Go!','23.jpg','Программирование на языке Go!'),
('Толковый словарь сетевых терминов и аббревиатур',2007,'М. Вильямс','Толковый словарь сетевых терминов и аббревиатур','25.jpg','Толковый словарь сетевых терминов и аббревиатур'),
('Python for Data Analysis',2011,'Уэс Маккинни','Python for Data Analysis and so on','26.jpg','Python for Data Analysis'),
('Thinking in Java (4th Edition)',2000,'Брюс Эккель','Лекции и практикум по программированию на Java','27.jpg','Thinking in Java (4th Edition)'),
('Introduction to Algorithms',2005,'Томас Кормен','Книга для развития алгоритмического мышления','29.jpg','Introduction to Algorithms'),
('JavaScript Pocket Reference',2012,'Чарльз Лейзерсон','Краткое руководство по JavaScript','31.jpg','JavaScript Pocket Reference'),
('Adaptive Code via C#: Class and Interface Design, Design Patterns, and SOLID Principles',2006,'Рональд Ривест','Лекции и практикум по программированию на С#','32.jpg','Adaptive Code via C#'),
('SQL: The Complete Reference',2009,'Клиффорд Штайн','Полное руководство по SQL','33.jpg','SQL: The Complete Reference'),
('PHP and MySQL Web Development',2011,'Дэвид Флэнаган','Разработка при помощи PHP и SQL','34.jpg','PHP and MySQL Web Development'),
('Статистический анализ и визуализация данных с помощью R',2013,'Сергей Мастицкий','Статистический анализ и визуализация данных с помощью R (что бы это ни было)','35.jpg','Статистический анализ и визуализация данных'),
('Computer Coding for Kid',2015,'Джон Вудкок','Программирование для детей','36.jpg','Computer Coding for Kid'),
('Exploring Arduino: Tools and Techniques for Engineering Wizardry',2017,'Джереми Блум','Руководство по Arduino для начинающих','37.jpg','Exploring Arduino'),
('Программирование микроконтроллеров для начинающих и не только',2014,'Белов А. В.','Руководство по программированию микроконтроллеров','38.jpg','Программирование микроконтроллеров'),
('The Internet of Things',2018,'Сэмюэл Грингард','Что такое интернет и нафига он нужен','39.jpg','The Internet of Things'),
('Sketching User Experiences: The Workbook',2017,'Сет Гринберг','Вообще не понятно что это и для чего','40.jpg','Sketching User Experiences'),
('InDesign CS6',2013,'Александр Сераков','Руководство пользователя InDesign','41.jpg','InDesign CS6'),
('Адаптивный дизайн. Делаем сайты для любых устройств',2015,'Тим Кедлек','Настольная книга фронтэндщика','42.jpg','Адаптивный дизайн'),
('Android для разработчиков',2019,'Пол Дейтел','Разработка для устройств Android','43.jpg','Android для разработчиков'),
('Clean Code: A Handbook of Agile Software Craftsmanship',2015,'Роберт Мартин','Как не писать говнокод','44.jpg','Clean Code'),
('Swift Pocket Reference: Programming for iOS and OS X',2020,'Энтони Грей','Разработка для устройств на базе iOS and OS X','45.jpg','Swift Pocket Reference'),
('NoSQL Distilled: A Brief Guide to the Emerging World of Polyglot Persistence',2009,'Мартин Фаулер','Видимо что-то по SQL','46.jpg','NoSQL Distilled'),
('Head First Ruby',2019,'Джей Макгаврен','Руководство по Ruby для чайников','47.jpg','Head First Ruby'),
('Practical Vim',2012,'Дрю Нейл','Вообще не понятно что это и для чего','48.jpg','Practical Vim');
`

export const neww = (req: Request, res: Response) => {
    database.connect(() => {
        database.query(sqlQuery, (err, result) => {
            console.log(result)
            res.send(result)
        })
    })
}

export const init = () => {
    database.connect()
    database.query(queryAll)
}

export const getAll = () => {
    database.connect()
    return database.query(queryAll)
}