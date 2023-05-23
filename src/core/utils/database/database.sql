/*
docker exec -it pg bash
psql
*/

CREATE DATABASE sampleApi;

CREATE TABLE IF NOT EXISTS usuario (
  id SERIAL PRIMARY KEY,
  nome VARCHAR NOT NULL,
  email VARCHAR,
  telefone VARCHAR
);

CREATE TABLE IF NOT EXISTS produtos (
  id SERIAL PRIMARY KEY,
  descricao VARCHAR NOT NULL,
  valor float
)
