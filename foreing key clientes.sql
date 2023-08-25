CREATE TABLE conteiner (
    id INTEGER PRIMARY KEY,
    Cliente INTEGER NOT NULL,
    Numero Varchar(12) NOT NULL,
    Tipo Varchar(3) NOT NULL,
    Status Varchar(7) NOT NULL,
    Categoria Varchar(15) NOT NULL,
    FOREIGN KEY(Cliente) REFERENCES Clientes(id)
)
