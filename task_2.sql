-- Создаем таблицы, если таких не существует

CREATE TABLE IF NOT EXISTS `Students` (
	`StudentId` INT(2) NOT NULL AUTO_INCREMENT,
	`FirstName` VARCHAR(256) NOT NULL,
	`LastName` VARCHAR(256) NOT NULL,
	`Group` VARCHAR(256) NOT NULL,
	PRIMARY KEY(`StudentId`)
);

CREATE TABLE IF NOT EXISTS `Exams` (
	`StudentId` INT(6) NOT NULL,
	`ExamName` VARCHAR(256) NOT NULL,
	`Result` INT(1) NOT NULL
);

-- SQL запрос, который выводит имена и фамилии студентов у которых больше двух экзаменов с результатом меньше 3.

SELECT FirstName, LastName FROM Students
FROM Students, Exams WHERE students.StudentId = exams.StudentId
AND exams.Result < 3
GROUP BY students.StudentId
HAVING count(*) > 2


-- SQL запрос, который выводит название групп, в которых таких студентов больше 10

SELECT Group FROM Students
JOIN Exams ON Exams.StudentId = Students.StudentId
GROUP BY Exams.StudentId
HAVING count(Exams.ExamName) > 2 AND Exams.Result < 3 AND count(Students.group) > 10