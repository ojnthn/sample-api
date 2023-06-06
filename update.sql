RENAME TABLE `users` TO `usuario`;

ALTER TABLE
    `usuario` CHANGE `name` `nome` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL;

ALTER TABLE
    `usuario` CHANGE `phone` `telefone` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL;

ALTER TABLE
    `usuario` CHANGE `situation` `situacao` enum('Ativo', 'Inativo') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL;

ALTER TABLE usuario DROP FOREIGN KEY usuario_ibfk_1;

ALTER TABLE `usuario` DROP COLUMN `category_id`;

RENAME TABLE `products` TO `produto`;

ALTER TABLE
    `produto` CHANGE `name` `nome` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL;

ALTER TABLE
    `produto` CHANGE `price` `preco` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL;

ALTER TABLE
    `produto` CHANGE `situation` `situacao` enum('Ativo', 'Inativo') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL;

ALTER TABLE produto DROP FOREIGN KEY produto_ibfk_1;

ALTER TABLE `produto` DROP COLUMN `category_id`;

DROP TABLE IF EXISTS `user_categories`;

DROP TABLE IF EXISTS `product_categories`;