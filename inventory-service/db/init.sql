CREATE TABLE IF NOT EXISTS products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    stock INT NOT NULL
);

INSERT INTO products (name, stock) VALUES ('Laptop', 10), ('Mouse', 5);