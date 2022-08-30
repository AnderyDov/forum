-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Авг 15 2022 г., 18:18
-- Версия сервера: 8.0.24
-- Версия PHP: 8.0.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `forum`
--

-- --------------------------------------------------------

--
-- Структура таблицы `notes`
--

CREATE TABLE `notes` (
  `id` int NOT NULL,
  `top` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `date` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `message` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Дамп данных таблицы `notes`
--

INSERT INTO `notes` (`id`, `top`, `date`, `name`, `message`) VALUES
(21, 'GGG', '1660465159051', 'jon', 'New Topic has been created'),
(22, 'FFF', '1660466448121', 'jon', 'New Topic has been created'),
(25, 'FFF', '1660491588535', 'jon', 'Hello@'),
(26, 'FFF', '1660491670602', 'jon', 'Hello%%%'),
(27, 'FFF', '1660491781913', 'jon', 'RURURUR'),
(28, 'FFF', '1660491963610', 'jon', 'Htllo4353454'),
(29, 'FFF', '1660491989072', 'jon', 'fdhfdgfdg'),
(30, 'DDD', '1660535332836', 'jon', 'New Topic has been created'),
(31, 'DDD', '1660537873011', 'jon', 'Hello'),
(32, 'FFF', '1660541226304', 'jon', 'Hello oerioeiroeiro'),
(33, 'FFF', '1660541285455', 'jon', 'dfjlsdkjfsjdl'),
(34, 'FFF', '1660543341441', 'jon', 'djfgldfjgljdflgjld'),
(35, 'GGG', '1660575550454', 'jon', 'Hello'),
(36, 'GGG', '1660576191585', 'jon', 'iriririr');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
