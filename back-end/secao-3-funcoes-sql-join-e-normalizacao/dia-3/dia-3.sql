DROP SCHEMA IF EXISTS zoologico;
CREATE SCHEMA zoologico;
USE zoologico;

CREATE TABLE animals (
	animal_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    espécie VARCHAR(30) NOT NULL,
    sexo VARCHAR(30) NOT NULL,
    idade INT NOT NULL,
    localização VARCHAR(70) NOT NULL
);

CREATE TABLE gerente (
	gerente_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL
);

CREATE TABLE cuidador (
	cuidador_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(30) NOT NULL,
    gerente_id INT NOT NULL,
	FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

CREATE TABLE cuidador_animal(
    cuidador_id INT,
    animal_id INT,
    CONSTRAINT PRIMARY KEY(cuidador_id, animal_id),
	FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animals (animal_id)
);
