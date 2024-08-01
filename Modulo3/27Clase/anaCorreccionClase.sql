CREATE SCHEMA trailerflix;

CREATE TABLE trailerflix.contenido (
id BIGINT PRIMARY KEY AUTO_INCREMENT,
titulo VARCHAR(100) NOT NULL,
poster VARCHAR(100),
trailer VARCHAR(100),
resumen VARCHAR(1000) NOT NULL,
idCat INT NOT NULL,
idGen INT NOT NULL
);

CREATE TABLE trailerflix.categoria (
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL UNIQUE,
temporadas INT
);

CREATE TABLE trailerflix.genero (
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL UNIQUE
);

Alter TABLE trailerflix.contenido add constraint idCat FOREIGN KEY (idCat) REFERENCES trailerflix.categoria(id),
add constraint idGen FOREIGN KEY (idGen) REFERENCES trailerflix.genero(id);
CREATE TABLE trailerflix.tag (
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE trailerflix.actor (
id INT PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(100) NOT NULL
);

CREATE TABLE trailerflix.tags_de_contenido (
contenido_id BIGINT,
tag_id INT,
FOREIGN KEY (contenido_id) REFERENCES trailerflix.contenido(id),
FOREIGN KEY (tag_id) REFERENCES trailerflix.tag(id)
);

CREATE TABLE trailerflix.reparto_de_contenido (
contenido_id BIGINT,
actor_id INT,
FOREIGN KEY (contenido_id) REFERENCES trailerflix.contenido(id),
FOREIGN KEY (actor_id) REFERENCES trailerflix.actor(id)
);
