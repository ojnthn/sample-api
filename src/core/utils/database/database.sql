/*
docker exec -it pg bash
psql
*/

CREATE DATABASE sampleApi;

CREATE TYPE enum_situacao as ENUM('Ativo', 'Inativo');
CREATE TYPE enum_situacao_carrinho as ENUM('Ativo', 'Fechado');

CREATE TABLE IF NOT EXISTS usuario (
  id SERIAL PRIMARY KEY,
  nome VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  telefone VARCHAR,
  situacao enum_situacao NOT NULL
);

COMMENT ON COLUMN usuario.id is 'Primary Key';
COMMENT ON COLUMN usuario.nome is 'Nome do usuário';
COMMENT ON COLUMN usuario.email is 'Email do usuário';
COMMENT ON COLUMN usuario.telefone is 'Telefone do usuário';
COMMENT ON COLUMN usuario.situacao is 'Situacao do usuário (Ativo, Inativo)';


CREATE TABLE IF NOT EXISTS produto (
  id SERIAL PRIMARY KEY,
  nome VARCHAR NOT NULL,
  preco FLOAT,
  situacao enum_situacao NOT NULL
);

COMMENT ON COLUMN produto.id is 'Primary Key';
COMMENT ON COLUMN produto.id is 'Nome do produto';
COMMENT ON COLUMN produto.id is 'Preco do produto';
COMMENT ON COLUMN produto.id is 'Situacao do produto (Ativo, Inativo)';


CREATE TABLE
    carrinho (
        id serial PRIMARY KEY ,
        usuario_id int NOT NULL,
        situacao enum_situacao_carrinho NOT NULL ,
        data_criacao TIMESTAMP ,
        data_atualizacao TIMESTAMP ,
        data_exclusao TIMESTAMP ,
        FOREIGN KEY (usuario_id) REFERENCES usuario(id)
    );

COMMENT ON COLUMN carrinho.id is 'Primary Key';
COMMENT ON COLUMN carrinho.usuario_id is 'Foreign Key';
COMMENT ON COLUMN carrinho.situacao is 'Situação do carrinho (Ativo, Fechado)';
COMMENT ON COLUMN carrinho.data_criacao is 'Data de criação do registro';
COMMENT ON COLUMN carrinho.data_atualizacao is 'Data de atualização do registro';
COMMENT ON COLUMN carrinho.data_exclusao is 'Data de exclusão do registro';


CREATE TABLE
    carrinho_produto (
        id serial PRIMARY KEY,
        carrinho_id int NOT NULL,
        produto_id int NOT NULL,
        preco DECIMAL(10, 2) NOT NULL,
        quantidade int NOT NULL,
        data_criacao TIMESTAMP ,
        data_atualizacao TIMESTAMP ,
        data_exclusao TIMESTAMP ,
        FOREIGN KEY (carrinho_id) REFERENCES carrinho(id),
        FOREIGN KEY (produto_id) REFERENCES produto(id)
    );

COMMENT ON COLUMN carrinho_produto.id is 'Primary Key';
COMMENT ON COLUMN carrinho_produto.carrinho_id is 'Foreign Key';
COMMENT ON COLUMN carrinho_produto.produto_id is 'Foreign Key';
COMMENT ON COLUMN carrinho_produto.preco is 'Preço do produto no carrinho';
COMMENT ON COLUMN carrinho_produto.quantidade is 'Quantidade do produto no carrinho';
COMMENT ON COLUMN carrinho_produto.data_criacao is 'Data de criação do registro';
COMMENT ON COLUMN carrinho_produto.data_atualizacao is 'Data de atualização do registro';
COMMENT ON COLUMN carrinho_produto.data_exclusao is 'Data de exclusão do registro';
