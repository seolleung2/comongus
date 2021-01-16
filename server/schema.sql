DROP DATABASE IF EXISTS comongus;
CREATE DATABASE comongus;
USE comongus;

CREATE TABLE `todolist` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `text` varchar(1000) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT (now())
);