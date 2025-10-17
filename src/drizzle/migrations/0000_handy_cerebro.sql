CREATE TABLE `users` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`userName` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` text NOT NULL,
	`created_at` timestamp NOT NULL DEFAULT (now()),
	`deleted_at` timestamp,
	`updated_at` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_userName_unique` UNIQUE(`userName`),
	CONSTRAINT `users_email_unique` UNIQUE(`email`)
);
